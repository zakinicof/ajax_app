class PostsController < ApplicationController
  def index  #indexアクションを定義
    @posts = Post.all.order(id: "DESC") #全てのレコードを取得、新しいのが上に来るように@postsに代入
  end

  def create
    Post.create(content: params[:content])
    # contentカラムはparams[:content]（新規投稿ページで記述された内容）として保存する
    redirect_to action: :index
    # メモを保存した後にトップページへリダイレクトされる
  end
end
