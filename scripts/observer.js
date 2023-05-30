let options = {
    // root: document.querySelector(''),
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,  
  };
  
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.style.transition = 2 + 's';
        entry.target.style.opacity = 1;
      }
    })
  }
  
  let observer = new IntersectionObserver(callback, options);
  
  //creat target
//   let target1 = document.querySelector('.container-1');
//   let target2 = document.querySelector('.container-2');
//   let target3 = document.querySelector('.container-3');
//   let target4 = document.querySelector('.container-4');
//   let target5 = document.querySelector('.container-5');

  //
  let targets = document.querySelectorAll('.cont');

  targets.forEach(item => {
    observer.observe(item);
  })
//   observer.observe(target1);
//   observer.observe(target2);
//   observer.observe(target3);
//   observer.observe(target4);
//   observer.observe(target5);
  
  