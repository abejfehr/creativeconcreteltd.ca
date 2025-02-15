var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

if (iOSSafari) {
  const link = document.querySelector(".contact-link");
  link.style.display = "inline"; // the default
}
