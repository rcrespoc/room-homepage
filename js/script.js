const d = document,
menuBtn = d.querySelector('.menu-boton'),
menuClose = d.querySelector('.menu-nav > img'),
menuNav = d.querySelector('.menu-nav'),
btnSlider = d.querySelectorAll('.buttons-slider'),
sliders = d.querySelector('.sliders'),
PORCENTAJE = Number(Number.parseFloat(100/3).toFixed(2));
let slider = 0;

menuBtn.addEventListener('click', () => menuNav.classList.add('active'))
menuClose.addEventListener('click', () => menuNav.classList.remove('active'))
btnSlider.forEach(boton => {
  boton.addEventListener('click', e => {
    (e.path.includes(boton.firstElementChild)) ? slider -= PORCENTAJE : slider += PORCENTAJE;
    (slider > 66.66) ? slider = 0 : (slider < 0) ? slider = 66.66 : slider;
    sliders.style.transform = `translateX(-${slider}%)`;
  })
})