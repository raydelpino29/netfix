json.partial! 'api/videos/video', video: @video
json.video_url asset_path(@video.video.url)
