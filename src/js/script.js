
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

var campaignSwiper = new Swiper(".js-campaign-swiper", {
  navigation:{
   nextEl:".campaign__swiper-button-next",
   prevEl:".campaign__swiper-button-prev",
  },
  loop: true,
  effect: "card",
  speed: 3000,
  // centeredSlides: false, //中央寄せにする
  // slidesPerView: "auto",
  spaceBetween: 24,
  // allowTouchMove:true,

  slidesPerView: 1.2,
  autoplay: {
    delay: 3000,
  },
  breakpoints:{
    768:{
      spaceBetween:40,
      slidesPerView: 3.01,
      autoplay:false,
    }
  },
});

// const campaignSwiper = new Swiper(".js-campaign-swiper", {
//   loop: true,
//   spaceBetween: 24,
//   slidesPerView: "1",
//   speed: 2000,
//   loopAdditionalSlides: 2,
//   width: 280,

//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
//   breakpoints: { //ブレークポイントの設定 小さい順に設定する！！
//     768: {
//       slidesPerView: "3.5",
//       spaceBetween: 40,
//       width: 1265.5,

//     },
//     1920: {
//       slidesPerView: "5",
//       spaceBetween: 40,
//       width: 1825,
//     },
//   },
//   // 前後の矢印
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
