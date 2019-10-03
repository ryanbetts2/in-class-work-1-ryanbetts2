const burger = document.querySelector('.fa-hamburger');
const ul =document.querySelector('nav ul');

burger.addEventListener('click', {} => {
  ul.classList.toggle('is-hidden--mobile')
});
