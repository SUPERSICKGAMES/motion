document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({loop: false})
    .add({
      targets: '.special',
      translateY: [100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500
    })
    .add({
      targets: '.cta',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(200) // Staggering the buttons
    });
  });
  