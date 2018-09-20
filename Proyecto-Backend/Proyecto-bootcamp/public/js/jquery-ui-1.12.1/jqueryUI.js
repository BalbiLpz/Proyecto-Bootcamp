$(document).ready(function() {
    var elemento = $('.elemento');
    elemento.draggable().resizable();

    var lista = $('.listaOrdenable');
    //lista.selectable();


    lista.sortable({
        update: function() {
            console.log('Ha cambiado la lista');
        }
    });
    lista.sortable();

    var area = $('#area');
    var movido = $('#elemento-movido');
    movido.draggable();


    area.droppable({
        drop: function() {
            $(this).css('background-color', 'yellow')
        }
    });
    area.droppable();
})