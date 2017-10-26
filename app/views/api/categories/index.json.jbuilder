@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :category_id, :description
    json.thumbnail_url asset_path(video.thumbnail.url)
    json.video_url asset_path(video.video.url)
  end
end
