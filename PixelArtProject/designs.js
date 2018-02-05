$(document).ready(function(){

    // TODO: Creates rows and columns.
    function makeGrid() {

        // Grid Size Variables
        var height = $('#inputHeight').val();
        var width = $('#inputWidth').val();

        // Canvas Variables
        var gridCanvas = $('#pixelCanvas');

        // Clears grid
        gridCanvas.children().remove();

        for(var i = 1; i <= height; i++){ //row
            gridCanvas.append('<tr></tr>');
            for(var j=1; j <= width; j++){ // column
                $('tr:nth-child(' + i + ')').append('<td></td>'); 
            }
        }
    }

    // TODO: On click adds selected background color to columns.
    $('body').on('click', 'td', function(event){
        // Color Variable
        var color = $('#colorPicker').val();
        $(this).css('background-color', color);
    });

    // TODO: When sizes submitted creates grids.
    $('#sizePicker').submit(function(event){
        event.preventDefault();
        makeGrid();
    });

    //TODO: Reset page.
    $('#resetBtn').click(function(){
        location.reload();
    });

    makeGrid();

});

