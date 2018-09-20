var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
var service = require('../services');
var jwtDecode = require('jwt-decode');

var controller = {

    //----------------Añadimos usuario--------------- 
    addUsuario: function (req, res) {
        let password = req.body.contraseniaUsuario;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
                let sql = `INSERT INTO usuario (nombre, apellidos, contrasenia, email) 
                VALUES ('${req.body.nombreUsuario}', '${req.body.apellidosUsuario}', '${password}', '${req.body.emailUsuario}')`;
                con.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        return res.status(200).send({nombre: req.body.nombreUsuario});
                        }
                        
                    }
                );
            });
        })
    },

    //---------------Obtenemos datos de Usuario----------

    getUsuario: function (req, res) {
        //Decodificar token
        var token = req.query.token;
        console.log(token)
        var decoded = jwtDecode(token);
        console.log(decoded);
        let sql = `SELECT nombre, apellidos, email from usuario WHERE id_usuario = ${decoded.sub}`;
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result)
                res.send(result);

            }
        });
    },

    //------------Eliminamos Usuarios-----------

    deleteUsuario: function (req, res) {
        //Decodificar token
        var token = req.body.token;
        console.log(token)
        var decoded = jwtDecode(token);
        console.log(decoded);
        let sql = `DELETE FROM usuario WHERE id_usuario = '${decoded.sub}'`;
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    //----------------------Modificar usuario---------------

    //*-*-*-*-*-*Recoge los datos de base de datos*-*-*-*-*-*-*
    getUpdateUsuario: function (req, res) {
        let sql = `SELECT * from usuario WHERE id_usuario = '${req.query.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },


    //-*-*-*-*-*-*-*-*-*Hace el update sustituyendo datos-*-*-*-*-*-*
    addUpdateUsuario: function (req, res) {
        let sql = `UPDATE usuario set nombre = '${req.body.nombre}', 
                apellidos = '${req.body.apellidos}', 
                email = '${req.body.email}',
                contrasenia = '${req.body.contrasenia}',  
                WHERE id_usuario = ${req.body.id}`;
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },

    loginUser: function (req, res) {
        let sql = `SELECT * from usuario where email ='${req.body.email}'`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    console.log(result)
                    bcrypt.compare(req.body.password, result[0].contrasenia, function (err, iguales) {
                        if (err) {
                            console.log(err)
                            return res.send(err)
                        } else {
                            if (iguales) {
                                const user = {
                                    id: result[0].id_usuario
                                }
                                return res.status(200).send({ token: service.createToken(user) })
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
    }




}; //cierre de la variable Controller

module.exports = controller;