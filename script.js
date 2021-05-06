
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
