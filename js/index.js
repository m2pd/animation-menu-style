var $cursor = document.querySelector('.cursor');
var $overlay = document.querySelectorAll('.project-overlay');

function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX - 250,
      top: e.pageY - 250
    },
    delay: 0.03
  });
}

document.querySelector('.p-1').onmouseenter = function () {
  $cursor.style.backgroundImage = "url(images/image-8.jpg)"
}
document.querySelector('.p-2').onmouseenter = function () {
  $cursor.style.backgroundImage = "url(images/image-7.jpg)"
}
document.querySelector('.p-3').onmouseenter = function () {
  $cursor.style.backgroundImage = "url(images/image-5.jpg)"
}
document.querySelector('.p-4').onmouseenter = function () {
  $cursor.style.backgroundImage = "url(images/image-6.jpg)"
}

// $('.p-1').hover(function () {
//   $(".cursor").css({ "background-image": "url(images/image-1.jpg)" })
// })
// $('.p-2').hover(function () {
//   $(".cursor").css({ "background-image": "url(images/image-2.jpg)" })
// })
// $('.p-3').hover(function () {
//   $(".cursor").css({ "background-image": "url(images/image-3.jpg)" })
// })
// $('.p-4').hover(function () {
//   $(".cursor").css({ "background-image": "url(images/image-4.jpg)" })
// })

var flag = false;

for (let i = 0; i < $overlay.length; i++) {

  $overlay[i].onmouseenter = function () {
    flag = true;
    TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    this.onmousemove = moveCircle
  }

  $overlay[i].onmouseleave = function () {
    flag = false;
    TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
  }
}

// $overlay.onmouseenter = moveCircle;

// $overlay.onmouseenter = function () {
//   flag = true;
//   TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 })
//   $overlay.onmouseenter = moveCircle();
// }

// $overlay.onmouseenter = function () {
//   flag = false;
//   TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 })
// }