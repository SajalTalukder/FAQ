const questions = document.querySelectorAll(".question-box");
const icon = document.querySelector(".icon");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    if (e.target.classList.contains("fas")) {
      const target = e.target.parentElement.parentElement;
      target.classList.toggle("show");
    }
  });
});
