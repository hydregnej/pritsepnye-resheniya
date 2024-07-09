"use strict";
//==========================================
import { ERROR_SERVER, PRODUCT_INFORMATION_NOT_FOUND } from './constants.js';
import { showErrorMessage, checkingRelevanceValueBasket } from './utils.js';
import { slugify } from 'transliteration';

const catalog = document.querySelector('.catalog');
let productsData = [];

getProducts();

async function getProducts() {
    try {
        if (!productsData.length) {
            const res = await fetch('../data/products-catalog.json');
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            productsData = await res.json();
        }

        loadProductDetails(productsData);
    } catch (err) {
        showErrorMessage(ERROR_SERVER);
        console.log(err.message);
    }
}

function getParameterFromURL(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}

function loadProductDetails(data) {
    if (!data || !data.length) {
        showErrorMessage(ERROR_SERVER);
        return;
    }

    checkingRelevanceValueBasket(data);

    const productTitle = getParameterFromURL('title');
    if (!productTitle) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND);
        return;
    }

    const findProduct = data.find(card => slugify(card.title).toLowerCase() === productTitle.toLowerCase());

    if (!findProduct) {
        showErrorMessage(PRODUCT_INFORMATION_NOT_FOUND);
        return;
    }

    renderInfoProduct(findProduct);
}

function renderInfoProduct(product) {
    const { img, title, price, discount, descr } = product;
    const priceDiscount = price - ((price * discount) / 100);
    const productItem = `
        <div class="product">
            <h2 class="product__title">${title}</h2>
            <div class="product__img">
                <img src="./images/${img}" alt="${title}">
            </div>
            <p class="product__descr">${descr}</p>
            <div class="product__inner-price">
                <div class="product__price">
                    <b>Цена:</b>
                    ${price}₽
                </div>
                <div class="product__discount">
                    <b>Цена со скидкой:</b>
                    ${priceDiscount}₽
                </div>
            </div>
        </div>`;
    catalog.insertAdjacentHTML('beforeend', productItem);
}

// Вывод ошибки
export function showErrorMessage(message) {
    const h1 = document.querySelector('.wrapper h1');
    const msg = `
        <div class="error">
            <p>${message}</p>
            <p><a href="/">Перейти к списку товаров!</a></p>
        </div>`;
    h1.insertAdjacentHTML('afterend', msg);
}

// Получение корзины из Local Storage
export function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : [];
}

// Запись корзины в Local Storage
export function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.basket__count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
}

// Проверка актуальности товаров в корзине
export function checkingRelevanceValueBasket(productsData) {
    const basket = getBasketLocalStorage();

    basket.forEach((basketId, index) => {
        const existsInProducts = productsData.some(item => item.id === Number(basketId));
        if (!existsInProducts) {
            basket.splice(index, 1);
        }
    });

    setBasketLocalStorage(basket);
}
