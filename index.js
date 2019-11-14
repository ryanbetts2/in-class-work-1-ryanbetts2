import {Header, Nav, Footer, Main} from "./components";
// console.log(Header());
// console.log(Nav());
// console.log(Footer());
// console.log(Main());

const state = {
  Home : {
    heading: "Ryan's Practice Project From State",
    links: ["Home", "About", "Contact", "Blog"]
  },
  About : {
    heading: "About Page"
  },
  Contact : {
    heading: "Contact Page"
  },
  Blog : {
    heading: "Blog Page"
  }
}

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
