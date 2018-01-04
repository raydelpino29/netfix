json.partial! 'api/reviews/review', review: @review
json.email User.find(@review.user_id).email
