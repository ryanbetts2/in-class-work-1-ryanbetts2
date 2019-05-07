import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML =
// In each of these, we are invoking our fxns. and the 'return' is the resulting HTML
`
  ${Navigation()}
  ${Content()}
  ${Footer()}
  `;
