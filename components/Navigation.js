function buildIconHTML(link){
    // If link.icon actually exists on this link, it is 'truth-y' so the `if` will take effect.
    // If link.icon is not there for this link - it's UNDEFINED, of 'false-y' so the 'if' will NOT take effect.
    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    console.log('buildNavHTML received statelinks as:', stateLinks);
    let linksHTML = '';

    stateLinks.forEach((link) => {
        console.log('stateLinks forEach is receiving a link:', link);
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}${link.text}</a></li>`;
    });

    return linksHTML;
}

export default (state) => {
    console.log('navigation component receives state:', state);

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
