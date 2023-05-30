'use strict';


function opacity() {
    items.forEach(item => {
        if(this.window.scrollY >= item.getBoundingClientRect().top) {
            item.style.transition = 1.5 + 's';
            item.style.opacity = 1;
        }
    });
}

let items = document.querySelectorAll('.changes__item_js');

window.addEventListener('scroll',  opacity);

