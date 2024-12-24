ScrollReveal({
  reset:true,
  distance:'80px',
  duration: 2000,
  delay: 200,
});


ScrollReveal().reveal('.main-info', {origin: 'top'});
ScrollReveal().reveal('.main-img, .about-info, .minor-heading', {origin: 'right'});
ScrollReveal().reveal('.main-heading, .about-img, .caseTitle', {origin: 'left'});
ScrollReveal().reveal('.casePhoto', {origin: 'bottom'});