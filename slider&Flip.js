// Function to handle hover flip for larger screens
function enableHoverFlip() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const flipCardInner = card.querySelector('.flipcard-wrapper');
  
      card.addEventListener('mouseenter', onCardHover);
      card.addEventListener('mouseleave', onCardHoverLeave);
  
      card.hoverHandlers = { onCardHover, onCardHoverLeave };
  
      function onCardHover() {
        gsap.to(flipCardInner, { rotateX: 180, ease: 'power3.out', duration: 1 });
      }
  
      function onCardHoverLeave() {
        gsap.to(flipCardInner, { rotateX: 0, ease: 'power3.out', duration: 1 });
      }
    });
  }
  
  // Function to handle click flip for smaller screens
  function enableClickFlip() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', onCardClick);
  
      // Store event handler for cleanup later
      card.clickHandler = onCardClick;
  
      function onCardClick() {
        const flipCardInner = card.querySelector('.flipcard-wrapper');
        const isFlipped = card.classList.contains('flipped');
  
        if (!isFlipped) {
          gsap.to(flipCardInner, { rotateY: -180, ease: 'power3.out', duration: 1 });
          card.classList.add('flipped');
        } else {
          gsap.to(flipCardInner, { rotateY: 0, ease: 'power3.out', duration: 1 });
          card.classList.remove('flipped');
        }
      }
    });
  }
  

  function cleanupEvents() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.hoverHandlers) {
        card.removeEventListener('mouseenter', card.hoverHandlers.onCardHover);
        card.removeEventListener('mouseleave', card.hoverHandlers.onCardHoverLeave);
        delete card.hoverHandlers;
      }
      if (card.clickHandler) {
        card.removeEventListener('click', card.clickHandler);
        delete card.clickHandler;
      }
    });
  }
  
  function initializeFlip() {
    cleanupEvents(); 
  
    if (window.innerWidth > 767) {
      enableHoverFlip();
    } else {
      enableClickFlip();
      const swiper2 = new Swiper('.swiper2', {
        speed: 1000,
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.card-right',
          prevEl: '.card-left',
        },
      });
    
      swiper2.on('progress', function (e) {
        const progressBar = document.querySelector('.progress-bar-fill1');
        if (progressBar) {
          progressBar.style.width = e.progress * 100 + '%';
        }
      });
    }
  }
  

  initializeFlip();
  
  window.addEventListener('resize', initializeFlip);
  