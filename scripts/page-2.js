
document.addEventListener('DOMContentLoaded', () => {
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


