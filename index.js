import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

console.log('states was imported form the store folder as: ', states);

// Object Destructuring
import { capitalize } from 'lodash';

console.log('capitalize from lodash looks like: ', capitalize);

import Navigo from 'navigo';

// origin is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

// Use innerHTML property as a SETTER
const root = document.querySelector('#root');

console.log('root looks like this: ', root);

// render receives an argument as a named parameter: 'state'
function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the components
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    router.updatePageLinks();
}

// function handleRoutes(params) {
//     render(states[capitalize(params.path)])
// }

// Check the URL bar
// Grab anything that is beyond window.location.origin (e.g. /about)
// Assign that to an Object called params with 🔑 of path.
// Use the 'capitalize' method from lodash that we imported to transform, for example 'about' to 'About'
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();
