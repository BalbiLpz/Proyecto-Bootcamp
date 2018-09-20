var app = require('./app');
var projectController = require('./controllers/usuarios');
var menusController = require('./controllers/menus');
var auth = require('./middleware/auth');


//-----------------Rutas-------------

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/usuario', function(req, res) {
    res.render('indexusuario');
});



//----------------Añade Usuarios--------

app.post('/usuario/add', projectController.addUsuario);


//----------------Login------------------
app.post('/Login/user', projectController.loginUser);



//----------------Leer Datos base de datos----------


app.get('/usuario/add/data', projectController.getUsuario);


//--------------------Eliminar Usuarios---------------


app.post('/usuario/delete', projectController.deleteUsuario);


//----------------------Modificar usuario---------------

//*-*-*-*-*-*Recoge los datos de base de datos*-*-*-*-*-*-*

app.get('/usuario/modificar', projectController.getUpdateUsuario);

//-*-*-*-*-*-*-*-*-*Hace el update sustituyendo datos-*-*-*-*-*-*

app.post('/usuario/modificar', projectController.addUpdateUsuario);


            /*-*-*-*-*-*-*-*API MENUS*-*-*-*-*-*-*-*/


//----------------Añade Menu------------

app.post('/menu/add', menusController.addMenu);

//---------------Mostrar Menus---------

app.get('/menu/get/data', menusController.getMenu);

//--------------Borra Menus-----------

app.post('/menu/delete', menusController.deleteMenu);


app.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({ message: 'Tiene acceso' })
})

module.exports = app