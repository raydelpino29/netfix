Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    post '/videos/:video_id/like', :to => 'likes#like'
    post '/videos/:video_id/dislike', :to => 'likes#dislike'
    delete '/videos/:video_id/like', :to => 'likes#remove_dislike'
    delete '/videos/:video_id/dislike', :to => 'likes#remove_like'
    resources :categories, only: [:index]
  end

end
