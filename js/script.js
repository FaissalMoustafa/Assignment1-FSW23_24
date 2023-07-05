var header = document.querySelector('.site-header');  // copied from ChatGPT and adjusted to make the header collapse
var prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-60px';
  }
  prevScrollPos = currentScrollPos;
});