export default (state) => `<nav>
      <ul class="flex">
        <li><a href="about.html">${state.links[0]}</a></li>
        <li><a href="contact.html">${state.links[1]}</a></li>
        <li>
          Portfolio
          <ul id="dropdown">
            <li><a href="class.html">${state.links[2]}</a></li>
            <li><a href="web-store.html">${state.links[3]}</a></li>
            <li><a href="demo.html">${state.links[4]}</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;
