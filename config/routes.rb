Rails.application.routes.draw do
  namespace :api do
    resources :trips
      resources :locations
    end
    resources :locations do
      resources :addresses
    end
  end

end
