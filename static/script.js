/* Globals */
var i = 0,
    has_cursor = false,
    in_progress = false,
    marvin_i = 0,
    current,
    says;

/* Functions */
function changeString(){
    var marvin = document.getElementById('marvinsay');
    marvin.style.display = 'none';
    marvin.innerHTML = '';
    marvin.style.display = 'block';
};

function swapCursor(show_cursor){
    var marvin = document.getElementById('marvinsay'),
        cursor = document.getElementById('cursor');

    if (show_cursor == true) {
        marvin.style.display = 'none';
        cursor.style.display = 'inline-block';
    } else {
        marvin.style.display = 'block';
        cursor.style.display = 'none';
    }
};

function type() {
        text = current.slice(0, ++i);
        if (current === 'cursor' || text === current) {
            // resets things, set index to next iteration
            // marks current as '' and type the last word
            in_progress = false;
            if (marvin_i >= says.length){
                marvin_i = 0;
            } else {
                marvin_i += 1;
            }
            i = 0;
            if (current !== 'cursor') {
                document.getElementById('marvinsay').innerHTML = text;
            } else {
                document.getElementById('marvinsay').innerHTML = '';
            }
            return;
        }
        document.getElementById('marvinsay').innerHTML = text;
        setTimeout(type, 80);

};

function marvin() {
    if (in_progress == false){
        in_progress = true;
        if (current === 'cursor') {
            swapCursor(true);
            setTimeout(function(){
                swapCursor(false);
                current = '';
                marvin_i += 1;
                in_progress = false;
            }, 5000);
        } else {
            swapCursor(false);
            current = says[marvin_i]
            type();
            return;
        }
    }
};
