function check () {
  // postをクラス名に持つ要素を取得
  const posts = document.querySelectorAll(".post");
  // それぞれの要素への処理を記述する場所を用意
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    // 「要素1つずつに対して、『クリック』した際に動作するイベント駆動」を設定
    post.addEventListener("click", () => {
      // メモのidを取得
      const postId = post.getAttribute("data-id");
      // Ajaxを可能にするためのオブジェクトを生成
      const XHR = new XMLHttpRequest();
      // リクエストの詳細を指定
      XHR.open("GET", `/posts/${postId}`, true);
      // レスポンスの形式をjsonに指定
      XHR.responseType = "json";
      // リクエストを送信
      XHR.send();
      // レスポンスなどの受信が成功した場合に呼び出される
      XHR.onload = () => {
        // 処理に成功しなかったら
        if (XHR.status != 200) {
          エラーメッセージを表示
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          // JavaScriptの処理から抜け出す
          return null; 
        }
        // checkedアクションで返却したitemを取得
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
// window（ページ）をload（読み込み）した時に実行
// check関数が1秒に1度実行されるように記述を変更
setInterval(check, 1000);