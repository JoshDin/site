const j = window.document.getElementsByClassName("card");
const l = window.document.getElementsByClassName("used");
const scrolled = window.document.getElementById("scrolled");
const a = window.document.getElementById('description');
const msg = ['This is one text.', 'This is another.', 'And some more!!!'];
const SCROLL_START = 50;

function atTop() {
    scrolled.style.width = 96 + "%";
    scrolled.style.left = "calc(" + 2 + "%)";
    scrolled.style.top = 10 + "px";
    scrolled.style.height = 90 + "px";
    scrolled.style.borderRadius = 25 + "px";
}

function scrolling() {
    scrolled.style.width = 100 + "%";
    scrolled.style.left = 0;
    scrolled.style.top = 0;
    scrolled.style.height = 100 + "px";
    scrolled.style.borderRadius = 0;
}

// Starting nav width
if ((window.innerWidth > 992) && (window.scrollY == 0)) {
    atTop();
}

window.onresize = function() {
    if ((window.innerWidth > 992) && (window.scrollY == 0)) {
        atTop()
    } else {
        scrolling();
    }
}

window.document.body.onscroll = function() {
    if (window.innerWidth >= 992) {
        if (window.scrollY > 0) {
            scrolling();
        } else {
            atTop();
        }
    }
}


j.current = -1;
for (let i = 0; i < j.length; i++) {
    j.item(i).style.left = 0 + 'px';
    j.item(i).style.top = 175 + i * 30 + 'px';
    j.item(i).textContent = j.item(i).textContent.toUpperCase();
    l.item(i).style.left = 0 + 'px';
    l.item(i).style.top = 175 + i * 30 + 'px';
    l.item(i).textContent = l.item(i).textContent.toUpperCase();
    j.item(i).onmouseover = function() {
        this.style.top = 175 + i * 30 - 10 + 'px';
        this.style.left = -5 + 'px';
        this.style.width = 260 + 'px';
    }
    j.item(i).onmouseout = function() {
        this.style.top = 175 + i * 30 + 'px';
        this.style.left = 0 + 'px';
        this.style.width = 250 + 'px';
    }
    j.item(i).onmouseup = function() {
        j.current = i;
        a.innerHTML = msg[i];
        this.style.visibility = 'hidden';
        l.item(i).style.visibility = 'visible';
        for (let k = 0; k < j.length; k++) {
            if (j.current != k) {
                j.item(k).style.visibility = 'visible';
                l.item(k).style.visibility = 'hidden';
            }
        }
    }
}
