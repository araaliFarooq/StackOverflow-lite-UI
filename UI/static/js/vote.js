var a = document.querySelectorAll('input[type=image]');

for (var i = 0; i<a.length; i++) {
 a[i].addEventListener('click', addorsub);   
}

function addorsub () {
    var b = document.getElementById('votes');

    if (this.id == 'down') {
    b.value = parseInt(b.value) - 1;
    }

    else if (this.id == 'up') {
    b.value = parseInt(b.value) + 1;                                      
    }
}