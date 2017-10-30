import * as MyListApi from '../util/my_list_api';

export const RECEIVE_ALL_LIST_ITEMS = 'RECEIVE_ALL_LIST_ITEMS';
export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

export const receiveAllListItems = (items) => {
  return {
    type: RECEIVE_ALL_LIST_ITEMS,
    items,
  };
};

export const receiveListItem = (item) => {
  return {
    type: RECEIVE_LIST_ITEM,
    items,
  };
};

export const removeListItem = (item) => {
  return {
    type: REMOVE_LIST_ITEM,
    items,
  };
};

export const fetchAllListItems = () => {
  return (dispatch) => {
    return MyListApi.fetchAllListItems().then((items) => {
      return dispatch(receiveAllListItems(items));
    });
  };
};

export const createListItem = (item) => {
  return (dispatch) => {
    return MyListApi.createListItem(item).then((item) => {
      return dispatch(receiveListItem(item));
    });
  };
};

export const deleteListItem = (id) => {
  return (dispatch) => {
    return MyListApi.deleteListItem(id).then((item) => {
      return dispatch(removeListItem(item));
    });
  };
};
