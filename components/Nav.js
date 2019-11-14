import { Links } from "../store";

function generateListMarkup(links) {
  return links.map(link =>`<li><a href="./">${link}</a></li>`).join(" ");
}

export default () => `
  <!-- <nav> should be only be used for the main navigation for the page. -->
  <nav>
    <span class="fas fa-hamburger is-hidden--desktop"></span>
    <ul
      class="flex--desktop justify-space-around--desktop is-hidden--mobile is-shown--desktop"
    >

    ${generateListMarkup(Links)}
      </ul>
  </nav>
  `
