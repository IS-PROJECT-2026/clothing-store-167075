const grid = document.getElementById('product-grid');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.chip');
const toast = document.getElementById('toast');
const cartCount = document.getElementById('cartCount');

let activeCategory = 'all';
let cartItems = 0;

function formatPrice(value) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(value);
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function renderProducts() {
  if (!grid || !Array.isArray(PRODUCTS)) {
    return;
  }

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const haystack = `${product.name} ${product.category}`.toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-wrap">
            <img src="${product.img}" alt="${product.name}" class="product-image">
          </div>
          <div class="product-info">
            <div class="product-meta">
              <p class="product-category">${product.category}</p>
              <p class="product-price">${formatPrice(product.price)}</p>
            </div>
            <h3>${product.name}</h3>
            <button class="add-to-cart" data-id="${product.id}">Add to bag</button>
          </div>
        </article>
      `
    )
    .join('');

  if (resultCount) {
    resultCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`;
  }

  if (emptyState) {
    emptyState.hidden = filteredProducts.length !== 0;
  }
}

function bindEvents() {
  if (searchInput) {
    searchInput.addEventListener('input', renderProducts);
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category || 'all';

      filterButtons.forEach((chip) => {
        chip.classList.toggle('active', chip === button);
      });

      renderProducts();
    });
  });

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.add-to-cart');
    if (!addButton) return;

    cartItems += 1;

    if (cartCount) {
      cartCount.textContent = String(cartItems);
    }

    const productId = Number(addButton.dataset.id);
    const product = PRODUCTS.find((item) => item.id === productId);
    showToast(product ? `${product.name} added to bag` : 'Added to bag');
  });
}

bindEvents();
renderProducts();
