import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const state = {
    'title': 'This is the page Title!'
};


// We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
document.querySelector('#root').innerHTML = `
  ${Navigation()}
  ${Header(state)}
  ${Main()}
  ${Footer()}
`;
