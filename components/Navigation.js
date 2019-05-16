function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="">${link}</li>`;
    });

    return linksHTML;
}

export default (state) => {
    console.log('navigation got stae ike this: ', state);

    return `<nav>
      <ul class="flex">
        ${buildNavHTML(state.links.primary)}
        <li>
          Portfolio
          <ul id="dropdown">
            ${buildNavHTML(state.links.dropdown)}
          </ul>
        </li>
      </ul>
    </nav>`;
};
