$(document).ready(function(){
    
    // Color and Canvas Variables
    var color = $('#colorPicker').attr('value');
    var gridCanvas = $('#pixelCanvas');

    // Grid Size Variables
    var height = $('inputHeight').val();
    var width = $('inputWidth').val();


    // TODO: Creates rows and columns inside the #pixel_canvas table.
    function makeGrid() {
        gridCanvas.children().remove();
        for(var i = 1; i <= height; i++){ //row
            gridCanvas.append('<tr></tr>');
            for(var j=1; j <= width; j++){ // column
                $('tr:nth-child(' + i + ')').append('<td></td>'); 
            }
        }
    }

    // TODO: On click adds selected background color to columns.
    $(canvas).on('click', 'td', function(event){
        $(this).css('background', color);
    });

    // TODO: When sizes submitted creates grids.
    $('#sizePicker').on(submit, function(event){
        event.preventDefault();
        makeGrid();
    });

});