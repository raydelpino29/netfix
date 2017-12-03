likeIds = []
dislikeIds = []

Like.all.each do |like|
  if like.like_status === 1
    type = "like"
  else
    type = "dislike"
  end
  json.set! like.id do
    json.partial! 'api/likes/like', like: like
    json.like_type type
  end
end
