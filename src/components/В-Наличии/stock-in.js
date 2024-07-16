//Анимация полоски под заголовком
document.addEventListener("DOMContentLoaded", function () {
  const targetInStock = document.querySelector(".availability__title");

  if (!targetInStock) {
    console.error("TargetInStock element not found!");
    return;
  }

  const observerInStock = new IntersectionObserver((entries, observerInStock) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Element is intersecting");
        entry.target.classList.add('availability-animate');
        observerInStock.unobserve(entry.target);
      } else {
        console.log("Element is not intersecting");
      }
    });
  }, {
    threshold: 0.1
  });

  observerInStock.observe(targetInStock);
});
