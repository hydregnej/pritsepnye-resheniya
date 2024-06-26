//Лого
const upShortLine = document.querySelector('.animated-logo__up-short-line');
const upLongLine = document.querySelector('.animated-logo__up-long-line');
const downLongLine = document.querySelector('.animated-logo__down-long-line');
const downShortLine = document.querySelector('.animated-logo__down-short-line');
const logoText = document.querySelector('.animated-logo__text');
const burger = document.querySelector('.burger')

function animateText() {
  logoText.classList.add('active');
}

setTimeout(animateText, 830);

gsap.set([upShortLine, upLongLine, downLongLine, downShortLine], { transformOrigin: "center", scaleX: 0 });

gsap.timeline()
  .to([upShortLine, upLongLine, downShortLine, downLongLine], {
    scaleX: 1,
    duration: 1,
    ease: "power2.out"
  })
  .to([upShortLine, upLongLine, downShortLine, downLongLine], {
    y: (i) => i < 2 ? -20 : 20,
    duration: 0.5,
    ease: "power2.out"
  });

  // Бургер-меню
  burger.addEventListener("click", () => {
    burger.classList.toggle("active")
  })