/*
window.addEventListener("load", animation)

function animation( text, doc ) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    setTimeout( function () {
      result += text[i];
      doc.innerHTML = result;
    }, 90 * i); }
}


animation("Hello, I'm Nathanaël Bayle.", document.getElementById("animation"))
setTimeout(function(){
  animation("I'm a software architect student.", document.getElementById("animation2"))
}, 2700);
*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/(\S)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 9],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 300,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
