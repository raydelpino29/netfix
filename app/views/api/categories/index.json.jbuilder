@categories.each do |category|
  json.set! category.id do
    json.extract! category, :id, :name, :description
    ids = []
    category.videos.each do |video|
      ids.push(video.id)
    end
    json.videoIds ids
  end
end
