import {Header, Nav, Footer, Main} from "./components";
// console.log(Header());
// console.log(Nav());
// console.log(Footer());
// console.log(Main());

import * as state from "./store";

function render(st) {
document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st)}
${Main()}
${Footer()}
`;

// console.log(document.querySelectorAll('click', function(event)));
// event.preventDefault();

const links = document.querySelectorAll('nav a, footer a');
links.forEach(link => {
  console.log(link);
  link.addEventListener('click', event => {
    event.preventDefault();

    render(state[event.target.textContent]);
  });
});
}

render(state.Home);
