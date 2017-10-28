if @like.like_status == 1
  type = "like"
else
  type = "dislike"
end

json.partial! 'api/likes/like', like: @like
json.like_type type
