/* ============================================================
   AL NUBRAS ERP — Application JavaScript
   Complete SPA with all views and interactions
   ============================================================ */

// ---- SVG Icons ----
const ICO = {
  back: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.31 15.34v1.17H10.9v-1.17c-1.69-.3-2.95-1.31-3.07-2.97h1.76c.07.91.6 1.76 2.34 1.76 1.86 0 2.25-1.11 2.25-1.64 0-.81-.39-1.41-2.34-1.87-2.17-.52-3.66-1.42-3.66-3.21 0-1.51 1.21-2.49 2.72-2.81V5h2.34v1.19c1.62.4 2.44 1.63 2.49 2.97h-1.71c-.04-.98-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.76.46 3.66 1.22 3.66 3.42-.01 1.61-1.21 2.48-2.73 2.77z"/></svg>',
  mfg: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M22 14v-2l-1-.5V4h-2v1H9V4H7v7.5L6 12v2l1-.5V18H5v2h18v-2h-2v-4.5l1 .5zM9 18H7.5v-4H9v4zm4 0h-2v-4h2v4zm4 0h-2v-4h2v4z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
  user: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  box: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39l1.2-1.6c-.99-.74-2.24-1.68-3.2-2.4l-1.2 1.61zM20.4 5.6L19.2 4c-.99.74-2.24 1.68-3.2 2.4l1.2 1.6c.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l5 3V6L5 9H4z"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.6 18.2L13 11.75v-.91a3.496 3.496 0 001.75-3.03C14.75 5.26 12.95 3.5 10.5 3.5S6.25 5.26 6.25 7.81c0 1.35.77 2.52 1.75 3.03v.91L-.6 18.2l1.2 1.6 4.4-3.3V22h11V16.5l4.4 3.3 1.2-1.6z"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  warning: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#e74c3c"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#2ecc71"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
  print: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
  del: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#e74c3c"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
};

// ---- Global State ----
const state = {
  client: { mobile: '', name: '', location: 'AL-AIN' },
  cart: [],
  orders: [
    { id: 'A2025-0035', client: 'MR. RADWAN', mobile: '050 555 5522', items: [
      { name: 'Arabic Kandura', qty: 3, price: 500, status: 'Ready' },
      { name: 'Kuwaiti Kandura', qty: 1, price: 600, status: 'Sewing', assignedTo: 'Bob (Son)' }
    ], total: 3100, date: '2025-03-15', paid: true },
    { id: 'A2025-0036', client: 'MR. ASUMA', mobile: '050 333 2211', items: [
      { name: 'Arabic Kandura', qty: 2, price: 500, status: 'Cutting' }
    ], total: 1200, date: '2025-04-01', paid: false }
  ],
  fabrics: [
    { id: 1, type: 'Premium 01', code: 'P01-A1', color: 'White', category: 'Kandura', date: '2025-01-10' },
    { id: 2, type: 'Silk 02', code: 'S02-B3', color: 'Cream', category: 'Jalabiya', date: '2025-02-15' },
    { id: 3, type: 'Cotton 03', code: 'C03-D2', color: 'Beige', category: 'Mugasr', date: '2025-03-20' }
  ],
  inventoryItems: [
    { id: 1, name: 'Classic Sandal', code: 'AN-S12', type: 'Sandal', color: 'White', sizes: [38,39,40,41,42], qty: 24, price: 150 },
    { id: 2, name: 'Sport Sandal', code: 'AN-S54', type: 'Sandal', color: 'Brown', sizes: [39,40,41,42,43], qty: 18, price: 180 },
    { id: 3, name: 'Premium Sandal', code: 'AN-S87', type: 'Sandal', color: 'Black', sizes: [38,39,40,41,42,43], qty: 15, price: 220 },
    { id: 4, name: 'Luxury Sandal', code: 'AN-S74', type: 'Sandal', color: 'Tan', sizes: [39,40,41,42], qty: 10, price: 280 },
    { id: 5, name: 'Formal Jacket', code: 'AN-J01', type: 'Jacket', color: 'Black', sizes: [38,40,42,44], qty: 12, price: 350 },
    { id: 6, name: 'Casual Jacket', code: 'AN-J02', type: 'Jacket', color: 'Navy', sizes: [38,40,42,44], qty: 8, price: 300 },
    { id: 7, name: 'Shemagh', code: 'AN-G46', type: 'Accessory', color: 'Red/White', sizes: [48,50,52,54], qty: 50, price: 45 },
    { id: 8, name: 'Ghutra White', code: 'AN-G71', type: 'Accessory', color: 'White', sizes: [48,50,52,54], qty: 60, price: 35 },
    { id: 9, name: 'Ghutra Red', code: 'AN-G44', type: 'Accessory', color: 'Red', sizes: [48,50,52,54], qty: 30, price: 40 },
    { id: 10, name: 'Agal', code: 'AN-G45', type: 'Accessory', color: 'Black', sizes: ['Standard'], qty: 100, price: 25 },
    { id: 11, name: 'Classic Head Dress', code: 'AN-H01', type: 'HeadDress', color: 'White', sizes: [36,37,38,39,40], qty: 20, price: 55 },
    { id: 12, name: 'Embroidered Head Dress', code: 'AN-H02', type: 'HeadDress', color: 'Cream', sizes: [36,37,38,39,40], qty: 15, price: 75 }
  ],
  tailors: [
    { id: 1, name: 'Azaad', phone: '+971 50 111 2233', specialty: 'Arabic Kandura' },
    { id: 2, name: 'Raju', phone: '+971 50 444 5566', specialty: 'Kuwaiti Kandura' },
    { id: 3, name: 'Bilal', phone: '+971 50 777 8899', specialty: 'Jalabiya' }
  ],
  deliveries: [
    { id: 1, orderNum: 'A2025-0035', pickup: 'Al Wathba Factory', dropoff: 'Alnubras Shop', items: '3 pcs Kandura', client: 'Mr. Radwan', phone: '050 555 5522', status: 'Pending', paymentStatus: 'Fully Paid', date: '2025-03-20' },
    { id: 2, orderNum: 'A2025-0036', pickup: 'Mussafa Mall', dropoff: 'Abu Dhabi Branch', items: '2 pcs Kandura', client: 'Mr. Asuma', phone: '050 333 2211', status: 'In Transit', paymentStatus: 'Payment Pending', date: '2025-04-05' }
  ],
  pendingOrders: [
    { id: 'P001', client: 'MR. ASUMA SARUTOBI', mobile: '050 111 2233', items: 2, lastUpdated: '2025-03-10' },
    { id: 'P002', client: 'NICO ROBIN', mobile: '050 444 5566', items: 1, lastUpdated: '2025-03-12' }
  ],
  paymentMode: 'CARD',
  selectedKanduraStyle: 'Arabic',
  cashTurnover: 2450,
  orderCounter: 37,
  outflow: [
    { type: 'Jacket', orderNum: 'A2025-0030', qty: 2, date: '2025-02-10' },
    { type: 'Sandals', orderNum: 'A2025-0032', qty: 4, date: '2025-02-18' },
    { type: 'Kandura Fabric', orderNum: 'A2025-0035', qty: 5, date: '2025-03-15' }
  ]
};

