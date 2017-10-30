current_user.my_list_videos.each do |my_list_item|
  json.set! my_list_item.id do
    json.partial! 'api/my_lists/my_list', my_list_item: my_list_item
  end
end
