export const fetchAllVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos'
  });
};

export const fetchAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

fetchAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  }).then((categories) => {
    debugger
    console.log(categories);
  });
};
