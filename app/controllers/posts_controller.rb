class PostsController < ApplicationController
  def index  #indexアクションを定義
    @posts = Post.all.order(id: "DESC") #全てのレコードを取得、新しいのが上に来るように@postsに代入
  end

  def create
    
  end

  def checked
    # URLパラメーターから該当するレコードを取得
    post = Post.find(params[:id])
    # 既読であるかどうかを判定するif文
    if post.checked 
      # 既読であればfalseで既読を解除
      post.update(checked: false)
    else
      # 既読でなければ既読にするためtrueへ変更
      post.update(checked: true)
    end
    # 更新したレコードをJSON形式でchecked.jsに返却
    item = Post.find(params[:id])
    render json: { post: item }
  end
end
