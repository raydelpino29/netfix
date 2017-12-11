export const fetchAllVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos'
  });
};

export const fetchVideo = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/${id}`
  });
};

export const fetchAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const fetchCategory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${id}`
  });
};

export const searchVideos = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/videos/search`,
    data: { query }
  });
};
