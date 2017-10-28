//confirmed is working
export const fetchAllLikes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/likes'
  });
};
//confirmed is working
export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/like`,
    data: { like }
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/like/${id}`,
  });
};