// ---- Helpers ----
function $(id) { return document.getElementById(id); }
function formatCurrency(n) { return parseFloat(n).toFixed(2) + ' AED'; }
function genOrderNum() { state.orderCounter++; return 'A2025-' + String(state.orderCounter).padStart(4, '0'); }

function showToast(msg) {
  const c = $('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('show'); }, 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

function showModal(title, bodyHtml, onConfirm) {
  const ov = $('modal-overlay');
  const card = $('modal-card');
  card.innerHTML = '<div class="modal-header"><h3>' + title + '</h3><span class="modal-close" onclick="closeModal()">' + ICO.close + '</span></div><div class="modal-body">' + bodyHtml + '</div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">CANCEL</button><button class="btn" id="modal-confirm-btn">CONFIRM</button></div>';
  ov.style.display = 'flex';
  if (onConfirm) $('modal-confirm-btn').onclick = function() { onConfirm(); closeModal(); };
}
function closeModal() { $('modal-overlay').style.display = 'none'; }

function topNav(backView, backLabel, rightHtml) {
  return '<div class="top-nav"><div class="back-btn" onclick="navigate(\'' + backView + '\')">' + ICO.back + ' ' + backLabel + '</div>' + (rightHtml || '') + '</div>';
}
function salesPersonInfo() {
  return '<div style="text-align:right;font-size:0.8rem;font-weight:600;"><div>MOHAMMAD MOHAMMAD</div><div style="opacity:0.6">SALES PERSON</div></div>';
}

function statusBadge(s) {
  var cls = 'status-badge ';
  var sl = s.toLowerCase();
  if (sl === 'ready' || sl === 'delivered' || sl === 'fully paid' || sl === 'finished') cls += 'status-ready';
  else if (sl === 'sewing' || sl === 'in transit') cls += 'status-sewing';
  else if (sl === 'pending' || sl === 'payment pending') cls += 'status-pending';
  else if (sl === 'started' || sl === 'cutting' || sl === 'measured') cls += 'status-started';
  else cls += 'status-started';
  return '<span class="' + cls + '">' + s + '</span>';
}

// ---- Router ----
function navigate(viewName) {
  var appEl = $('app');
  appEl.innerHTML = '';
  $('app-container').scrollTop = 0;
  if (views[viewName]) views[viewName]();
  else views.login();
}

// ---- VIEWS ----
var views = {};

// 1. Login
views.login = function() {
  $('app').innerHTML = '<div class="view">' +
    '<div class="logo-container" style="margin-top:60px"><h2>النبراس</h2><h1>AL NUBRAS</h1></div>' +
    '<div style="margin-top:40px">' +
    '<input type="text" class="input-field" placeholder="USERNAME" id="f-user">' +
    '<input type="password" class="input-field" placeholder="PASSWORD" id="f-pass">' +
    '<button class="btn" onclick="navigate(\'adminHub\')">LOG IN</button>' +
    '<div style="text-align:center;margin-top:15px"><span style="opacity:0.6;cursor:pointer;text-decoration:underline" onclick="showToast(\'Contact your administrator\')">FORGOT PASSWORD</span></div>' +
    '</div></div>';
};

// 2. Admin Hub
views.adminHub = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('login', 'LOG OUT') +
    '<div class="hub-title">WELCOME MR. ADMIN</div>' +
    '<div class="grid-menu">' +
    gridItem('salesHub', ICO.dollar, 'Sales') +
    gridItem('manufacturingHub', ICO.mfg, 'Manufacturing') +
    gridItem('inventoryHub', ICO.box, 'Inventory') +
    gridItem('deliveryHub', ICO.truck, 'Delivery') +
    gridItem(null, ICO.megaphone, 'Marketing', "showToast('Marketing module coming soon')") +
    gridItem('accountantHub', ICO.user, 'Finance') +
    '</div></div>';
};
function gridItem(view, icon, label, customClick) {
  var click = customClick ? customClick : "navigate('" + view + "')";
  return '<div class="grid-item" onclick="' + click + '"><div class="grid-icon">' + icon + '</div><div class="grid-label">' + label + '</div></div>';
}

// 3. Sales Hub
views.salesHub = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('adminHub', 'EXIT') +
    '<div class="hub-title">WELCOME MR. SALES GUY</div>' +
    '<div class="grid-menu">' +
    gridItem('createSales', ICO.dollar, 'Create Sales') +
    gridItem('salesOperations', ICO.mfg, 'Sales Operations') +
    gridItem('salesPending', ICO.box, 'Sales Pending') +
    gridItem('orderHistory', ICO.truck, 'Order History') +
    '</div></div>';
};

// 4. Create Sales
views.createSales = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('salesHub', 'EXIT', salesPersonInfo()) +
    '<div style="text-align:center;margin:30px 0"><div style="width:100px;height:100px;border-radius:50%;background:var(--color-primary);margin:0 auto;display:flex;align-items:center;justify-content:center;color:white">' + ICO.dollar + '</div></div>' +
    '<div class="hub-title" style="font-size:1.6rem">SALES</div>' +
    '<input type="text" class="input-field" placeholder="MOBILE NUMBER" id="f-mobile" value="' + state.client.mobile + '">' +
    '<input type="text" class="input-field" placeholder="CLIENT NAME" id="f-name" value="' + state.client.name + '">' +
    '<button class="btn" onclick="state.client.mobile=$$(\'f-mobile\').value||\'050 555 5522\';state.client.name=$$(\'f-name\').value||\'MR. RADWAN\';navigate(\'orderCategory\')">START / CREATE</button>' +
    '</div>';
};
function $$(id) { return document.getElementById(id); }

