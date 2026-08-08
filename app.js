const menuItems = [
  { id: 1, name: 'Crispy Samosa', category: 'Snacks', price: 35, veg: true, spicy: false, bestseller: true, available: true, description: 'Golden pastry filled with spiced potatoes.', calories: 220, image: './snackpics/crispysamosa.jpg' },
  { id: 2, name: 'Masala Maggi', category: 'Meals', price: 70, veg: true, spicy: true, bestseller: true, available: true, description: 'Comfort noodles with crunchy veggies.', calories: 310, image: './snackpics/masalamaggie.jpg' },
  { id: 3, name: 'Classic Cold Coffee', category: 'Beverages', price: 60, veg: true, spicy: false, bestseller: false, available: true, description: 'Chilled coffee with caramel notes.', calories: 180, image: './snackpics/coldcoffee.jpg' },
  { id: 4, name: 'Paneer Wrap', category: 'Combos', price: 120, veg: true, spicy: false, bestseller: true, available: true, description: 'Stuffed wrap with fresh greens.', calories: 420, image: './snackpics/paneerwrap.jpeg' },
  { id: 5, name: 'Chicken Puff', category: 'Snacks', price: 55, veg: false, spicy: true, bestseller: false, available: false, description: 'Flaky pastry with juicy chicken.', calories: 260, image: './snackpics/puff.jpg' },
  { id: 6, name: 'Mango Lassi', category: 'Beverages', price: 55, veg: true, spicy: false, bestseller: false, available: true, description: 'Sweet and creamy yogurt drink.', calories: 190, image: './snackpics/mangolassi.jpg' },

  // Newly added items requested
  { id: 7, name: 'Cold Coffee', category: 'Beverages', price: 60, veg: true, spicy: false, bestseller: false, available: true, description: 'Classic chilled cold coffee.', calories: 180, image: './snackpics/coldcoffee.jpg' },
  { id: 8, name: 'Tea', category: 'Beverages', price: 30, veg: true, spicy: false, bestseller: false, available: true, description: 'Hot brewed tea.', calories: 20, image: './snackpics/tea.jpg' },
  { id: 9, name: 'French Fries', category: 'Snacks', price: 45, veg: true, spicy: true, bestseller: false, available: true, description: 'Crispy golden fries.', calories: 320, image: './snackpics/frenchfries.jpg' },
  { id: 10, name: 'Creme Cheese Pasta', category: 'Meals', price: 140, veg: true, spicy: false, bestseller: false, available: true, description: 'Creamy cheese pasta.', calories: 540, image: './snackpics/creamcheesepasta.jpg' },
  { id: 11, name: 'Panipuri', category: 'Snacks', price: 40, veg: true, spicy: true, bestseller: true, available: true, description: 'Crispy puris with tangy water.', calories: 150, image: './snackpics/panipuri.jpg' },
  { id: 12, name: 'Paniyaram', category: 'Snacks', price: 50, veg: true, spicy: false, bestseller: false, available: true, description: 'Savory South Indian snack.', calories: 210, image: './snackpics/paniyaram.jpg' },
  { id: 13, name: 'Pizza', category: 'Meals', price: 150, veg: false, spicy: false, bestseller: true, available: true, description: 'Cheesy pepperoni pizza.', calories: 700, image: './snackpics/pizza.jpg' },
  { id: 14, name: 'Puff', category: 'Snacks', price: 55, veg: false, spicy: true, bestseller: false, available: true, description: 'Flaky stuffed puff.', calories: 260, image: './snackpics/puff.jpg' },
  { id: 15, name: 'Red Sauce Pasta', category: 'Meals', price: 150, veg: true, spicy: false, bestseller: false, available: true, description: 'Pasta in tangy red sauce.', calories: 520, image: './snackpics/redsaucepasta.webp' }
];

const state = {
  cart: [],
  user: null,
  orders: [
    { id: 'ORD-102', status: 'Ready', pickup: '12:30 PM', items: ['Masala Maggi'] },
    { id: 'ORD-103', status: 'Preparing', pickup: '1:00 PM', items: ['Classic Cold Coffee'] }
  ],
  theme: 'light'
};

