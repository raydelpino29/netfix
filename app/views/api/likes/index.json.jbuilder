ids = []

current_user.likes.videos.each do |video|
  ids.push(video.id)
end

json.videoIds ids