// 5. Order Category
views.orderCategory = function() {
  var badge = state.cart.length > 0 ? '<span class="cart-badge">' + state.cart.length + '</span>' : '';
  $('app').innerHTML = '<div class="view">' +
    topNav('createSales', 'EXIT', salesPersonInfo()) +
    '<div style="margin-bottom:15px"><div style="opacity:0.6;font-size:0.8rem">ORDERING FOR:</div><div style="font-weight:600;font-size:1.1rem">' + (state.client.name || 'MR. RADWAN') + '</div><div>' + (state.client.mobile || '050 555 5522') + '</div><div>' + state.client.location + '</div></div>' +
    '<div class="logo-container" style="margin:15px 0"><h2 style="font-size:1.8rem">النبراس</h2><h1 style="font-size:1.6rem">AL NUBRAS</h1></div>' +
    catItem('kanduraDetails', 'KANDURA') +
    catItem('underGarmentsGrid', 'UNDER GARMENTS') +
    catItem('jacketGrid', 'JACKET') +
    catItem('headDressGrid', 'HEAD DRESS') +
    catItem('sandalGrid', 'SANDAL') +
    '<div class="category-item" onclick="showToast(\'Customize order coming soon\')"><span class="category-label">CUSTOMIZE ORDER</span><div class="category-icon">' + ICO.shirt + '</div></div>' +
    '<div style="display:flex;gap:10px;margin-top:15px">' +
    '<div class="category-item" style="flex:1;justify-content:center" onclick="navigate(\'orderTracker\')"><span class="category-label" style="font-size:0.8rem">TRACK ORDERS</span></div>' +
    '<div class="category-item" style="flex:1;justify-content:center" onclick="navigate(\'orderHistory\')"><span class="category-label" style="font-size:0.8rem">ORDER RECORDS</span></div>' +
    '</div>' +
    '<div class="bottom-cart-container"><div class="cart-btn" onclick="navigate(\'cartView\')">' + badge + 'VIEW CART <div class="icon">' + ICO.cart + '</div></div></div>' +
    '</div>';
};
function catItem(view, label) {
  return '<div class="category-item" onclick="navigate(\'' + view + '\')"><span class="category-label">' + label + '</span><div class="category-icon">' + ICO.shirt + '</div></div>';
}

// 6. Kandura Details
views.kanduraDetails = function() {
  var styles = ['Arabic', 'Kuwaiti', 'Jalabiya', 'Mugasar'];
  var tabs = styles.map(function(s) {
    var cls = s === state.selectedKanduraStyle ? 'tab active' : 'tab';
    return '<div class="' + cls + '" onclick="state.selectedKanduraStyle=\'' + s + '\';navigate(\'kanduraDetails\')">' + s + '</div>';
  }).join('');

  $('app').innerHTML = '<div class="view">' +
    topNav('orderCategory', 'BACK', salesPersonInfo()) +
    '<div class="hub-title">KANDURA CUSTOMIZATION</div>' +
    '<div class="tab-group">' + tabs + '</div>' +
    '<div class="kandura-schematic"><div style="font-weight:600;margin-bottom:10px">' + state.selectedKanduraStyle + ' Kandura Measurements</div>' +
    '<div class="measurement-grid">' +
    mField('Length', '61 1/4') + mField('Back Length', '61') + mField('Shoulder', '17 3/4') + mField('Arm Length', '25 3/4') +
    mField('Cuff Width', '6') + mField('Waist', '23') + mField('Chest', '34') + mField('Hip', '32') + mField('Bottom Width', '31') +
    '</div></div>' +
    '<div style="font-weight:600;margin:10px 0">Fabric Selection</div>' +
    '<div class="row-inputs"><input class="input-field" placeholder="Fabric Type" id="f-ftype" value="Premium 01"><input class="input-field" placeholder="Color" id="f-fcolor" value="A1"></div>' +
    '<div class="row-inputs"><input class="input-field" placeholder="Code" value="P01-A1" disabled><select class="input-field" id="f-assignee"><option>Self</option><option>Bob (Son)</option><option>Ahmed (Brother)</option></select></div>' +
    '<div style="font-weight:600;margin:10px 0">Quick Add</div>' +
    '<div style="display:flex;gap:10px;margin-bottom:10px"><label><input type="checkbox" id="chk-shirt"> Shirts (Size M)</label><label><input type="checkbox" id="chk-wizar"> Wizars (Size L)</label></div>' +
    '<div style="font-weight:600;margin:10px 0">Notes</div>' +
    '<textarea class="input-field" id="f-notes" style="border-radius:15px;text-align:left;min-height:60px" placeholder="Special instructions...">Customer wants double stitching on the back. Tarbush @ 22 inches.</textarea>' +
    '<div class="row-inputs" style="margin-top:10px"><input type="number" class="input-field" id="f-kqty" value="3" min="1"><button class="btn" onclick="addKanduraToCart()">ADD TO CART</button></div>' +
    '</div>';
};
function mField(label, val) {
  return '<div class="measurement-field"><label>' + label + '</label><input class="input-field" value="' + val + '" style="margin-bottom:5px"></div>';
}
function addKanduraToCart() {
  var qty = parseInt($$('f-kqty').value) || 1;
  var style = state.selectedKanduraStyle;
  state.cart.push({ name: style + ' Kandura', qty: qty, price: 500, size: '-', color: $$('f-fcolor').value });
  if ($$('chk-shirt') && $$('chk-shirt').checked) state.cart.push({ name: 'Shirts (M)', qty: qty, price: 40, size: 'M', color: 'White' });
  if ($$('chk-wizar') && $$('chk-wizar').checked) state.cart.push({ name: 'Wizars (L)', qty: qty, price: 30, size: 'L', color: 'White' });
  showToast('Added to cart!');
  navigate('orderCategory');
}

