export const fetchAllReviews = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews'
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews'
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};
