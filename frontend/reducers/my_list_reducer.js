import { RECEIVE_ALL_LIST_ITEMS, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/my_list_actions';

const MyListReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_LIST_ITEMS:
    return action.items;

    case RECEIVE_LIST_ITEM:
    newState = Object.assign({}, state, { [action.item.id]: action.item });
    return newState;

    case REMOVE_LIST_ITEM:
    newState = Object.assign({}, state);
    delete newState[action.item.id];
    return newState;

  default:
    return state;
  }
};
