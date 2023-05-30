'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let options = {
        rootMargin: '0px',
        threshold: 0.5,
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

