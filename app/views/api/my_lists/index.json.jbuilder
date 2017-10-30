current_user.my_list_videos.each do |my_list_video|
  json.set! video.id do
    json.partial! 'api/my_lists/my_list', my_list_video: my_list_video
  end
end
