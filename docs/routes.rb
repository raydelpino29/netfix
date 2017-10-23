# Backend Routes:

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create, :show]
    resources :videos, only: [:index, :show]
    post '/videos/:video_id/like', :to => 'likes#like'
    post '/videos/:video_id/dislike', :to => 'likes#dislike'
    delete '/videos/:video_id/like', :to => 'likes#remove_dislike'
    delete '/videos/:video_id/dislike', :to => 'likes#remove_like'
    resources :categories, only: [:index]
    resources :reviews
    resource :sessions, only: [:create, :destroy]
  end
end

#FrontEnd Routes:

<Route to='/signup' component={SignUpForm}>
<Route to='/login' component={SignUpForm}>
<Route to='/browse' component={BrowseVideos}>
<Route to='/search' component={SearchVideos}>
<Route to='/mylist' component={CategoryVideos}>
<Route to='/video_player/:video_id' component={VideoPlayer}>
<Route to='/video_info/:video_id' component={VideoShow}>
