$(document).ready(function() {
    var boton = $('#enviar');
    var usuarios = $('#usuarioadmin')
    var botonupdate = $('#modificar_enviar');

    //---------- Variables para almacenar cada valor del objeto usuario
    var nombre = $('#nombre');
    var apellidos = $('#apellidos');
    var email = $('#email');
    var contrasenia = $('#contrasenia');
    var idimput = $('#imputoculto');
    var palabraseg = $('#palabra');


    //----------------Añadir Usuarios---------------


    boton.on('click', function() {
        let data = $('#formularioContacto').serialize();
        $.post('http://localhost:3000/usuario/add', data, function(proyecto) {
            console.log(proyecto.token)
            localStorage.setItem(
                'Token',
                proyecto.token
            )
        });
    });

    //----------------Leer datos de Srever-------------


    $.get('http://localhost:3000/usuario/add/data', function(respuesta) {
        respuesta.forEach(usuario => {
            usuarios.append('<tr id="' + usuario.id_usuario + '">' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.apellidos + '</td>' +
                '<td>' + usuario.email + '</td>' +
                '<td>' + '<button type="button"  class="btn btn-secondary modificarusuario">' +
                'Modificar</button>' + '<button class="btn btn-danger eliminarusuario">' +
                'Eliminar</button>' + '</td>' +
                '</tr>');
        });
    });

    //---------------------Eliminar------------------

    usuarios.on('click', '.eliminarusuario', function() {
        let id = $(this).parent().parent().attr('id');
        let td = $(this).parent().parent();
        td.remove();
        $.post('http://localhost:3000/usuario/delete', { id: id }, function(proyecto) {});
    });



    //-----------------------Modificar---------------------


    usuarios.on('click', '.modificarusuario', function() {
        let id = $(this).parent().parent().attr('id');
        $.get('http://localhost:3000/usuario/modificar', { id: id }, function(respuesta) {
            idimput.val(respuesta[0].id_usuario);
            nombre.val(respuesta[0].nombre);
            apellidos.val(respuesta[0].apellidos);
            email.val(respuesta[0].email);
            contrasenia.val(respuesta[0].contrasenia);
        });


    });


    //----------------------Accion de modificar-------------


    botonupdate.on('click', function() {
        let data = $('#formularioContacto').serialize();
        $.post('http://localhost:3000/usuario/modificar', data, function(respuesta) {
            location.reload();
        });
    });
});