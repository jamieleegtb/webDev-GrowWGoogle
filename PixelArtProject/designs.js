$(document).ready(function(){

    // TODO: Creates rows and columns.
    function makeGrid() {

        // Canvas Variables
        var gridCanvas = $('#pixelCanvas');

        // Clears grid
        gridCanvas.children().remove();

        for(var i = 1; i <= $('#inputHeight').val(); i++){ //row
            gridCanvas.append('<tr></tr>');
            for(var j=1; j <= $('#inputWidth').val(); j++){ // column
                $('tr:nth-child(' + i + ')').append('<td></td>'); 
            }
        }
    }

    // TODO: On click adds selected background color to columns.
    $('body').on('click', 'td', function(event){
        $(this).css('background-color', $('#colorPicker').val());
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

