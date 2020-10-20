Rails.application.routes.draw do
  # ルートパスをposts#indexに変更
  root to: "posts#index"
  post "posts", to: "posts#create"
  get "posts/:id", to: "posts#checked"
end
