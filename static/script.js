/* Globals */
var i = 0,
    in_progress = false,
    marvin_i = 0,
    current,
    says;

/* Functions */
function swapCursor(show_cursor){
    var marvin = document.getElementById('marvinsay'),
        cursor = document.getElementById('cursor');

    var marvin_display = (show_cursor === true) ? 'none' : 'block',
        cursor_display = (show_cursor === false) ? 'none' : 'block';
    
    marvin.style.display = marvin_display;
    cursor.style.display = cursor_display;
}

function type() {
    text = (i < current.length) ?
            current.slice(0, ++i) : current;
    
    if (current === 'cursor' || text === current) {
        // resets things, set index to next iteration
        // marks current as '' and type the last word
        in_progress = false;
        marvin_i = (marvin_i === says.length-1) ? 0 : marvin_i + 1;
        i = 0;

        var to_print = (current !== 'cursor') ? text : '';
        document.getElementById('marvinsay').innerHTML = to_print;
        return;
    }

    document.getElementById('marvinsay').innerHTML = text;
    setTimeout(type, 80);
}

function marvin() {
    if (in_progress === false){
        if (current === 'cursor') {
            swapCursor(true);
            setTimeout(function(){
                swapCursor(false);
                current = '';
                marvin_i = (marvin_i === says.length-1) ? 0 : marvin_i + 1;
                in_progress = false;
            }, 5000);
        } else {
            in_progress = true;
            swapCursor(false);
            current = says[marvin_i];
            type();
            return;
        }
    }
}
