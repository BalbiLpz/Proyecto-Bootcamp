var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
var service = require('../services');
var jwtDecode = require('jwt-decode');

var controller = {

    //----------------Añadimos Menu--------------- 
    addMenu: function (req, res) {
        //Decodificar token
        var token = req.body.token;
        console.log(token)
        var decoded = jwtDecode(token);
        console.log(decoded);
        let sql = `INSERT INTO menu (id_usuario, nombre_menu, cliente, fecha_inicio, fecha_fin, carbohidratos, proteinas, grasas ) 
                VALUES ('${decoded.sub}', '${req.body.nombreMenu}', '${req.body.cliente}', '${req.body.fechaInicio}', '${req.body.fechaFin}', '${req.body.cantidadCarbohidratos}', '${req.body.cantidadProteinas}', '${req.body.cantidadGrasas}')`;
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                return res.status(200).send({ nombre: req.body.nombreMenu });
            }

        }
        );
    },

    //---------------Obtenemos datos de Menu----------

    getMenu: function (req, res) {
        //Decodificar token
        var token = req.query.token;
        console.log(token)
        var decoded = jwtDecode(token);
        console.log(decoded);
        let sql = `SELECT * from menu WHERE id_usuario = ${decoded.sub}`;
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

    //------------Eliminamos Menu-----------

    deleteMenu: function (req, res) {
        console.log(req.body.id)
        let sql = `DELETE FROM menu WHERE id_menu = '${req.body.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                
                res.send(result);
            
            }
        });
    }

}; //cierre de la variable Controller

module.exports = controller;