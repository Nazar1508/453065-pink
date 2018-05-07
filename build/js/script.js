var header = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var backgroundMini = document.querySelector('.promo__background');
var promoMini = document.querySelector('.promo--mini');

navMain.classList.remove('main-nav--nojs');

header.classList.add('page-header--closed');

navToggle.addEventListener('click', function() {
header.classList.toggle("page-header--opened");
});

navToggle.addEventListener('click', function() {
backgroundMini.classList.toggle("promo__background--mini");
});

navToggle.addEventListener('click', function() {
promoMini.classList.toggle("promo--mini-small");
});

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
} else {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
}
});
