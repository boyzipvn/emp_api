Rails.application.routes.draw do
  resources :carts
  resources :items
  mount API => '/'
end
