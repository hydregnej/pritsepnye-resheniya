document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.catalog__options-list-item')
  const cardContainer = document.querySelector('.catalog__container')

  const showCatalog = (cards) => {
      cardContainer.innerHTML = ''

      cards.forEach((card) => {
          const cardElement = document.createElement('div')
          cardElement.classList.add('catalog__card')
          
          cardElement.innerHTML = `
              <img src="${card.imgSrc}" alt="trailer photo" class="catalog__card-img">
              <div class="catalog__card-title">${card.title}</div>
              <div class="catalog__card-buttons">
                  <button class="card-btn pdf">Скачать PDF</button>
                  <button class="card-btn learn">перейти</button>
              </div>
          `
          cardContainer.appendChild(cardElement)
      })
  }

  // для обновления активного элемента и отображаемых карточек
  const updateActiveTab = (hash) => {
      items.forEach(item => {
          if (item.getAttribute('data-tab') === hash) {
              item.classList.remove('js-catalog__options-list-item--inactive')
              item.classList.add('js-catalog__options-list-item--active')
              showCatalog(catalogData[hash])
          } else {
              item.classList.remove('js-catalog__options-list-item--active')
              item.classList.add('js-catalog__options-list-item--inactive')
          }
      })
  }

  const hash = window.location.hash.substring(1) || 'low'
  updateActiveTab(hash)

  items.forEach(item => {
      item.addEventListener('click', () => {
          const tab = item.getAttribute('data-tab')
          window.location.hash = tab
          updateActiveTab(tab)
      })
  })
})

// Массив с данными
const lowCards = [
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9833-0000050.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000050",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9834-0000050.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000050",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9835-0000050.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ 9835-0000050",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer sliding 9833-0000050.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000050 (раздвижной)",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer sliding 9834-0000050.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000050 (раздвижной)",
},
]

const highCards = [
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9833-0000060.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000060",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9834-0000060.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000060",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9835-0000060.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ 9835-0000060",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer sliding 9833-0000060.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000060 (раздвижной)",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer sliding 9834-0000060.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000060 (раздвижной)",
},
]

const boardCards = [
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9833-0000070.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000070",
},
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9834-0000070.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9834-0000070",
},
]

const chassisCards = [
{
  imgSrc: "./image/сжатые изображения/без фона/semitrailer 9833-0000020.png",
  title: "ПОЛУПРИЦЕП-ТЯЖЕЛОВОЗ ДТ 9833-0000020",
},
]

const catalogData = {
low: lowCards,
high: highCards,
board: boardCards,
chassis: chassisCards
}
