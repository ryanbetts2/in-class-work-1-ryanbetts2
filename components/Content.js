import * as pages from './pages';

export default (state) => {
    console.log('content received stat as: ', state);

    return `
  <div id="bg-container">
    ${pages[state.pageContent](state)}
  </div>`;
};
