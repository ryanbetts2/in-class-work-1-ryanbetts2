import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import img from './img/sample.jpeg';

// State is an Object Literal that will hold information that functional components to properly render
const state = {
    'title': "Manav's Savvy Code Portfolio",
    'image': img
};

// Use innerHTML property as a SETTER
const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;
}

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        render(states[`${e.target.textContent.toLowerCase()}`]);
    });
});
