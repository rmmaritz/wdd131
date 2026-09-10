const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  const expanded = mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  hambutton.setAttribute('aria-expanded', expanded);
});
