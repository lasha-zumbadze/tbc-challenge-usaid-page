const termsContainer = document.querySelector(".terms-conditions-container");
const verticalNav = document.querySelector(".vertical-navbar");
const menuToggle = document.querySelector(".toggle");
const overlay = document.querySelector(".overlay");
const termsOpenButton = document.querySelector(".terms");
const termsCloseButton = document.querySelector(".terms-close-btn");
const termsBtn = document.querySelector(".terms-btn");

function openMenu() {
  verticalNav.style.right = "0";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
  navbar.style.opacity = "1";
}

function closeMenu() {
  menuToggle.classList.remove("active");
  verticalNav.style.right = "-100%";
  overlay.style.display = "none";
  document.body.style.overflow = "visible";
  navbar.style.opacity = "0.9";
}

function openTerms() {
  overlay.style.display = "block";
  termsContainer.style.right = "0";
}

function closeTerms() {
  termsOpenButton.classList.remove("active");
  overlay.style.display = "none";
  termsContainer.style.right = "-100%";
}

// TOGGLE TERMS
termsOpenButton.addEventListener("click", function () {
  termsOpenButton.classList.toggle("active");

  if (termsOpenButton.classList.contains("active")) openTerms();
  else closeTerms();
});

termsCloseButton.addEventListener("click", closeTerms);
termsBtn.addEventListener("click", closeTerms);

// TOGGLE MENU
menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");

  if (menuToggle.classList.contains("active")) openMenu();
  else closeMenu();
});

// OVERLAY
overlay.addEventListener("click", function () {
  if (termsOpenButton.classList.contains("active")) closeTerms();

  if (menuToggle.classList.contains("active")) closeMenu();
});

// ESCAPE
document.addEventListener("keydown", function (e) {
  if (termsOpenButton.classList.contains("active") && e.key === "Escape")
    closeTerms();

  if (menuToggle.classList.contains("active") && e.key === "Escape")
    closeMenu();
});
