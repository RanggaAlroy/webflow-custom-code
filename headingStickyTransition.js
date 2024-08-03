let typeSplit = new SplitType("[text-split]", {
    types: "words, lines",
    tagName: "span"
  });


gsap.set('.hero-heading-2', { autoAlpha: 0 });

const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.trigger-hero-2',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    onLeaveBack: () => {
      swiper2.autoplay.start();
    }
  }
});


    heroTl.to($("[title-slide-down]").find(".word"), { opacity: 0, yPercent: 100, duration: 0.2, ease: "power1.out", stagger: {amount: 0}});
     heroTl.to($("[words-slide-down]").find(".word"), { opacity: 0, yPercent: 100, duration: 0.2, ease: "power1.out", stagger: {amount: 0}}, '<');
        heroTl.to("#hero-btn-1", { opacity: 0, yPercent: 100, duration: 0.2, ease: "power1.out"}, '<');        
heroTl.to('.hero-heading-1', { autoAlpha: 0});
heroTl.to('.hero-heading-2', { autoAlpha: 1}, '<');
   heroTl.from($("[title-slide-up]").find(".word"), { opacity: 0, yPercent: 100, duration: 0.3, ease: "power1.out", stagger: {amount: 0}});
     heroTl.from($("[words-slide-up]").find(".word"), { opacity: 0, yPercent: 100, duration: 0.3, ease: "power1.out", stagger: {amount: 0}}, '<');
      heroTl.from("#hero-btn-2", { opacity: 0, yPercent: 100, duration: 0.3, ease: "power1.out"}, '<');
heroTl.to('.question-cover', { display: 'block', onComplete: () => {
  swiper2.autoplay.stop();
}}, '<');

 gsap.set("[text-split]", { opacity: 1 });