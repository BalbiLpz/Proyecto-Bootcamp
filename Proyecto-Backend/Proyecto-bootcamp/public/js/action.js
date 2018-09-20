$(document).ready(function() {
    //---------------Oculto el boton de realizar la modificacion---------
    $('#modificar_enviar').hide();
    $('#login').hide();
    $('#registro').hide();
    $('#acceder').hide();
    //--------------Accion de boton para iniciar la modificacion--------
    $("#usuarioadmin").on('click', '.modificarusuario', function() {
        $('#enviar').hide(1000);
        $('#modificar_enviar').show(1000);
    });

    $("#enviar").click(function() {
        $("#enviar").hide(1000);
        $("#login").show(1000);
    });

    $("#login").click(function() {
        $("#intro1").hide(500);
        $("#registro").show(1000);
        $("#flechadown").hide(1000);
        $('#acceder').show(1000);
    });

});