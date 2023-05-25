
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
    console.log(selector.classList.contains('_active'));
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
})

