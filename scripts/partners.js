const partners = document.querySelectorAll(".partners");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = partners.length;
let myInterval;

const createDots = function () {
  partners.forEach((partner, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dot' data-slide='${i}'></button>`
    );
  });
};

const goToSlide = function (slide) {
  partners.forEach((partner) => {
    if (Number(partner.dataset.number) === slide + 1) {
      partner.style.opacity = "1";
    } else {
      partner.style.opacity = "0";
    }
  });

  partners.forEach((s, i) => {
    s.style.transform = `translate(${(i - slide) * 100}%)`;
  });
};

// NEXT SLIDE
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

// PREVIOUS SLIDE
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

// AUTO PLAY
const autoPlay = function () {
  myInterval = setInterval(() => {
    if (currentSlide <= maxSlide - 1) currentSlide++;
    if (currentSlide === maxSlide) currentSlide = 0;

    goToSlide(currentSlide);
  }, 3000);
};

autoPlay();

// INITIAL RENDER
const init = function () {
  goToSlide(0);
  createDots();
};

init();

btnRight.addEventListener("click", function () {
  clearInterval(myInterval);
  nextSlide();
  autoPlay();
});
btnLeft.addEventListener("click", function () {
  clearInterval(myInterval);
  prevSlide();
  autoPlay();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const slide = e.target.dataset.slide;

    clearInterval(myInterval);

    partners.forEach((el) => {
      if (Number(el.dataset.number) - 1 === Number(slide)) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0";
      }
    });

    partners.forEach((s, i) => {
      s.style.transform = `translate(${(i - slide) * 100}%)`;
    });

    currentSlide = slide;
    autoPlay();
  }
});
