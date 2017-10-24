import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
