window.onscroll = function () {
  if (window.scrollY > 80) {
    document.querySelector(".header").classList.add("scroll");
  } else {
    document.querySelector(".header").classList.remove("scroll");
  }
};

document.querySelector(".header .container .change").style.cssText =
  "margin-right: 0 !important;";

if (window.innerWidth < 641) {
  document.querySelector(".header .container .change").classList.remove("btn");
  document.querySelector(".header .container .change").classList.add("child");
} else {
  document.querySelector(".header .container .change").classList.add("btn");
  document
    .querySelector(".header .container .change")
    .classList.remove("child");
}
