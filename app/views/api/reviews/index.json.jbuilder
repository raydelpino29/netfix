@reviews.each do |review|
  json.set! review.id do
    json.partial! 'api/reviews/review', review: review
    json.email User.find(review.user_id).email
  end
end
