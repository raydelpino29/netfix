if @like.like_status == 1
  type = "like"
else
  type = "dislike"
end

json.like_type type
json.videoId @like.video.id