const els = {
  menuGrid: document.getElementById('menuGrid'),
  cartItems: document.getElementById('cartItems'),
  cartSummary: document.getElementById('cartSummary'),
  authForm: document.getElementById('authForm'),
  profilePanel: document.getElementById('profilePanel'),
  authStatus: document.getElementById('authStatus'),
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  vegOnly: document.getElementById('vegOnly'),
  spicyOnly: document.getElementById('spicyOnly'),
  bestsellerOnly: document.getElementById('bestsellerOnly'),
  availableOnly: document.getElementById('availableOnly'),
  orderTracking: document.getElementById('orderTracking'),
  recommendations: document.getElementById('recommendations'),
  vendorDashboard: document.getElementById('vendorDashboard'),
  orderHistory: document.getElementById('orderHistory'),
  toast: document.getElementById('toast'),
  themeToggle: document.getElementById('themeToggle'),
  guestBtn: document.getElementById('guestBtn'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  couponInput: document.getElementById('couponInput'),
  scheduleType: document.getElementById('scheduleType'),
  pickupSlot: document.getElementById('pickupSlot'),
  paymentMethod: document.getElementById('paymentMethod')
};

function renderMenu() {
  const term = els.searchInput.value.toLowerCase();
  const category = els.categoryFilter.value;
  const vegOnly = els.vegOnly.checked;
  const spicyOnly = els.spicyOnly.checked;
  const bestsellerOnly = els.bestsellerOnly.checked;
  const availableOnly = els.availableOnly.checked;

  const filtered = menuItems.filter(item => {
    const matchesTerm = item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term);
    const matchesCategory = category === 'All' || item.category === category;
    const matchesVeg = !vegOnly || item.veg;
    const matchesSpicy = !spicyOnly || item.spicy;
    const matchesBestseller = !bestsellerOnly || item.bestseller;
    const matchesAvailable = !availableOnly || item.available;
    return matchesTerm && matchesCategory && matchesVeg && matchesSpicy && matchesBestseller && matchesAvailable;
  });

  els.menuGrid.innerHTML = filtered.map(item => `
    <article class="menu-card">
      <img src="${item.image || ''}" alt="${item.name}" class="menu-img" />
      <div class="menu-meta">
        <strong>${item.category}</strong>
        <span>${item.available ? 'Live' : 'Sold out'}</span>
      </div>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <div class="menu-meta">
        <span>${item.calories} kcal</span>
        <strong>₹${item.price}</strong>
      </div>
      <div class="hero-actions">
        <button class="primary-btn" onclick="addToCart(${item.id})">Add to cart</button>
      </div>
    </article>
  `).join('');
}

function addToCart(id) {
  const item = menuItems.find(entry => entry.id === id);
  if (!item || !item.available) {
    showToast('That item is currently unavailable.');
    return;
  }

  const existing = state.cart.find(entry => entry.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...item, qty: 1 });
  }
  renderCart();
  showToast(`${item.name} added to cart`);
}

function updateQty(id, delta) {
  const item = state.cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(entry => entry.id !== id);
  }
  renderCart();
}

function renderCart() {
  if (!state.cart.length) {
    els.cartItems.innerHTML = '<p>Your cart is empty. Add a snack to begin.</p>';
    els.cartSummary.innerHTML = '';
    return;
  }

  els.cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <div class="menu-meta"><span>${item.category}</span><span>₹${item.price}</span></div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = els.couponInput.value.toUpperCase() === 'SNACK10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount + 15;

  els.cartSummary.innerHTML = `
    <div class="menu-meta"><span>Subtotal</span><strong>₹${subtotal}</strong></div>
    <div class="menu-meta"><span>Discount</span><strong>-₹${discount.toFixed(0)}</strong></div>
    <div class="menu-meta"><span>Pickup fee</span><strong>₹15</strong></div>
    <div class="menu-meta"><span>Total</span><strong>₹${total.toFixed(0)}</strong></div>
  `;
}

