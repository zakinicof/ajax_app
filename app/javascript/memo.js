function memo() {
  // 「投稿する」ボタンの情報を取得
  const submit = document.getElementById("submit");
  // 投稿するボタンを「click」した場合に実行される関数を定義
  submit.addEventListener("click", (e) => {
    // フォームに入力された値を取得
    const formData = new FormData(document.getElementById("form"));
    // 非同期通信を実装するためにオブジェクトを生成
    const XHR = new XMLHttpRequest();
    // リクエストの内容を引数へ追記
    XHR.open("POST", "/posts", true);
    // レスポンスの形式をjsonに指定
    XHR.responseType = "json";
    // リクエストを送信
    XHR.send(formData);
    // レスポンスの受信に成功したら
    XHR.onload = () => {
      // 以上が出たらエラーメッセージを出して処理を止める
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      // レスポンスとして返されたメモのレコードデータを取得
      const item = XHR.response.post;
      // 「描画する親要素」のlistの要素を取得
      const list = document.getElementById("list");
      // メモの入力フォームをリセットするために要素を取得
      const formText = document.getElementById("content");
      const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
      //  list要素の直後にHTMLを追加
     list.insertAdjacentHTML("afterend", HTML);
    //  入力されたままの文字をリセット、空の文字列に上書き
     formText.value = "";
    };
    e.preventDefault();
  });
}
// window（ページ）をload（読み込み）時に実行
window.addEventListener("load", memo);