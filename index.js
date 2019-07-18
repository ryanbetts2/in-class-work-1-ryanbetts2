import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'This is the home page!'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};

function render(state){
    console.log('state came in as:', state);

    // We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
  ${Navigation(state)}
  ${Header(state)}
  ${Main(state)}
  ${Footer(state)}
`;
}

render(states.home);

// The elements will not exist until page is rendered!
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

// i will serve as a placeholder to represent the index of the item we need to access from navItems.
let i = 0;

// TODO: Refactor this loop structure.
// i will run from 0 until 3.
while(i < navItems.length){
    // Use the value of i as an index to access the navItem.
    navItems[i].addEventListener(
        'click',

        // Add this callback fxn. to each of the navItems.
        function clickHandler(event){
            event.preventDefault();

            const clickedItem = event.target.textContent;
            const clicked = clickedItem.toLowerCase();

            render(states[clicked]);
            // Developer's Note: render(states[event.target.textContent.toLowerCase()]);
        }
    );
    i += 1;
}
