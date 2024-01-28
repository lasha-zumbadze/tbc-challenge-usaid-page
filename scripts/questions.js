const questionBlock = document.querySelectorAll(".question");
const answerBlock = document.querySelectorAll(".answer");
const selectionVector = document.querySelectorAll(".down-arrow");

questionBlock.forEach((element, i) => {
  element.addEventListener("click", function () {
    answerBlock.forEach((answer) => {
      if (Number(answer.dataset.answerNumber) !== i + 1)
        answer.classList.remove("active");
      selectionVector.forEach((vector, j) => {
        if (j !== i) vector.style.transform = "rotate(0)";
      });
    });

    answerBlock[i].classList.toggle("active");

    if (answerBlock[i].classList.contains("active")) {
      selectionVector[i].style.transform = "rotate(180deg)";
    } else selectionVector[i].style.transform = "rotate(0)";
  });
});
