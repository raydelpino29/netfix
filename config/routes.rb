Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :categories, only: [:index, :show]
    get '/likes', :to => 'likes#index'
    post '/like', :to => 'likes#like'
    post '/dislike', :to => 'likes#dislike'
    delete '/like/:id', :to => 'likes#remove_like'
    resources :my_lists, only: [:create, :destroy, :index]
  end

end
