'use strict';


// function opacity() {
//     items.forEach(item => {
//         if(this.window.scrollY >= item.getBoundingClientRect().top) {
//             item.style.transition = 1.5 + 's';
//             item.style.opacity = 1;
//         }
//     });
// }

// let items = document.querySelectorAll('.changes__item_js');
// window.addEventListener('scroll',  opacity);

document.addEventListener('DOMContentLoaded', () => {
    let options = {
        rootMargin: '0px',
        threshold: 1.0,
    };
    
    let appearance = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.paddingTop = 0;
            }
        })
    }
 
    const observer = new IntersectionObserver(appearance, options);
    const targets = document.querySelectorAll('.changes__item_js');
    
    targets.forEach(item => {
        observer.observe(item);
    })
    
})

