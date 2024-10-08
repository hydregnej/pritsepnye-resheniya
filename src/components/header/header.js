//Лого
const upShortLine = document.querySelector('.animated-logo__up-short-line');
const upLongLine = document.querySelector('.animated-logo__up-long-line');
const downLongLine = document.querySelector('.animated-logo__down-long-line');
const downShortLine = document.querySelector('.animated-logo__down-short-line');
const logoText = document.querySelector('.animated-logo__text');

document.addEventListener("DOMContentLoaded", () => {
  const logoText = document.querySelector(".animated-logo__text");
  const upShortLine = document.querySelector(".animated-logo__up-short-line");
  const upLongLine = document.querySelector(".animated-logo__up-long-line");
  const downLongLine = document.querySelector(".animated-logo__down-long-line");
  const downShortLine = document.querySelector(".animated-logo__down-short-line");

  function animateText() {
    logoText.classList.add('active');
  }

  // Устанавливаем начальные стили
  gsap.set([upShortLine, upLongLine, downLongLine, downShortLine], { transformOrigin: "center", scaleX: 0 });

  // Создаем таймлайн и добавляем анимации
  gsap.timeline()
    .to([upShortLine, upLongLine, downShortLine, downLongLine], {
      scaleX: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to([upShortLine, upLongLine, downShortLine, downLongLine], {
      y: (i) => i < 2 ? -20 : 20,
      duration: 0.5,
      ease: "power2.out",
      onComplete: animateText // Вызовем функцию animateText после завершения анимации
    });
});


// Бургер-меню
const burger = document.querySelector('.burger')
const headerModal = document.querySelector('.header-modal')
const modalNavCatalog = document.querySelector('.modal-nav-catalog')
const modalNavAboutUs = document.querySelector('.modal-nav-about-us')
const modalMenuCatalog = document.querySelector('.modal-menu__catalog')
const modalMenuAboutUs = document.querySelector('.modal-menu__about-us')

burger.addEventListener("click", () => {
  burger.classList.toggle("active-burger")
  headerModal.classList.toggle("header-modal-active")
})

modalNavCatalog.addEventListener("click", () => {
  modalMenuCatalog.classList.toggle("modal-menu-catalog__active")
})

modalNavAboutUs.addEventListener("click", () => {
  modalMenuAboutUs.classList.toggle("modal-menu-about-us__active")
})

//Переход на страницу с конкретным элементом
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1)
  const tabElements = document.querySelectorAll('.catalog__options-list-item')

  tabElements.forEach(element => {
    if (element.getAttribute('data-tab') === hash) {
      element.classList.remove('js-catalog__options-list-item--inactive')
      element.classList.add('js-catalog__options-list-item--active')
    } else {
      element.classList.remove('js-catalog__options-list-item--active')
      element.classList.add('js-catalog__options-list-item--inactive')
    }
  })
})

//Анимация при наведении
document.addEventListener('DOMContentLoaded', () => {
  const dropdownItems = document.querySelectorAll('.nav-header__item--dropdown-catalog, .nav-header__item--dropdown-about');

  dropdownItems.forEach(item => {
    const menu = item.querySelector('.header-menu__unwrap');

    item.addEventListener('mouseenter', () => {
      // requestAnimationFrame для принудительного перерисования
      requestAnimationFrame(() => {
        menu.style.display = 'block';
        requestAnimationFrame(() => {
          menu.classList.add('show');
        });
      });
    });

    item.addEventListener('mouseleave', () => {
      menu.classList.remove('show');
      menu.addEventListener('transitionend', function handler() {
        if (!menu.classList.contains('show')) {
          menu.style.display = 'none';
        }
        menu.removeEventListener('transitionend', handler);
      });
    });
  });
});
