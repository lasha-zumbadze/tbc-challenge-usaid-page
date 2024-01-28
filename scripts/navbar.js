const navbar = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.opacity = "0.9";
  } else {
    navbar.style.opacity = "1";
  }
};
