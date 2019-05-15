import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import img from './img/sample.jpeg';

const states = {

    // TODO: Resolve issue with repetitive 'links' in each of these 🔑s.
    'home': {
        'title': 'Welcome to Savvy Portfolio',
        'image': img,
        'links': [ 'Home', 'About', 'Contact' ]
    },
    'about': {
        'title': 'About',
        'image': img,
        'links': [ 'Home', 'About', 'Contact' ]
    },
    'contact': {
        'title': 'Contact',
        'image': img,
        'links': [ 'Home', 'About', 'Contact' ]
    }
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

render(states.home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        render(states[`${e.target.textContent.toLowerCase()}`]);
    });
});
