likeIds = []
dislikeIds = []

current_user.likes.each do |like|
  if like.like_status === 1
    likeIds.push(like.video_id)
  else
    dislikeIds.push(like.video_id)
  end
end

json.videosLikedIds likeIds
json.videosDislikedIds dislikeIds
