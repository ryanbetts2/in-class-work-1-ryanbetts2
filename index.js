import {Header, Nav, Footer, Main} from "./components";
// console.log(Header());
// console.log(Nav());
// console.log(Footer());
// console.log(Main());

const state = {
  Home : {
    heading: "Ryan's Practice Project From State"
  }
  About : {
    heading: "About Page"
  }
  Contact : {
    heading: "Contact Page"
  }
  Blog : {
    heading: "Blog Page"
  }
}

document.querySelector("#root").innerHTML = `
${Header(state.Home)}
${Nav()}
${Main()}
${Footer()}
`
