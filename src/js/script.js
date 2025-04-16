
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー (`.js-hamburger`) またはドロワーメニュー (`.js-drawer`) がクリックされたときの処理
  $(".js-hamburger, .js-drawer").click(function () {
    
    // `.js-hamburger` に `is-active` クラスを追加・削除（トグル）する
    // → メニューの開閉状態を視覚的に切り替えるためのクラス
    $(".js-hamburger, .js-header").toggleClass("is-active");

    // `.js-drawer` をフェードイン・フェードアウト（ゆっくり表示・非表示）を切り替える
    $(".js-drawer").fadeToggle();
  });
});

// Swiperのインスタンスを作成し、「.js-mv-swiper」というクラスを持つ要素に適用
var mvSwiper = new Swiper(".js-mv-swiper", {
  
  // スライドをループさせる（最後まで行ったら最初に戻る）
  loop: true,

  // スライドの切り替えをフェード（ぼかし）で行う
  effect: "fade",

  // スライドが切り替わる時間（3000ミリ秒 = 3秒間かけて切り替わる）
  speed: 3000,

  // ユーザーがスワイプやタップでスライドを切り替えられないようにする
  allowTouchMove: false,

  // 自動再生（autoplay）の設定
  // autoplay: {
  //   // 各スライドが表示されている時間（3秒ごとに次のスライドへ）
  //   delay: 3000
  // },

});

