export const fetchAllListItems = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/my_lists'
  });
};

export const createListItem = (item) => {
  return $.ajax({
    method: 'POST',
    url: '/api/my_lists'
  });
};

export const deleteListItem = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/my_lists/${id}`
  });
};
