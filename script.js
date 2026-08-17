const STORAGE_KEY = 'kitu-bag';
const grid = document.getElementById('product-grid');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.chip');
const toast = document.getElementById('toast');
const cartCount = document.getElementById('cartCount');
const bagItemsContainer = document.getElementById('bagItems');
const bagSubtotal = document.getElementById('bagSubtotal');
const bagTotal = document.getElementById('bagTotal');
const clearBagButton = document.getElementById('clearBag');

let activeCategory = 'all';
let cartItems = 0;

function loadBag() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function saveBag(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function updateCartCount() {
  const items = loadBag();
  const total = items.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);

  cartItems = total;

  if (cartCount) {
    cartCount.textContent = String(total);
  }
}

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

function addToBag(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  const bag = loadBag();
  const existingItem = bag.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    bag.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      category: product.category,
      quantity: 1,
    });
  }

  saveBag(bag);
  updateCartCount();
  showToast(`${product.name} added to bag`);
}

function renderBagPage() {
  if (!bagItemsContainer) return;

  const bag = loadBag();

  if (!bag.length) {
    bagItemsContainer.innerHTML = `
      <div class="empty-bag">
        <p>Your bag is empty.</p>
        <a href="index.html" class="empty-bag-link">Continue shopping</a>
      </div>
    `;

    if (bagSubtotal) bagSubtotal.textContent = formatPrice(0);
    if (bagTotal) bagTotal.textContent = formatPrice(0);
    return;
  }

  const total = bag.reduce((sum, item) => sum + item.price * item.quantity, 0);

  bagItemsContainer.innerHTML = bag
    .map(
      (item) => `
        <div class="bag-item">
          <img src="${item.image}" alt="${item.name}" class="bag-item-image">
          <div class="bag-item-details">
            <div>
              <p class="bag-item-category">${item.category}</p>
              <h3>${item.name}</h3>
            </div>
            <div class="bag-item-controls">
              <span>Qty: ${item.quantity}</span>
              <button type="button" class="bag-remove" data-id="${item.id}">Remove</button>
            </div>
          </div>
          <div class="bag-item-price">${formatPrice(item.price * item.quantity)}</div>
        </div>
      `
    )
    .join('');

  if (bagSubtotal) bagSubtotal.textContent = formatPrice(total);
  if (bagTotal) bagTotal.textContent = formatPrice(total);
}

function removeFromBag(productId) {
  const bag = loadBag().filter((item) => item.id !== productId);
  saveBag(bag);
  updateCartCount();
  renderBagPage();
}

function clearBag() {
  saveBag([]);
  updateCartCount();
  renderBagPage();
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
    if (addButton) {
      addToBag(Number(addButton.dataset.id));
      return;
    }

    const removeButton = event.target.closest('.bag-remove');
    if (removeButton) {
      removeFromBag(Number(removeButton.dataset.id));
      return;
    }

    if (event.target.closest('#clearBag')) {
      clearBag();
    }
  });
}

updateCartCount();
bindEvents();
renderProducts();
renderBagPage();
