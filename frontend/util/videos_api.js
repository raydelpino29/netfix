export const fetchAllVideos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/videos'
  });
};

export const fetchVideo = (id) => {
  debugger
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

export const searchVideos = (query, id) => {
  let url;
  url = id ? `/api/categories/${id}/search` : "/api/videos/search";
  return $.ajax({
    method: 'GET',
    url,
    data: { query }
  });
};
