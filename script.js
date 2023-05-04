const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');

// Animate the title
title.animate(
  [
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0%)' },
  ],
  {
    duration: 1000,
    easing: 'ease-out',
    fill: 'forwards',
  }
);

// Animate the subtitle after a delay
setTimeout(() => {
  subtitle.style.opacity = '1';
}, 1000);