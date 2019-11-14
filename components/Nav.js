function generateListMarkup(links) {
  return links.map(link => {
  return `<li><a href="./">${link}</a></li>`
  }).join(" ");
}

export default function(st) {

  return `
  <!-- <nav> should be only be used for the main navigation for the page. -->
  <nav>
    <span class="fas fa-hamburger is-hidden--desktop"></span>
    <ul
      class="flex--desktop justify-space-around--desktop is-hidden--mobile is-shown--desktop"
    >
      <li><a href="./">Home</a></li>
      <li><a href="./about/">About</a></li>
      <li><a href="./contact/">Contact</a></li>
      <li><a href="./blog/">Blog</a></li>

    ${generateListMarkup(st.links)}
      </ul>
  </nav>
  `
}
