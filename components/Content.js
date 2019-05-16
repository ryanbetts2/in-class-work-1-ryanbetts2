import * as pages from '../pages';

export default (state) => {
    console.log('state pagecontent is: ', state.pageContent);
    console.log('pages.stateContent is ', pages[state.pageContent]);

    return `
  <div id="bg-container">
    ${pages[state.pageContent](state)}
  </div>`;
};