function renderOrders() {
  els.orderTracking.innerHTML = state.orders.map(order => `
    <div class="order-item">
      <div>
        <strong>${order.id}</strong>
        <p>${order.items.join(', ')}</p>
      </div>
      <div>
        <span class="tag medium">${order.status}</span>
        <p>${order.pickup}</p>
      </div>
    </div>
  `).join('');

  const recommendations = menuItems.filter(item => item.bestseller && item.available).slice(0, 3);
  els.recommendations.innerHTML = recommendations.map(item => `
    <div class="recommendation-item">
      <div>
        <strong>${item.name}</strong>
        <p>${item.description}</p>
      </div>
      <button class="secondary-btn" onclick="addToCart(${item.id})">Try it</button>
    </div>
  `).join('');

  els.vendorDashboard.innerHTML = `
    <div class="order-item">
      <div>
        <strong>Pending orders</strong>
        <p>3 new requests</p>
      </div>
      <span class="tag high">Queue 3</span>
    </div>
    <div class="order-item">
      <div>
        <strong>Low stock alert</strong>
        <p>Paneer Wrap running low</p>
      </div>
      <span class="tag medium">Restock</span>
    </div>
  `;

  els.orderHistory.innerHTML = state.orders.map(order => `
    <div class="order-item">
      <div>
        <strong>${order.id}</strong>
        <p>${order.status}</p>
      </div>
      <button class="secondary-btn" onclick="reorder('${order.id}')">Reorder</button>
    </div>
  `).join('');
}

function reorder(id) {
  const order = state.orders.find(entry => entry.id === id);
  if (!order) return;
  showToast(`Reordering ${order.items[0]}`);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => els.toast.classList.remove('show'), 1800);
}

function handleAuth(event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const roll = document.getElementById('rollInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  if (!name || !roll || !email.includes('@') || !email.includes('.')) {
    showToast('Please provide a valid student profile.');
    return;
  }

  state.user = { name, roll, email, wallet: 250 };
  els.authStatus.textContent = `Welcome ${name} • Wallet ₹${state.user.wallet}`;
  els.profilePanel.innerHTML = `
    <strong>${name}</strong>
    <p>${roll} • ${email}</p>
    <p>Wallet balance: ₹${state.user.wallet}</p>
  `;
  els.profilePanel.classList.remove('hidden');
  showToast('Profile ready. Your wallet is active.');
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark', state.theme === 'dark');
  els.themeToggle.textContent = state.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function handleCheckout() {
  if (!state.cart.length) {
    showToast('Add something to your cart first.');
    return;
  }

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const slot = els.pickupSlot.value;
  const method = els.paymentMethod.value;
  const orderId = `ORD-${100 + state.orders.length}`;

  state.orders.unshift({ id: orderId, status: 'Placed', pickup: slot, items: state.cart.map(item => item.name) });
  state.cart = [];
  renderCart();
  renderOrders();
  showToast(`Order ${orderId} placed via ${method}`);
  document.getElementById('metricOrders').textContent = String(Number(document.getElementById('metricOrders').textContent) + totalItems);
}

function bindEvents() {
  els.authForm.addEventListener('submit', handleAuth);
  els.searchInput.addEventListener('input', renderMenu);
  els.categoryFilter.addEventListener('change', renderMenu);
  els.vegOnly.addEventListener('change', renderMenu);
  els.spicyOnly.addEventListener('change', renderMenu);
  els.bestsellerOnly.addEventListener('change', renderMenu);
  els.availableOnly.addEventListener('change', renderMenu);
  els.couponInput.addEventListener('input', renderCart);
  els.themeToggle.addEventListener('click', toggleTheme);
  els.guestBtn.addEventListener('click', () => {
    state.user = null;
    els.authStatus.textContent = 'Browsing as guest — no login required.';
    els.profilePanel.innerHTML = '';
    els.profilePanel.classList.add('hidden');
    showToast('Guest mode active');
  });
  els.checkoutBtn.addEventListener('click', handleCheckout);
}

function init() {
  bindEvents();
  renderMenu();
  renderCart();
  renderOrders();
}

init();
