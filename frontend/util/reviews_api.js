export const fetchAllReviews = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews'
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review: { body: review.body, video_id: review.videoId, user_id: review.userId } }
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  });
};

export const editReview = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}/edit`
  });
};
