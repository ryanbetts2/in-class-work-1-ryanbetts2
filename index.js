import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import img from './img/sample.jpeg';

const states = {
    'home': {
        'title': "Manav's Savvy Code Portfolio",

        // TODO: Prevent repeating use of 'links.'
        'links': [ 'About Me', 'Contact', 'Class Showcase', 'Web Store Hack-a-thon', 'Demo Day Project' ],
        'image': img
    },
    'contact': {
        'title': 'Contact Me!',
        'links': [ 'About Me', 'Contact', 'Class Showcase', 'Web Store Hack-a-thon', 'Demo Day Project' ],
        'image': img
    },
    'about': {
        'title': 'About Me',
        'links': [ 'About Me', 'Contact', 'Class Showcase', 'Web Store Hack-a-thon', 'Demo Day Project' ],
        'image': img
    },

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