// 7-11. Product Grids
function renderProductGrid(title, type, backView) {
  var items = state.inventoryItems.filter(function(i) { return i.type === type; });
  var cards = items.map(function(item) {
    return '<div class="product-card" onclick="showProductDetail(' + item.id + ',\'' + backView + '\')">' +
      '<div class="product-img">' + item.code + '</div>' +
      '<div class="product-card-name">' + item.name + '</div>' +
      '<div class="product-card-price">' + formatCurrency(item.price) + '</div></div>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('orderCategory', 'BACK') +
    '<div class="hub-title">' + title + '</div>' +
    '<div class="product-grid">' + cards + '</div>' +
    '<div class="bottom-cart-container"><div class="cart-btn" onclick="navigate(\'cartView\')">VIEW CART <div class="icon">' + ICO.cart + '</div></div></div>' +
    '</div>';
}
views.sandalGrid = function() { renderProductGrid('SANDALS', 'Sandal', 'sandalGrid'); };
views.jacketGrid = function() { renderProductGrid('JACKETS', 'Jacket', 'jacketGrid'); };
views.underGarmentsGrid = function() { renderProductGrid('UNDER GARMENTS', 'Accessory', 'underGarmentsGrid'); };
views.headDressGrid = function() { renderProductGrid('HEAD DRESS', 'HeadDress', 'headDressGrid'); };

// 12. Product Detail
var _detailBack = 'orderCategory';
function showProductDetail(itemId, backView) {
  _detailBack = backView || 'orderCategory';
  state._detailItem = itemId;
  navigate('productDetail');
}
views.productDetail = function() {
  var item = state.inventoryItems.find(function(i) { return i.id === state._detailItem; });
  if (!item) { navigate('orderCategory'); return; }
  var colors = ['White', 'Brown', 'Black', 'Tan', 'Red'];
  var swatches = colors.map(function(c) {
    return '<div class="color-swatch" style="background:' + c.toLowerCase() + ';border:2px solid ' + (c === item.color ? 'var(--color-primary)' : '#ccc') + '" onclick="this.parentElement.querySelectorAll(\'.color-swatch\').forEach(function(s){s.style.borderColor=\'#ccc\'});this.style.borderColor=\'var(--color-primary)\'"></div>';
  }).join('');
  var sizes = (item.sizes || [36,37,38,39,40,41,42,43]).map(function(s) {
    return '<button class="size-btn" onclick="this.parentElement.querySelectorAll(\'.size-btn\').forEach(function(b){b.classList.remove(\'active\')});this.classList.add(\'active\')">' + s + '</button>';
  }).join('');

  $('app').innerHTML = '<div class="view">' +
    topNav(_detailBack, 'BACK') +
    '<div class="product-detail-img">' + item.code + '<br>' + item.name + '</div>' +
    '<div style="font-weight:600;margin:10px 0">COLOR</div>' +
    '<div class="color-swatches">' + swatches + '</div>' +
    '<div style="font-weight:600;margin:10px 0">SIZE</div>' +
    '<div class="size-selector">' + sizes + '</div>' +
    '<div style="font-weight:600;margin:10px 0">QUANTITY</div>' +
    '<div class="qty-selector"><button class="qty-btn" onclick="var e=$$(\'qty-val\');var v=parseInt(e.textContent);if(v>1)e.textContent=v-1">−</button><span id="qty-val">1</span><button class="qty-btn" onclick="var e=$$(\'qty-val\');e.textContent=parseInt(e.textContent)+1">+</button></div>' +
    '<div style="text-align:center;font-size:1.3rem;font-weight:600;margin:15px 0">' + formatCurrency(item.price) + '</div>' +
    '<button class="btn" onclick="addProductToCart(' + item.id + ')">ADD TO CART</button>' +
    '</div>';
};
function addProductToCart(itemId) {
  var item = state.inventoryItems.find(function(i) { return i.id === itemId; });
  if (!item) return;
  var qty = parseInt($$('qty-val').textContent) || 1;
  var selSize = document.querySelector('.size-btn.active');
  state.cart.push({ name: item.name, qty: qty, price: item.price, size: selSize ? selSize.textContent : '-', color: item.color });
  showToast(item.name + ' added to cart!');
  navigate('orderCategory');
}

// 13. Cart
views.cartView = function() {
  var rows = state.cart.map(function(item, i) {
    return '<tr><td>' + item.name + '</td><td>' + item.qty + '</td><td>' + item.price + '</td><td>' + (item.qty * item.price) + '</td><td><span style="color:#e74c3c;cursor:pointer" onclick="state.cart.splice(' + i + ',1);navigate(\'cartView\')">✕</span></td></tr>';
  }).join('');
  if (state.cart.length === 0) rows = '<tr><td colspan="5" style="text-align:center;opacity:0.5">Cart is empty</td></tr>';
  var subtotal = state.cart.reduce(function(s, i) { return s + i.qty * i.price; }, 0);

  $('app').innerHTML = '<div class="view">' +
    topNav('orderCategory', 'BACK TO SHOP') +
    '<div class="hub-title">CART</div>' +
    '<table class="data-table"><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th><th></th></tr>' + rows + '</table>' +
    '<div class="invoice-box" style="margin-top:15px">' +
    '<div class="total-row"><span>SUBTOTAL</span><span>' + subtotal + '</span></div>' +
    '<div class="total-row"><span>DISCOUNT</span><span><input type="number" id="f-disc" value="0" style="width:60px;text-align:right;border:1px solid #ccc;border-radius:8px;padding:3px"></span></div>' +
    '<div class="total-row"><span>DELIVERY</span><span><input type="number" id="f-deliv" value="100" style="width:60px;text-align:right;border:1px solid #ccc;border-radius:8px;padding:3px"></span></div>' +
    '<hr style="margin:10px 0;border:none;border-top:1px solid var(--color-primary)">' +
    '<div class="total-row" style="font-size:1.2rem"><span>NET TOTAL</span><span id="net-total">' + (subtotal + 100) + ' AED</span></div>' +
    '</div>' +
    '<button class="btn" style="margin-top:15px" onclick="' + (subtotal > 0 ? "navigate('checkoutView')" : "showToast('Cart is empty')") + '">CHECKOUT</button>' +
    '</div>';
};

// 14. Checkout
views.checkoutView = function() {
  var subtotal = state.cart.reduce(function(s, i) { return s + i.qty * i.price; }, 0);
  var vat = (subtotal * 0.05).toFixed(2);
  var total = (subtotal + parseFloat(vat) + 100).toFixed(2);
  var orderNum = genOrderNum();
  state._currentOrderNum = orderNum;
  state._currentTotal = total;

  $('app').innerHTML = '<div class="view">' +
    topNav('cartView', 'BACK') +
    '<div class="hub-title">CHECK OUT</div>' +
    '<div style="text-align:center;font-weight:600;margin-bottom:15px">ORDER NUMBER: ' + orderNum + '</div>' +
    '<div class="invoice-box">' +
    '<div class="total-row"><span>SUBTOTAL</span><span>' + subtotal + '</span></div>' +
    '<div class="total-row"><span>5% VAT</span><span>' + vat + '</span></div>' +
    '<div class="total-row"><span>DELIVERY</span><span>100</span></div>' +
    '<hr style="margin:10px 0;border:none;border-top:1px solid var(--color-primary)">' +
    '<div class="total-row" style="font-size:1.3rem"><span>TOTAL</span><span>' + total + ' AED</span></div>' +
    '</div>' +
    '<button class="btn" style="margin-top:20px" onclick="navigate(\'invoiceView\')">PROCEED TO PAYMENT</button>' +
    '</div>';
};

// 15. Invoice
views.invoiceView = function() {
  var total = parseFloat(state._currentTotal) || 0;
  var modes = ['CARD', 'CASH', 'ONLINE'];
  var tabs = modes.map(function(m) {
    var cls = m === state.paymentMode ? 'payment-btn active' : 'payment-btn';
    return '<div class="' + cls + '" onclick="state.paymentMode=\'' + m + '\';navigate(\'invoiceView\')">' + m + '</div>';
  }).join('');

  var payContent = '';
  if (state.paymentMode === 'CARD') {
    payContent = '<button class="btn" style="margin-top:10px" onclick="showToast(\'Sent to card reader\')">SEND TO CARD READER</button>';
  } else if (state.paymentMode === 'CASH') {
    payContent = '<input type="number" class="input-field" placeholder="CASH RECEIVED" id="f-cashrcv" oninput="var c=parseFloat(this.value)||0;$$(\'change-back\').textContent=(c-' + total + ').toFixed(2)">' +
      '<div class="total-row"><span>CHANGE BACK:</span><span id="change-back">0.00</span></div>';
  } else {
    payContent = '<button class="btn" onclick="navigator.clipboard&&navigator.clipboard.writeText(\'https://pay.alnubras.ae/inv/' + (state._currentOrderNum || '') + '\');showToast(\'Link copied!\')">COPY PAYMENT LINK</button>' +
      '<button class="btn" style="background:#25D366;margin-top:5px" onclick="showToast(\'WhatsApp link sent!\')">' + ICO.whatsapp + ' SEND VIA WHATSAPP</button>';
  }

  $('app').innerHTML = '<div class="view" style="background:white">' +
    topNav('checkoutView', 'BACK') +
    '<div class="hub-title">TAX INVOICE</div>' +
    '<div style="text-align:center;font-size:0.8rem;margin-bottom:15px">INV: 0055005544891321</div>' +
    '<div class="payment-modes">' + tabs + '</div>' +
    '<div class="invoice-box" style="box-shadow:none;border:1px dashed var(--color-primary)">' +
    '<div class="total-row"><span>ADVANCE PAYMENT:</span><span><input type="number" id="f-advance" value="0" style="width:80px;text-align:right;border:1px solid #ccc;border-radius:8px;padding:3px" oninput="$$(\'amt-due\').textContent=(' + total + '-parseFloat(this.value||0)).toFixed(2)"></span></div>' +
    '<div class="total-row"><span>AMOUNT TO BE PAID:</span><span id="amt-due">' + total.toFixed(2) + '</span></div>' +
    '<hr style="margin:10px 0;border:none;border-top:1px solid var(--color-primary)">' +
    '<div class="total-row" style="font-size:1.3rem"><span>TOTAL</span><span>' + total.toFixed(2) + ' AED</span></div>' +
    '</div>' +
    payContent +
    '<div style="margin-top:auto">' +
    '<button class="btn" onclick="completeOrder()">UPDATE SALE / COMPLETE</button>' +
    '<button class="btn btn-secondary" onclick="window.print()" style="margin-top:5px">' + ICO.print + ' PRINT INVOICE</button>' +
    '</div></div>';
};
function completeOrder() {
  var orderItems = state.cart.map(function(c) { return { name: c.name, qty: c.qty, price: c.price, status: 'Measured' }; });
  state.orders.push({ id: state._currentOrderNum, client: state.client.name, mobile: state.client.mobile, items: orderItems, total: parseFloat(state._currentTotal), date: new Date().toISOString().slice(0, 10), paid: true });
  state.cart = [];
  showToast('Order ' + state._currentOrderNum + ' completed!');
  navigate('salesHub');
}

// 16. Order Tracker
views.orderTracker = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('orderCategory', 'BACK') +
    '<div class="hub-title">TRACK ORDER</div>' +
    '<div class="search-bar"><input class="input-field" placeholder="SEARCH ORDER NUMBER..." id="f-search" style="margin-bottom:0"><button class="btn" style="width:auto;padding:12px 20px" onclick="searchOrder()">SEARCH</button></div>' +
    '<div id="tracker-result">' + renderTrackerResults() + '</div></div>';
};
function renderTrackerResults() {
  return state.orders.map(function(o) {
    var steps = ['Measured', 'Cutting', 'Sewing', 'Ready', 'Out for Delivery', 'Delivered'];
    return o.items.map(function(item) {
      var activeIdx = steps.indexOf(item.status);
      if (activeIdx < 0) activeIdx = 0;
      var dots = steps.map(function(s, i) {
        var cls = i <= activeIdx ? 'tracker-step active' : 'tracker-step';
        return '<div class="' + cls + '"><div class="tracker-dot"></div><div class="tracker-label">' + s + '</div></div>';
      }).join('');
      return '<div style="margin:15px 0;padding:15px;background:white;border-radius:15px"><div style="font-weight:600;margin-bottom:5px">' + o.id + ' — ' + item.name + (item.assignedTo ? ' (' + item.assignedTo + ')' : '') + '</div><div class="tracker-bar">' + dots + '</div></div>';
    }).join('');
  }).join('');
}
function searchOrder() {
  var q = $$('f-search').value.toUpperCase();
  var filtered = state.orders.filter(function(o) { return o.id.toUpperCase().indexOf(q) >= 0 || o.client.toUpperCase().indexOf(q) >= 0; });
  var steps = ['Measured', 'Cutting', 'Sewing', 'Ready', 'Out for Delivery', 'Delivered'];
  var html = filtered.map(function(o) {
    return o.items.map(function(item) {
      var activeIdx = steps.indexOf(item.status);
      if (activeIdx < 0) activeIdx = 0;
      var dots = steps.map(function(s, i) {
        var cls = i <= activeIdx ? 'tracker-step active' : 'tracker-step';
        return '<div class="' + cls + '"><div class="tracker-dot"></div><div class="tracker-label">' + s + '</div></div>';
      }).join('');
      return '<div style="margin:15px 0;padding:15px;background:white;border-radius:15px"><div style="font-weight:600;margin-bottom:5px">' + o.id + ' — ' + item.name + '</div><div class="tracker-bar">' + dots + '</div></div>';
    }).join('');
  }).join('');
  if (!html) html = '<div style="text-align:center;opacity:0.5;margin-top:30px">No orders found</div>';
  $$('tracker-result').innerHTML = html;
}

// 17. Order History
views.orderHistory = function() {
  var rows = state.orders.map(function(o) {
    var warn = o.paid ? ICO.check : ICO.warning;
    return '<tr onclick="state._viewOrder=\'' + o.id + '\';navigate(\'orderDetailView\')" style="cursor:pointer"><td>' + o.id + '</td><td>' + o.client + '</td><td>' + o.date + '</td><td>' + o.total + '</td><td>' + warn + '</td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('salesHub', 'BACK') +
    '<div class="hub-title">ORDER HISTORY</div>' +
    '<table class="data-table"><tr><th>Order</th><th>Client</th><th>Date</th><th>Total</th><th></th></tr>' + rows + '</table></div>';
};

// 18. Order Detail
views.orderDetailView = function() {
  var o = state.orders.find(function(x) { return x.id === state._viewOrder; });
  if (!o) { navigate('orderHistory'); return; }
  var itemRows = o.items.map(function(it) {
    return '<tr><td>' + it.name + '</td><td>' + it.qty + '</td><td>' + it.price + '</td><td>' + statusBadge(it.status) + '</td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('orderHistory', 'BACK') +
    '<div class="hub-title">ORDER ' + o.id + '</div>' +
    '<div style="margin-bottom:10px"><strong>Client:</strong> ' + o.client + '<br><strong>Mobile:</strong> ' + o.mobile + '<br><strong>Date:</strong> ' + o.date + '<br><strong>Total:</strong> ' + formatCurrency(o.total) + '<br><strong>Paid:</strong> ' + (o.paid ? 'Yes' : 'No') + '</div>' +
    '<table class="data-table"><tr><th>Item</th><th>Qty</th><th>Price</th><th>Status</th></tr>' + itemRows + '</table>' +
    '<div style="display:flex;gap:8px;margin-top:15px;flex-wrap:wrap">' +
    '<button class="btn" style="flex:1;font-size:0.8rem" onclick="showModal(\'File Complaint\',\'<textarea class=input-field placeholder=Describe\\ issue... style=min-height:80px;border-radius:15px;text-align:left></textarea>\',function(){showToast(\\\'Complaint filed!\\\')})">FILE COMPLAINT</button>' +
    '<button class="btn" style="flex:1;font-size:0.8rem" onclick="showModal(\'Return to Inventory\',\'<p>Return items from order ' + o.id + ' to inventory?</p>\',function(){showToast(\\\'Items returned!\\\')})">RETURN TO INVENTORY</button>' +
    '<button class="btn" style="flex:1;font-size:0.8rem" onclick="showModal(\'Request Return Sale\',\'<p>Request refund for order ' + o.id + '?</p>\',function(){showToast(\\\'Return requested!\\\')})">REQUEST RETURN</button>' +
    '</div></div>';
};

// 19. Sales Operations
views.salesOperations = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('salesHub', 'BACK') +
    '<div class="hub-title">SALES OPERATIONS</div>' +
    '<div class="warning-box"><strong>⚠ CASH TURNOVER REQUIRED</strong><p>Please turnover the amount to the cashier within 24 hours.</p></div>' +
    '<div class="invoice-box" style="text-align:center;margin-top:15px"><div style="opacity:0.6">AMOUNT TO TURNOVER</div><div style="font-size:2rem;font-weight:600" id="turnover-amt">' + state.cashTurnover + ' AED</div></div>' +
    '<button class="btn" style="margin-top:15px" onclick="state.cashTurnover=0;$$(\'turnover-amt\').textContent=\'0 AED\';showToast(\'Cash turned over successfully!\')">TURNOVER</button>' +
    '<div style="margin-top:20px;font-weight:600">NOTIFICATIONS</div>' +
    '<div class="warning-box" style="margin-top:10px">⚠ Issue with Order #A2025-0036 — Payment pending from MR. ASUMA</div>' +
    '</div>';
};

// 20. Sales Pending
views.salesPending = function() {
  var cards = state.pendingOrders.map(function(p, i) {
    return '<div class="invoice-box" style="margin-top:10px"><div style="font-weight:600">' + p.client + '</div><div style="opacity:0.6;font-size:0.8rem">' + p.mobile + ' · ' + p.items + ' items · Last: ' + p.lastUpdated + '</div>' +
      '<div style="display:flex;gap:8px;margin-top:10px"><button class="btn" style="flex:1;font-size:0.85rem" onclick="state.client.name=\'' + p.client + '\';state.client.mobile=\'' + p.mobile + '\';navigate(\'orderCategory\')">CONTINUE</button><button class="btn btn-secondary" style="flex:1;font-size:0.85rem" onclick="state.pendingOrders.splice(' + i + ',1);navigate(\'salesPending\');showToast(\'Order cancelled\')">CANCEL</button></div></div>';
  }).join('');
  if (state.pendingOrders.length === 0) cards = '<div style="text-align:center;opacity:0.5;margin-top:30px">No pending orders</div>';
  $('app').innerHTML = '<div class="view">' +
    topNav('salesHub', 'BACK') +
    '<div class="hub-title">SALES PENDING</div>' + cards + '</div>';
};

// 21. Manufacturing Hub
views.manufacturingHub = function() {
  var rows = '';
  state.orders.forEach(function(o) {
    o.items.forEach(function(item) {
      rows += '<tr onclick="state._mfgOrder=\'' + o.id + '\';navigate(\'tailorAssignment\')" style="cursor:pointer"><td>' + o.id + '</td><td>' + item.name + '</td><td>' + item.qty + '</td><td>' + o.client + '</td><td>' + statusBadge(item.status) + '</td></tr>';
    });
  });
  $('app').innerHTML = '<div class="view">' +
    topNav('adminHub', 'EXIT') +
    '<div class="hub-title">CUTTING ORDERS</div>' +
    '<table class="data-table"><tr><th>Order</th><th>Item</th><th>Qty</th><th>Client</th><th>Status</th></tr>' + rows + '</table></div>';
};

// 22. Tailor Assignment
views.tailorAssignment = function() {
  var o = state.orders.find(function(x) { return x.id === state._mfgOrder; });
  if (!o) { navigate('manufacturingHub'); return; }
  var tailorOpts = state.tailors.map(function(t) { return '<option value="' + t.id + '">' + t.name + ' — ' + t.specialty + '</option>'; }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('manufacturingHub', 'BACK') +
    '<div class="hub-title">TAILOR ASSIGNMENT</div>' +
    '<div class="invoice-box"><div style="font-weight:600">Order: ' + o.id + ' — ' + o.client + '</div><div style="margin-top:10px">' + o.items.map(function(i) { return i.name + ' x' + i.qty + ' (' + statusBadge(i.status) + ')'; }).join('<br>') + '</div></div>' +
    '<div class="warning-box" style="margin-top:15px">⚠ Need 1 more tailor to start order</div>' +
    '<div style="margin-top:15px"><div style="font-weight:600;margin-bottom:8px">Assign Tailor</div><select class="input-field" id="f-tailor">' + tailorOpts + '</select></div>' +
    '<button class="btn" onclick="showToast(\'Tailor assigned! Order started.\')">START ORDER</button>' +
    '<button class="btn" style="background:#25D366;margin-top:5px" onclick="showWhatsAppMsg()">SEND WHATSAPP ' + ICO.whatsapp + '</button>' +
    '</div>';
};
function showWhatsAppMsg() {
  var o = state.orders.find(function(x) { return x.id === state._mfgOrder; });
  if (!o) return;
  var msg = 'Requesting Update on ORDER# ' + o.id + ' for ' + o.client + ' ' + o.items.map(function(i) { return i.qty + 'pcs ' + i.name; }).join(', ');
  showModal('WhatsApp Message', '<div style="background:#DCF8C6;padding:15px;border-radius:15px;font-size:0.9rem">' + msg + '</div><p style="margin-top:10px;opacity:0.6">Message will be sent to assigned tailor</p>', function() { showToast('Message sent!'); });
}

// 23-25. Delivery Hub
views.deliveryHub = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('adminHub', 'EXIT') +
    '<div class="hub-title">WELCOME MR. DELIVERY</div>' +
    '<div class="grid-menu">' +
    gridItem('deliveryList', ICO.truck, 'Delivery List') +
    gridItem('deliveryOperations', ICO.box, 'Delivery Operations') +
    '</div></div>';
};
views.deliveryList = function() {
  var rows = state.deliveries.map(function(d) {
    return '<tr><td>' + d.date + '</td><td>' + d.pickup + '</td><td>' + d.dropoff + '</td><td>' + d.items + '</td><td>' + d.client + '<br><span style="font-size:0.75rem;opacity:0.6">' + d.phone + '</span></td><td>' + statusBadge(d.paymentStatus) + '</td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('deliveryHub', 'BACK') +
    '<div class="hub-title">DELIVERY REQUESTS</div>' +
    '<table class="data-table"><tr><th>Date</th><th>Pick-Up</th><th>Drop-Off</th><th>Items</th><th>Client</th><th>Payment</th></tr>' + rows + '</table></div>';
};
views.deliveryOperations = function() {
  var cards = state.deliveries.map(function(d) {
    var action = d.status === 'Pending' ? '<button class="btn" style="font-size:0.8rem" onclick="showToast(\'Proceeding to pick-up\')">PROCEED TO PICK-UP</button>' : '<button class="btn" style="font-size:0.8rem" onclick="showToast(\'Proceeding to payment\')">PROCEED TO PAYMENT</button>';
    return '<div class="invoice-box" style="margin-top:10px"><div style="font-weight:600">' + d.orderNum + ' — ' + d.client + '</div><div style="opacity:0.6;font-size:0.8rem">' + d.pickup + ' → ' + d.dropoff + '</div><div style="margin-top:5px">' + d.items + ' · ' + statusBadge(d.paymentStatus) + '</div>' + action + '</div>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('deliveryHub', 'BACK') +
    '<div class="hub-title">DELIVERY OPERATIONS</div>' +
    '<div class="warning-box">⚠ Please turnover collected payments within 24 hours.</div>' + cards + '</div>';
};

// 26-30. Accountant Hub
views.accountantHub = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('adminHub', 'EXIT') +
    '<div class="hub-title">WELCOME MR. ACCOUNTANT</div>' +
    '<div class="grid-menu">' +
    gridItem('accountReceivables', ICO.dollar, 'Account Receivables') +
    gridItem('cashManagement', ICO.box, 'Cash Management') +
    gridItem('employeeRecords', ICO.user, 'Employee Records') +
    gridItem('financeReports', ICO.mfg, 'Finance Reports') +
    '</div></div>';
};
views.accountReceivables = function() {
  var rows = state.orders.map(function(o) {
    return '<tr><td>' + o.id + '</td><td>' + o.client + '</td><td>' + o.total + '</td><td>' + (o.paid ? statusBadge('Fully Paid') : statusBadge('Payment Pending')) + '</td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('accountantHub', 'BACK') +
    '<div class="hub-title">ACCOUNT RECEIVABLES</div>' +
    '<table class="data-table"><tr><th>Order</th><th>Client</th><th>Amount</th><th>Status</th></tr>' + rows + '</table></div>';
};
views.cashManagement = function() {
  var totalSales = state.orders.reduce(function(s, o) { return s + o.total; }, 0);
  $('app').innerHTML = '<div class="view">' +
    topNav('accountantHub', 'BACK') +
    '<div class="hub-title">CASH MANAGEMENT</div>' +
    '<div class="invoice-box"><div class="total-row"><span>TOTAL SALES</span><span>' + totalSales + ' AED</span></div><div class="total-row"><span>EXPENSES</span><span>1200 AED</span></div><hr style="margin:10px 0;border:none;border-top:1px solid var(--color-primary)"><div class="total-row" style="font-size:1.2rem"><span>BALANCE</span><span>' + (totalSales - 1200) + ' AED</span></div></div></div>';
};
views.employeeRecords = function() {
  var tailorRows = state.tailors.map(function(t) { return '<tr><td>' + t.name + '</td><td>' + t.phone + '</td><td>' + t.specialty + '</td></tr>'; }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('accountantHub', 'BACK') +
    '<div class="hub-title">EMPLOYEE RECORDS</div>' +
    '<div style="font-weight:600;margin-bottom:5px">TAILORS</div>' +
    '<table class="data-table"><tr><th>Name</th><th>Phone</th><th>Specialty</th></tr>' + tailorRows + '</table>' +
    '<div style="font-weight:600;margin:15px 0 5px">SALES STAFF</div>' +
    '<table class="data-table"><tr><th>Name</th><th>Phone</th><th>Role</th></tr><tr><td>Mohammad</td><td>+971 50 222 3344</td><td>Sales Person</td></tr></table></div>';
};
views.financeReports = function() {
  var totalSales = state.orders.reduce(function(s, o) { return s + o.total; }, 0);
  $('app').innerHTML = '<div class="view">' +
    topNav('accountantHub', 'BACK') +
    '<div class="hub-title">FINANCE REPORTS</div>' +
    '<div style="font-weight:600;margin-bottom:5px">SALES REPORT</div>' +
    '<div class="invoice-box"><div class="total-row"><span>Total Orders</span><span>' + state.orders.length + '</span></div><div class="total-row"><span>Total Revenue</span><span>' + totalSales + ' AED</span></div><div class="total-row"><span>Paid Orders</span><span>' + state.orders.filter(function(o) { return o.paid; }).length + '</span></div></div>' +
    '<div style="font-weight:600;margin:15px 0 5px">EXPENSE REPORT</div>' +
    '<div class="invoice-box"><div class="total-row"><span>Fabric Costs</span><span>800 AED</span></div><div class="total-row"><span>Labor Costs</span><span>400 AED</span></div><div class="total-row" style="font-weight:600"><span>Total Expenses</span><span>1200 AED</span></div></div></div>';
};

// 31-38. Inventory Hub
views.inventoryHub = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('adminHub', 'EXIT') +
    '<div class="hub-title">WELCOME MR. INVENTORY</div>' +
    '<div class="grid-menu">' +
    gridItem('inventoryOrders', ICO.box, 'View Orders') +
    gridItem('inventoryOutflow', ICO.truck, 'Outflow') +
    gridItem('addFabric', ICO.shirt, 'Add Fabric') +
    gridItem('manageFabric', ICO.mfg, 'Manage Fabric') +
    gridItem('addItemsMenu', ICO.dollar, 'Add Items') +
    gridItem('manageItems', ICO.box, 'Manage Items') +
    '</div></div>';
};
views.inventoryOrders = function() {
  var rows = '';
  state.orders.forEach(function(o) {
    o.items.forEach(function(item) {
      rows += '<tr><td>' + o.id + '</td><td>' + item.name + '</td><td>' + item.qty + '</td><td>' + statusBadge(item.status) + '</td></tr>';
    });
  });
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">VIEW ORDERS</div>' +
    '<table class="data-table"><tr><th>Order</th><th>Item</th><th>Qty</th><th>Status</th></tr>' + rows + '</table></div>';
};
views.inventoryOutflow = function() {
  var rows = state.outflow.map(function(o) {
    return '<tr><td>' + o.type + '</td><td>' + o.orderNum + '</td><td>' + o.qty + '</td><td>' + o.date + '</td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">INVENTORY OUTFLOW</div>' +
    '<table class="data-table"><tr><th>Item Type</th><th>Order #</th><th>Qty</th><th>Date</th></tr>' + rows + '</table>' +
    '<button class="btn btn-secondary" style="margin-top:10px" onclick="window.print()">' + ICO.print + ' PRINT</button></div>';
};
views.addFabric = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">ADD FABRIC</div>' +
    '<input class="input-field" placeholder="FABRIC TYPE" id="f-fabtype">' +
    '<input class="input-field" placeholder="SHOP CODE" id="f-fabcode">' +
    '<input class="input-field" placeholder="COLOR(S)" id="f-fabcolor">' +
    '<select class="input-field" id="f-fabcat"><option value="Kandura">Kandura</option><option value="Mugasr">Mugasr</option><option value="Jalabiya">Jalabiya</option></select>' +
    '<textarea class="input-field" placeholder="NOTES" id="f-fabnotes" style="border-radius:15px;text-align:left;min-height:60px"></textarea>' +
    '<button class="btn" onclick="saveFabric()">SAVE FABRIC</button></div>';
};
function saveFabric() {
  var t = $$('f-fabtype').value, c = $$('f-fabcode').value, co = $$('f-fabcolor').value, cat = $$('f-fabcat').value;
  if (!t) { showToast('Please enter fabric type'); return; }
  state.fabrics.push({ id: Date.now(), type: t, code: c || 'N/A', color: co || 'N/A', category: cat, date: new Date().toISOString().slice(0, 10) });
  showToast('Fabric added!');
  navigate('manageFabric');
}
views.manageFabric = function() {
  var rows = state.fabrics.map(function(f, i) {
    return '<tr><td>' + f.type + '</td><td>' + f.code + '</td><td>' + f.color + '</td><td>' + f.category + '</td><td>' + f.date + '</td><td><span style="cursor:pointer" onclick="state.fabrics.splice(' + i + ',1);navigate(\'manageFabric\');showToast(\'Deleted\')">' + ICO.del + '</span></td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">MANAGE FABRIC</div>' +
    '<table class="data-table"><tr><th>Type</th><th>Code</th><th>Color</th><th>Category</th><th>Date</th><th></th></tr>' + rows + '</table></div>';
};
views.addItemsMenu = function() {
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">ADD ITEMS</div>' +
    catItem2('addItemForm-Sandal', 'SANDALS') +
    catItem2('addItemForm-Jacket', 'JACKETS') +
    catItem2('addItemForm-Accessory', 'HEAD ACCESSORIES') +
    catItem2('addItemForm-HeadDress', 'UNDER GARMENTS') +
    '</div>';
};
function catItem2(view, label) {
  return '<div class="category-item" onclick="navigate(\'' + view + '\')"><span class="category-label">' + label + '</span><div class="category-icon">' + ICO.shirt + '</div></div>';
}

// Add Item Form (dynamic by type)
['Sandal', 'Jacket', 'Accessory', 'HeadDress'].forEach(function(type) {
  views['addItemForm-' + type] = function() {
    $('app').innerHTML = '<div class="view">' +
      topNav('addItemsMenu', 'BACK') +
      '<div class="hub-title">ADD ' + type.toUpperCase() + '</div>' +
      '<input class="input-field" placeholder="NAME" id="f-iname">' +
      '<div class="row-inputs"><input class="input-field" placeholder="COLOR" id="f-icolor"><input class="input-field" placeholder="CODE" id="f-icode"></div>' +
      '<div class="row-inputs"><input class="input-field" placeholder="SIZES (comma sep)" id="f-isizes" value="38,39,40,41,42"><input type="number" class="input-field" placeholder="QTY" id="f-iqty" value="10"></div>' +
      '<input type="number" class="input-field" placeholder="PRICE" id="f-iprice">' +
      '<textarea class="input-field" placeholder="DESCRIPTION" id="f-idesc" style="border-radius:15px;text-align:left;min-height:50px"></textarea>' +
      '<div class="product-detail-img" style="margin-bottom:15px">IMAGE PLACEHOLDER<br><span style="font-size:0.8rem;opacity:0.5">Upload feature coming soon</span></div>' +
      '<button class="btn" onclick="saveItem(\'' + type + '\')">SAVE ITEM</button></div>';
  };
});
function saveItem(type) {
  var name = $$('f-iname').value;
  if (!name) { showToast('Please enter item name'); return; }
  var sizes = $$('f-isizes').value.split(',').map(function(s) { return s.trim(); });
  state.inventoryItems.push({
    id: Date.now(), name: name, code: $$('f-icode').value || 'AN-NEW', type: type,
    color: $$('f-icolor').value || 'N/A', sizes: sizes, qty: parseInt($$('f-iqty').value) || 0, price: parseFloat($$('f-iprice').value) || 0
  });
  showToast(name + ' added!');
  navigate('manageItems');
}
views.manageItems = function() {
  var types = ['All', 'Sandal', 'Jacket', 'Accessory', 'HeadDress'];
  var filter = state._itemFilter || 'All';
  var tabs = types.map(function(t) {
    var cls = t === filter ? 'tab active' : 'tab';
    return '<div class="' + cls + '" onclick="state._itemFilter=\'' + t + '\';navigate(\'manageItems\')">' + t + '</div>';
  }).join('');
  var items = filter === 'All' ? state.inventoryItems : state.inventoryItems.filter(function(i) { return i.type === filter; });
  var rows = items.map(function(item, idx) {
    var realIdx = state.inventoryItems.indexOf(item);
    return '<tr><td>' + item.name + '</td><td>' + item.code + '</td><td>' + item.color + '</td><td>' + (item.sizes || []).join(', ') + '</td><td>' + item.qty + '</td><td>' + item.price + '</td><td><span style="cursor:pointer" onclick="state.inventoryItems.splice(' + realIdx + ',1);navigate(\'manageItems\');showToast(\'Deleted\')">' + ICO.del + '</span></td></tr>';
  }).join('');
  $('app').innerHTML = '<div class="view">' +
    topNav('inventoryHub', 'BACK') +
    '<div class="hub-title">MANAGE ITEMS</div>' +
    '<div class="tab-group">' + tabs + '</div>' +
    '<table class="data-table"><tr><th>Name</th><th>Code</th><th>Color</th><th>Sizes</th><th>Qty</th><th>Price</th><th></th></tr>' + rows + '</table></div>';
};

// ---- Init ----
navigate('login');
