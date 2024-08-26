//Анимация полоски под заголовком
document.addEventListener("DOMContentLoaded", function () {
  const targetFeedback = document.querySelector(".feedback__h2");

  if (!targetFeedback) {
    console.error("TargetFeedback element not found!");
    return;
  }

  const observerFeedback = new IntersectionObserver((entries, observerFeedback) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting");
        entry.target.classList.add('animate-form');
        observerFeedback.unobserve(entry.target);
      } else {
        console.log("Element is not intersecting");
      }
    });
  }, {
    threshold: 0.1
  });

  observerFeedback.observe(targetFeedback);
});