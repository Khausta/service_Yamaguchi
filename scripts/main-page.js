

let selector = document.querySelector('.service-center__select');
let currentCity = selector.textContent;
let cityList = document.querySelector('.service-center__city-list');

document.addEventListener('DOMContentLoaded', () => {

    //city choice 
  function  handleOverLay(event) {
    if (event.target.classList.contains('service-center__list-item') || event.target === selector) return;
    close();
  } 

  function open () {
    selector.classList.add('_active');
    cityList.classList.add('_city-list_active');
    document.addEventListener('click', handleOverLay);
  }

  function close() {
    selector.classList.remove('_active');
    cityList.classList.remove('_city-list_active');
    document.removeEventListener('click', handleOverLay);
  }

  if(localStorage['city']) {
    selector.textContent = localStorage.getItem('city');
  }

  selector.addEventListener('click', () => {
    selector.classList.contains('_active') ? close() : open();
  })

  document.querySelectorAll('.service-center__list-item').forEach( e => {
    const city = e;
    e.addEventListener('click', () => {
      selector.textContent = city.dataset.city;
      currentCity = city.dataset.city;
      localStorage.setItem('city', city.dataset.city);
      selector.classList.remove('_active');
      cityList.classList.remove('_city-list_active');
    })
  })

  //faq 
  document.querySelectorAll('.faq__question').forEach( item => {
    item.addEventListener('click', () => {
      
      const arrow = item;
      const content = item.nextElementSibling;

      if (content.style.maxHeight) {
        document.querySelectorAll('.faq__text').forEach( item => {
          item.style.maxHeight = null;
          item.style.opacity = null;
          }) 
        document.querySelectorAll('.faq__question').forEach(item => {
          item.classList.remove('_active');
        })
      } else {
        document.querySelectorAll('.faq__text').forEach( item => {
          item.style.maxHeight = null;
          item.style.opacity = null;  
        })
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = 1;
        
        document.querySelectorAll('.faq__question').forEach(item => {
          item.classList.remove('_active');
        })
        arrow.classList.add('_active');
      }
    })
  })

  //menu
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.85,
  };

  let ancors =  document.querySelectorAll('.header__a-js');
  // console.log(a);

 let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        document.querySelector('.header__wrapper').classList.add('header__black-bgc');
        // document.querySelector('.header__menu-item-block').classList.remove('header__menu-item-black-a');
        // document.querySelector('.header__menu-item-block').classList.add('header__menu-item-red-a');
        ancors.forEach(item => {
          item.classList.add('header__menu-item-red-a');
        })
      } else {
        document.querySelector('.header__wrapper').classList.remove('header__black-bgc');
        ancors.forEach(item => {
          item.classList.remove('header__menu-item-red-a');
        })
      }
    });
  };
  
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector(".service-center");
observer.observe(target);

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY >= 50) {
  //     document.querySelector('.header__wrapper').classList.add('header__black-bgc');
  //   } else {
  //   }
  // })
})

