Rails.application.routes.draw do
  # ルートパスをposts#indexに変更
  root to: "posts#index"
  post "posts", to: "posts#create"
end
