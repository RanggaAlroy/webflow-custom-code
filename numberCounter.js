const numberOffer = document.querySelector('.number-offer');
const plus = document.querySelector('.plus');
const min = document.querySelector('.minus');
const benefit = document.querySelector('.benefit-price');

let result = 0;
numberOffer.textContent = result.toLocaleString(); 

function count(to) {
  const display = $('.benefit-price');
  let from = parseInt(display.html().replace(/,/g, ''), 10);
  let difference = Math.abs(to - from);
  let duration = 2000; 
  let step = 55; 

  if (difference === 0) return;

  let numSteps = Math.ceil(difference / step);
  let speed = duration / numSteps;

  var int = setInterval(function() {
    if (from < to) {
      from += step;
      if (from > to) from = to;
    } else if (from > to) {
      from -= step;
      if (from < to) from = to; 
    } else {
      clearInterval(int);
      return;
    }
    display.text(from.toLocaleString()); 
  }, speed);
}


plus.addEventListener('click', () => {
    result += 1;
    numberOffer.textContent = result.toLocaleString(); 
    count(result * 12000);
});

min.addEventListener('click', () => {
    if (result > 1) {
        result -= 1;
        numberOffer.textContent = result.toLocaleString(); 
        count(result * 12000);
    }
});

gsap.registerPlugin(ScrollTrigger);

const numberCounter = gsap.timeline({
  scrollTrigger: {
    trigger: '.benefit',
    start: 'top bottom',
  }
});

numberCounter.to(benefit, { opacity: 1, onComplete: () => {
		plus.click()
}})