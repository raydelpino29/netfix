import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllLikes, createLike, deleteLike } from './actions/like_actions';

window.fetchAllLikes = fetchAllLikes;
window.createLike = createLike;
window.deleteLike = deleteLike;



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
