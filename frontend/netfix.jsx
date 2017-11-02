import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllReviews, createReview, deleteReview, updateReview } from './actions/review_actions';

window.fetchAllReviews = fetchAllReviews;
window.createReview = createReview;
window.deleteReview = deleteReview;
window.updateReview = updateReview;

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
