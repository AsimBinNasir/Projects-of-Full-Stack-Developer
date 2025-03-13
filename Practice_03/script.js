let foodProductsHTML = '';

// Generate HTML for each food product
foodProducts.forEach((foodProduct) => {
  foodProductsHTML += `
    <div class="food-container">
      <div class="food-image-container">
        <img src="${foodProduct.image}" alt="${foodProduct.name}" class="food-image">
      </div>

      <div class="food-name-limit-text-to-2-line">
        ${foodProduct.name}
      </div>

      <div class="food-price">
        &#2547; ${(foodProduct.price).toFixed(2)}
      </div>

      <div class="food-quantity">
        <select class="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="add-to-cart">
        <button class="add-to-cart-button js-add-to-cart-button"
        data-food-product-name="${foodProduct.name}">
          Add to Cart
        </button>
      </div>
    </div>
  `;
});

// Insert the generated HTML into the food grid
document.querySelector('.js-food-grid').innerHTML = foodProductsHTML;

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const foodProductName = button.dataset.foodProductName;

      let matchingItem;

      cart.forEach((item) => {
        if(foodProductName === item.foodProductName) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          foodProductName: foodProductName,
          quantity: 1
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) =>{
        cartQuantity += item.quantity;
      })

      const cartCount = document.getElementById('js-cart-count')
      cartCount.innerHTML=cartQuantity;

    });
  });



// Get elements
const hamburgerIcon = document.getElementById("hamburger-icon");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("close-sidebar");

// Toggle sidebar and overlay
hamburgerIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close sidebar when clicking outside (on overlay)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Close sidebar when clicking the close button
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});