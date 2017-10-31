@videos.each do |video|
  json.set! video.id do
    json.partial! 'api/videos/video', video: video
    json.thumbnail_url asset_path(video.thumbnail.url)
    json.video_url asset_path(video.video.url)
  end
end
