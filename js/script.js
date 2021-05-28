function addFocus(el) {
    if (typeof el === 'string' || el instanceof String ) {
        document.getElementById(el).classList.add('input-border-focus');
    } else {
        el.parentNode.classList.add('input-border-focus');
    }
}

function removeFocus(el) {
    if (typeof el === 'string' || el instanceof String ) {
        document.getElementById(el).classList.remove('input-border-focus');
    } else {
        el.parentNode.classList.remove('input-border-focus');
    }
}

function resizeCircle() {
    let el = document.getElementById("circle-background"),
        left = document.getElementById("circle-left"),
        right = document.getElementById("circle-right");
    let rect = el.getBoundingClientRect();

    right.style.transform = left.style.transform =  'translateY(-' + (rect.width / 2) + 'px)';
}

window.onresize = resizeCircle;
window.onload = resizeCircle;