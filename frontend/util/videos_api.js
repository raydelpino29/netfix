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
