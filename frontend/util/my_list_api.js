export const fetchAllListItems = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/my_lists'
  });
};

export const createListItem = (my_list) => {
  return $.ajax({
    method: 'POST',
    url: '/api/my_lists',
    data: { my_list }
  });
};

export const deleteListItem = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/my_lists/${id}`
  });
};
