import products from "../data/products.js";

const mainGrid = document.getElementById("main");

console.log(mainGrid);

let mainGridContent = "";

products.forEach((product) => {
  mainGridContent += `
    <div class="product-container">
        <div class="image-container">
          <img draggable="false" src="images/${
            product.image
          }" alt="Something went wrong!" />
          <button class="add-to-cart">Add to cart</button>
          <div class="add-to-favorite-container">
            <svg
              class="add-to-favorite"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect
                class="heart-background"
                width="40"
                height="40"
                rx="20"
                fill="#1B1A41"
              />
              <rect
                class="heart-border"
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="2"
              />
              <path
                class="heart"
                opacity="0.4"
                d="M20 28C19.9191 28 19.8381 27.9788 19.7656 27.9365C19.6869 27.8905 17.8159 26.7915 15.9181 25.1355C14.7933 24.154 13.8954 23.1806 13.2495 22.2422C12.4136 21.028 11.9933 19.86 12.0001 18.7707C12.008 17.5032 12.4567 16.3113 13.2637 15.4143C14.0842 14.5023 15.1793 14 16.3472 14C17.844 14 19.2124 14.8483 20 16.192C20.7876 14.8483 22.1561 14 23.6529 14C24.7562 14 25.8089 14.4532 26.6172 15.2761C27.5042 16.1791 28.0082 17.4551 27.9999 18.7767C27.9931 19.8641 27.5649 21.0303 26.7272 22.2429C26.0792 23.1808 25.1826 24.1538 24.0622 25.135C22.1713 26.7908 20.3138 27.8898 20.2356 27.9358C20.1628 27.9786 20.0814 28 20 28Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <p class="name">${product.name}</p>
        <p class="price">&#36;${(product.price / 100).toFixed(2)}</p>
    </div>
  `;
});
mainGrid.innerHTML = mainGridContent;

const addFavorite = document.querySelectorAll(".add-to-favorite-container");
const wishNotification = document.querySelector(".wish-decoration");

addFavorite.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("toggle-favorite");
    if (document.querySelectorAll(".toggle-favorite").length) {
      wishNotification.style.display = "flex";
      wishNotification.textContent =
        document.querySelectorAll(".toggle-favorite").length;
    } else {
      wishNotification.style.display = "none";
    }
  });
});

const cartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".cart-items-number");

let cartItemsNumber = 0;

cartButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.currentTarget.classList.add("btn-animation");
    cartItemsNumber++;
    cartItems.textContent = cartItemsNumber;
    cartItems.style.display = "flex";
  });
  btn.addEventListener("animationend", (event) => {
    event.currentTarget.classList.remove("btn-animation");
  });
});

const signInButton = document.querySelector(".sign-in");
const signInContainer = document.querySelector(".sign-in-overlay");
const signInOverlay = document.querySelector(".sign-in-overlay-invisible");

signInButton.addEventListener("click", () => {
  signInContainer.style.display = "flex";
});
signInOverlay.addEventListener("click", () => {
  signInContainer.style.display = "none";
});
