import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML = `
  ${Navigation}
  ${Content}
  ${Footer}
  `;
