var i = 0,
    has_cursor = false,
    in_progress = false,
    marvin_i = 0,
    current;

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
    console.log(text);
    if (text === current) {
        document.getElementById('marvinsay').innerHTML = current;
        in_progress == false;
        marvin_i += 1;
        return;
    }
    document.getElementById('marvinsay').innerHTML = text;
    setTimeout(type, 80);
};


function marvin() {
    if (in_progress == false){
        in_progress = true;
        if (current==='cursor') {
            console.log('cursor');
            //swapCursor(show_cursor=true);
            has_cursor = true;
            current = '';
        } else {
            console.log('new say!');
            console.log(marvin_i);
            if (has_cursor == true){
                swapCursor(show_cursor=false);
                has_cursor = false;
            }
            current = says[marvin_i];
            type();
        }
    }
};
