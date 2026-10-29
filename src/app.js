// TemanUsaha - Logika Aplikasi & Asisten UMKM Indonesia

// ==================== DATA AWAL DEMO TOKO ====================
const DEFAULT_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Beras Pandan Wangi 5kg',
    category: 'Sembako',
    costPrice: 68000,
    sellPrice: 78000,
    stock: 5,
    minStock: 12,
    dailySalesAvg: 3.5,
    unit: 'karung'
  },
  {
    id: 'prod-2',
    name: 'Minyak Goreng Sawit 2L',
    category: 'Sembako',
    costPrice: 31000,
    sellPrice: 36000,
    stock: 3,
    minStock: 10,
    dailySalesAvg: 2.8,
    unit: 'pouch'
  },
  {
    id: 'prod-3',
    name: 'Telur Ayam Ras Segar 1kg',
    category: 'Sembako',
    costPrice: 26000,
    sellPrice: 29500,
    stock: 24,
    minStock: 10,
    dailySalesAvg: 6.0,
    unit: 'kg'
  },
  {
    id: 'prod-4',
    name: 'Gula Pasir Kristal 1kg',
    category: 'Sembako',
    costPrice: 16500,
    sellPrice: 18500,
    stock: 18,
    minStock: 8,
    dailySalesAvg: 3.0,
    unit: 'bungkus'
  },
  {
    id: 'prod-5',
    name: 'Kopi Kapal Api Sachet (Renceng)',
    category: 'Minuman',
    costPrice: 12000,
    sellPrice: 15000,
    stock: 35,
    minStock: 10,
    dailySalesAvg: 7.5,
    unit: 'renceng'
  },
  {
    id: 'prod-6',
    name: 'Mi Instan Goreng (Dus isi 40)',
    category: 'Makanan',
    costPrice: 108000,
    sellPrice: 122000,
    stock: 5,
    minStock: 4,
    dailySalesAvg: 1.2,
    unit: 'dus'
  },
  {
    id: 'prod-7',
    name: 'Saus Sambal Botol Jumbo 600ml',
    category: 'Bumbu',
    costPrice: 22000,
    sellPrice: 26000,
    stock: 19,
    minStock: 4,
    dailySalesAvg: 0.15,
    unit: 'botol'
  },
  {
    id: 'prod-8',
    name: 'Tepung Terigu Segitiga Biru 1kg',
    category: 'Bahan Kue',
    costPrice: 11500,
    sellPrice: 13500,
    stock: 14,
    minStock: 6,
    dailySalesAvg: 2.2,
    unit: 'kg'
  }
];

const DEFAULT_CUSTOMERS = [
  {
    id: 'cust-1',
    name: 'Bu Siti (Warung Nasi)',
    phone: '081234567891',
    debtAmount: 450000,
    dueDate: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0], // Besok
    notes: 'Beras 3 karung + telur 5kg'
  },
  {
    id: 'cust-2',
    name: 'Pak Hendro (Tetangga)',
    phone: '081987654321',
    debtAmount: 175000,
    dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 hari lagi
    notes: 'Minyak 2L + Kopi 3 renceng'
  },
  {
    id: 'cust-3',
    name: 'Bu Wahyu',
    phone: '085711223344',
    debtAmount: 85000,
    dueDate: new Date().toISOString().split('T')[0], // HARI INI
    notes: 'Gula 3kg + Tepung 2kg'
  }
];

const DEFAULT_TRANSACTIONS = [
  {
    id: 'trx-1',
    time: '07:45',
    type: 'sale',
    customer: 'Pembeli Langsung',
    items: [{ productId: 'prod-1', name: 'Beras Pandan Wangi 5kg', qty: 2, price: 78000, cost: 68000 }],
    totalAmount: 156000,
    totalCost: 136000,
    grossProfit: 20000,
    paymentMethod: 'cash',
    status: 'paid'
  },
  {
    id: 'trx-2',
    time: '09:15',
    type: 'sale',
    customer: 'Pembeli Langsung',
    items: [
      { productId: 'prod-3', name: 'Telur Ayam Ras Segar 1kg', qty: 2, price: 29500, cost: 26000 },
      { productId: 'prod-2', name: 'Minyak Goreng Sawit 2L', qty: 1, price: 36000, cost: 31000 }
    ],
    totalAmount: 95000,
    totalCost: 83000,
    grossProfit: 12000,
    paymentMethod: 'cash',
    status: 'paid'
  },
  {
    id: 'trx-3',
    time: '11:30',
    type: 'expense_ops',
    description: 'Kantong kresek besar 2 ikat + lakban',
    category: 'Plastik & Kemasan',
    totalAmount: 35000
  },
  {
    id: 'trx-4',
    time: '13:00',
    type: 'sale',
    customer: 'Bu Siti (Warung Nasi)',
    items: [
      { productId: 'prod-1', name: 'Beras Pandan Wangi 5kg', qty: 3, price: 78000, cost: 68000 },
      { productId: 'prod-3', name: 'Telur Ayam Ras Segar 1kg', qty: 5, price: 29500, cost: 26000 }
    ],
    totalAmount: 381500,
    totalCost: 334000,
    grossProfit: 47500,
    paymentMethod: 'debt',
    status: 'pending'
  },
  {
    id: 'trx-5',
    time: '14:20',
    type: 'personal_draw',
    description: 'Uang belanja sayur dapur rumah & saku anak',
    category: 'Uang Pribadi',
    totalAmount: 120000
  }
];

// ==================== STATE MANAGEMENT ====================
let state = {
  initialCash: 1250000,
  products: [],
  customers: [],
  transactions: [],
  cart: [],
  activeTab: 'dashboard',
  inventoryFilter: 'all',
  selectedCustomerForWa: null,
  activeRestockProductId: null,
  chatHistory: [
    {
      sender: 'ai',
      time: '08:00',
      text: 'Halo Pak Joko & Bu Ratna! Selamat pagi. Saya sudah membaca buku kas dan stok Toko Berkah Barokah hari ini.\n\nAda hal penting yang ingin ditanyakan seputar laba, uang pribadi, stok kritis, atau harga jual?'
    }
  ]
};

// ==================== INISIALISASI & PERSISTENSI FIREBASE ====================
let unsubscribeFirestore = null;

function setCloudStatus(status, text) {
  const dot = document.getElementById('cloud-status-dot');
  const txt = document.getElementById('cloud-status-text');
  if (!dot || !txt) return;

  if (status === 'connected') {
    dot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse';
    txt.innerText = text || 'Firebase Terhubung ✓';
  } else if (status === 'syncing') {
    dot.className = 'w-2 h-2 rounded-full bg-blue-500 animate-pulse';
    txt.innerText = text || 'Menyimpan ke Cloud...';
  } else if (status === 'offline') {
    dot.className = 'w-2 h-2 rounded-full bg-amber-500';
    txt.innerText = text || 'Mode Offline (Lokal)';
  } else {
    dot.className = 'w-2 h-2 rounded-full bg-slate-400';
    txt.innerText = text || 'Lokal Saja';
  }
}

function initApp() {
  // 1. Muat dari LocalStorage dulu untuk respon instan
  const savedState = localStorage.getItem('temanusaha_db_v1');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state.initialCash = parsed.initialCash || 1250000;
      state.products = parsed.products || DEFAULT_PRODUCTS;
      state.customers = parsed.customers || DEFAULT_CUSTOMERS;
      state.transactions = parsed.transactions || DEFAULT_TRANSACTIONS;
      state.chatHistory = parsed.chatHistory || state.chatHistory;
    } catch (e) {
      loadDefaultData();
    }
  } else {
    loadDefaultData();
  }

  // Set default due date to tomorrow
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const cartDueEl = document.getElementById('cart-due-date');
  if (cartDueEl) cartDueEl.value = tomorrow;

  const newDebtDueEl = document.getElementById('new-debt-due');
  if (newDebtDueEl) newDebtDueEl.value = tomorrow;

  calculatePricingTiers();
  renderAll();

  // 2. Hubungkan ke Firebase Firestore Cloud Sync
  if (typeof initFirebase === 'function') {
    initFirebase();
  }
  connectFirestoreSync();
}

function connectFirestoreSync() {
  if (typeof isFirebaseReady === 'undefined' || !isFirebaseReady || !db) {
    setCloudStatus('offline', 'Mode Offline (Lokal)');
    return;
  }

  const storeDocRef = db.collection('stores').doc('toko-berkah');

  // Real-time listener dari Firestore Cloud
  unsubscribeFirestore = storeDocRef.onSnapshot((doc) => {
    if (doc.exists) {
      const data = doc.data();
      state.initialCash = data.initialCash !== undefined ? data.initialCash : state.initialCash;
      state.products = data.products || state.products;
      state.customers = data.customers || state.customers;
      state.transactions = data.transactions || state.transactions;
      state.chatHistory = data.chatHistory || state.chatHistory;

      // Update local storage juga
      localStorage.setItem('temanusaha_db_v1', JSON.stringify({
        initialCash: state.initialCash,
        products: state.products,
        customers: state.customers,
        transactions: state.transactions,
        chatHistory: state.chatHistory
      }));

      setCloudStatus('connected', 'Firebase Terhubung ✓');
      renderAll();
    } else {
      // Pertama kali: Simpan data awal toko ke Firestore
      storeDocRef.set({
        initialCash: state.initialCash,
        products: state.products,
        customers: state.customers,
        transactions: state.transactions,
        chatHistory: state.chatHistory,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        setCloudStatus('connected', 'Firebase Terhubung ✓');
      }).catch(err => {
        console.warn('Gagal inisialisasi Firestore:', err);
        setCloudStatus('offline', 'Mode Offline');
      });
    }
  }, (error) => {
    console.warn('Firestore Snapshot error:', error);
    setCloudStatus('offline', 'Mode Offline (Lokal)');
  });
}

function loadDefaultData() {
  state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  state.customers = JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS));
  state.transactions = JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS));
  saveState();
}

function saveState() {
  const payload = {
    initialCash: state.initialCash,
    products: state.products,
    customers: state.customers,
    transactions: state.transactions,
    chatHistory: state.chatHistory
  };

  // Simpan ke LocalStorage seketika
  localStorage.setItem('temanusaha_db_v1', JSON.stringify(payload));

  // Simpan ke Firebase Firestore secara asinkron
  if (typeof isFirebaseReady !== 'undefined' && isFirebaseReady && db) {
    setCloudStatus('syncing', 'Menyimpan...');
    db.collection('stores').doc('toko-berkah').set({
      ...payload,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
    .then(() => {
      setCloudStatus('connected', 'Firebase Terhubung ✓');
    })
    .catch((err) => {
      console.warn('Gagal sinkron Firestore:', err);
      setCloudStatus('offline', 'Tersimpan Lokal');
    });
  }
}

function confirmResetData() {
  if (confirm('Kembalikan data ke contoh toko UMKM awal? Data catatan yang Anda input baru akan diganti dengan data contoh simulasi.')) {
    loadDefaultData();
    state.cart = [];
    renderAll();
    alert('Data contoh toko berhasil dimuat ulang!');
  }
}

// ==================== FORMATTERS ====================
function formatRupiah(num) {
  if (num === undefined || num === null || isNaN(num)) return 'Rp 0';
  return 'Rp ' + Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// ==================== LOGIKA PERHITUNGAN BISNIS ====================
function computeMetrics() {
  let totalSales = 0;
  let cashSales = 0;
  let debtSales = 0;
  let totalHPP = 0;
  let totalOpsExpenses = 0;
  let totalPersonalDraw = 0;
  let totalStockPurchases = 0;

  state.transactions.forEach(t => {
    if (t.type === 'sale') {
      totalSales += t.totalAmount;
      totalHPP += t.totalCost;
      if (t.paymentMethod === 'cash') {
        cashSales += t.totalAmount;
      } else {
        debtSales += t.totalAmount;
      }
    } else if (t.type === 'expense_ops') {
      totalOpsExpenses += t.totalAmount;
    } else if (t.type === 'personal_draw') {
      totalPersonalDraw += t.totalAmount;
    } else if (t.type === 'expense_stock') {
      totalStockPurchases += t.totalAmount;
    }
  });

  const grossProfit = totalSales - totalHPP;
  const netProfit = grossProfit - totalOpsExpenses;
  const cashInHand = state.initialCash + cashSales - totalOpsExpenses - totalStockPurchases - totalPersonalDraw;
  const lockedRestockFund = totalHPP;

  const isPersonalOverdrawn = totalPersonalDraw > netProfit;
  const capitalErosionAmount = isPersonalOverdrawn ? totalPersonalDraw - Math.max(0, netProfit) : 0;
  const safePersonalAllowance = Math.max(0, netProfit - totalPersonalDraw);

  // Inventori
  let totalInventoryAssetValue = 0;
  const criticalItems = [];
  const slowItems = [];

  state.products.forEach(p => {
    totalInventoryAssetValue += (p.costPrice * p.stock);
    const daysRemaining = p.dailySalesAvg > 0 ? (p.stock / p.dailySalesAvg) : 999;
    
    if (p.stock <= p.minStock || daysRemaining <= 3) {
      criticalItems.push({
        ...p,
        daysRemaining: Math.round(daysRemaining * 10) / 10,
        suggestedQty: Math.max(p.minStock * 2 - p.stock, 5),
        costEst: Math.max(p.minStock * 2 - p.stock, 5) * p.costPrice
      });
    }

    if (p.dailySalesAvg < 0.5 && p.stock >= p.minStock) {
      slowItems.push({
        ...p,
        lockedCapital: p.stock * p.costPrice
      });
    }
  });

  // Piutang
  const todayStr = new Date().toISOString().split('T')[0];
  let totalReceivable = 0;
  let urgentDebts = [];

  state.customers.forEach(c => {
    if (c.debtAmount > 0) {
      totalReceivable += c.debtAmount;
      const isDueToday = c.dueDate === todayStr;
      const isOverdue = c.dueDate < todayStr;
      const diffDays = Math.ceil((new Date(c.dueDate) - new Date(todayStr)) / (1000 * 60 * 60 * 24));
      const isDueSoon = diffDays > 0 && diffDays <= 2;

      if (isDueToday || isOverdue || isDueSoon) {
        urgentDebts.push({ ...c, isDueToday, isOverdue, isDueSoon, diffDays });
      }
    }
  });

  return {
    totalSales,
    cashSales,
    debtSales,
    totalHPP,
    grossProfit,
    totalOpsExpenses,
    netProfit,
    cashInHand,
    lockedRestockFund,
    totalPersonalDraw,
    isPersonalOverdrawn,
    capitalErosionAmount,
    safePersonalAllowance,
    totalInventoryAssetValue,
    criticalItems,
    slowItems,
    totalReceivable,
    urgentDebts
  };
}

// ==================== RENDER SEMUA TAMPILAN ====================
function renderAll() {
  const metrics = computeMetrics();

  // Top header pill & Drawer cash pill
  const headerCash = document.getElementById('header-cash-in-hand');
  if (headerCash) headerCash.innerText = formatRupiah(metrics.cashInHand);

  const drawerCash = document.getElementById('drawer-cash-in-hand');
  if (drawerCash) drawerCash.innerText = formatRupiah(metrics.cashInHand);

  // Badges (Header & Drawer)
  const badgeCrit = document.getElementById('badge-critical-stock');
  const drawerCrit = document.getElementById('drawer-badge-critical');
  if (metrics.criticalItems.length > 0) {
    if (badgeCrit) { badgeCrit.innerText = metrics.criticalItems.length; badgeCrit.classList.remove('hidden'); }
    if (drawerCrit) { drawerCrit.innerText = `${metrics.criticalItems.length} Kritis`; drawerCrit.classList.remove('hidden'); }
  } else {
    if (badgeCrit) badgeCrit.classList.add('hidden');
    if (drawerCrit) drawerCrit.classList.add('hidden');
  }

  const badgeDebt = document.getElementById('badge-urgent-debt');
  const drawerDebt = document.getElementById('drawer-badge-debt');
  if (metrics.urgentDebts.length > 0) {
    if (badgeDebt) { badgeDebt.innerText = metrics.urgentDebts.length; badgeDebt.classList.remove('hidden'); }
    if (drawerDebt) { drawerDebt.innerText = `${metrics.urgentDebts.length} Bon`; drawerDebt.classList.remove('hidden'); }
  } else {
    if (badgeDebt) badgeDebt.classList.add('hidden');
    if (drawerDebt) drawerDebt.classList.add('hidden');
  }

  renderDashboard(metrics);
  renderCashierProducts();
  renderCart();
  renderInventory(metrics);
  renderDebts(metrics);
  renderMarketingOptions();
}

// ==================== TAB 1: RENDER DASHBOARD ====================
function renderDashboard(metrics) {
  // 1. Health Status Banner
  const bannerEl = document.getElementById('health-banner');
  if (metrics.isPersonalOverdrawn) {
    bannerEl.className = 'rounded-2xl p-4 sm:p-5 border bg-red-50 border-red-200 text-red-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm';
    bannerEl.innerHTML = `
      <div class="flex items-start space-x-3">
        <span class="text-2xl">⚠️</span>
        <div>
          <h4 class="font-extrabold text-sm sm:text-base text-red-900">Perhatian: Modal Belanja Barang Toko Sedang Tergerus!</h4>
          <p class="text-xs text-red-800 mt-0.5">
            Pengambilan uang pribadi hari ini (${formatRupiah(metrics.totalPersonalDraw)}) lebih besar dari laba bersih (${formatRupiah(metrics.netProfit)}).
            Ada <strong>${formatRupiah(metrics.capitalErosionAmount)} uang modal belanja barang yang terpakai</strong>.
          </p>
        </div>
      </div>
      <button onclick="switchTab('cashier'); setCashierMode('sale');" class="whitespace-nowrap px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
        + Tingkatkan Penjualan Tunai
      </button>
    `;
  } else {
    bannerEl.className = 'rounded-2xl p-4 sm:p-5 border bg-emerald-50 border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm';
    bannerEl.innerHTML = `
      <div class="flex items-start space-x-3">
        <span class="text-2xl">🛡️</span>
        <div>
          <h4 class="font-extrabold text-sm sm:text-base text-emerald-900">Keuangan Toko Sehat: Modal Belanja Barang Aman Terjaga</h4>
          <p class="text-xs text-emerald-800 mt-0.5">
            Modal barang terjual (${formatRupiah(metrics.lockedRestockFund)}) aman terisolasi. Anda memiliki sisa uang dingin <strong>${formatRupiah(metrics.safePersonalAllowance)}</strong> yang boleh diambil untuk keperluan pribadi.
          </p>
        </div>
      </div>
      <button onclick="switchTab('assistant')" class="whitespace-nowrap px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
        Konsultasi dengan TemanUsaha
      </button>
    `;
  }

  // 2. 4 Kartu Finansial
  document.getElementById('metric-cash-in-hand').innerText = formatRupiah(metrics.cashInHand);
  document.getElementById('metric-locked-fund').innerText = formatRupiah(metrics.lockedRestockFund);
  document.getElementById('metric-safe-draw').innerText = formatRupiah(metrics.safePersonalAllowance);
  document.getElementById('metric-personal-draw').innerText = formatRupiah(metrics.totalPersonalDraw);

  const drawNoteEl = document.getElementById('metric-personal-draw-note');
  const drawCardEl = document.getElementById('card-personal-draw');
  if (metrics.isPersonalOverdrawn) {
    drawCardEl.className = 'bg-red-50/70 rounded-2xl p-4 sm:p-5 border border-red-300 shadow-sm flex flex-col justify-between';
    drawNoteEl.className = 'text-xs text-red-700 font-bold mt-1';
    drawNoteEl.innerText = `Melebihi laba! Tergerus ${formatRupiah(metrics.capitalErosionAmount)}`;
  } else {
    drawCardEl.className = 'bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col justify-between';
    drawNoteEl.className = 'text-xs text-slate-500 mt-1';
    drawNoteEl.innerText = `Sisa hak ambil hari ini: ${formatRupiah(metrics.safePersonalAllowance)}`;
  }

  // 3. 3 Kotak Peringatan Pagi Hari
  const briefContainer = document.getElementById('morning-brief-container');
  let briefHtml = '';

  // Box A: Stok Kritis
  if (metrics.criticalItems.length > 0) {
    const item = metrics.criticalItems[0];
    briefHtml += `
      <div class="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-amber-800 uppercase tracking-wide">📦 Stok Menipis</span>
            <span class="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">${metrics.criticalItems.length} Produk</span>
          </div>
          <p class="text-xs text-amber-900 leading-relaxed">
            <strong>${item.name}</strong> sisa ${item.stock} ${item.unit}. Diperkirakan habis dalam <strong>${item.daysRemaining} hari</strong>.
          </p>
        </div>
        <button onclick="switchTab('inventory'); filterInventory('critical');" class="mt-3 text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center space-x-1">
          <span>Lihat daftar belanja barang</span>
          <span>→</span>
        </button>
      </div>
    `;
  } else {
    briefHtml += `
      <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wide">📦 Persediaan Barang</span>
          <p class="text-xs text-slate-600 mt-1">Seluruh stok barang utama saat ini dalam jumlah aman.</p>
        </div>
        <button onclick="switchTab('inventory')" class="mt-3 text-xs font-bold text-emerald-700 hover:underline">Cek etalase →</button>
      </div>
    `;
  }

  // Box B: Piutang Jatuh Tempo
  if (metrics.urgentDebts.length > 0) {
    const debt = metrics.urgentDebts[0];
    const statusLabel = debt.isOverdue ? 'Sudah lewat jatuh tempo!' : debt.isDueToday ? 'Jatuh tempo HARI INI' : `Tempo dlm ${debt.diffDays} hari`;
    briefHtml += `
      <div class="bg-red-50 rounded-2xl p-4 border border-red-200 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-red-800 uppercase tracking-wide">⏰ Tagihan Bon Pelanggan</span>
            <span class="text-[10px] font-bold bg-red-200 text-red-900 px-2 py-0.5 rounded-full">${metrics.urgentDebts.length} Tagihan</span>
          </div>
          <p class="text-xs text-red-900 leading-relaxed">
            <strong>${debt.name}</strong> (${formatRupiah(debt.debtAmount)}): <span class="font-bold underline">${statusLabel}</span>.
          </p>
        </div>
        <button onclick="openWaModal('${debt.id}')" class="mt-3 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1">
          <span>💬 Kirim WA sopan sekarang</span>
          <span>→</span>
        </button>
      </div>
    `;
  } else {
    briefHtml += `
      <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wide">⏰ Piutang Pelanggan</span>
          <p class="text-xs text-slate-600 mt-1">Tidak ada piutang yang menunggak atau jatuh tempo hari ini.</p>
        </div>
        <button onclick="switchTab('debts')" class="mt-3 text-xs font-bold text-emerald-700 hover:underline">Buka buku bon →</button>
      </div>
    `;
  }

  // Box C: Analisis Biaya Operasional / Modal Lambat Laku
  if (metrics.slowItems.length > 0) {
    const slow = metrics.slowItems[0];
    briefHtml += `
      <div class="bg-blue-50 rounded-2xl p-4 border border-blue-200 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold text-blue-800 uppercase tracking-wide">🐢 Modal Tertahan</span>
            <span class="text-[10px] font-bold bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full">Slow Moving</span>
          </div>
          <p class="text-xs text-blue-900 leading-relaxed">
            Ada modal tertahan di <strong>${slow.name}</strong> (${formatRupiah(slow.lockedCapital)}). Putar uang dengan promo bundling.
          </p>
        </div>
        <button onclick="switchTab('marketing')" class="mt-3 text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center space-x-1">
          <span>📢 Buat promo cuci gudang</span>
          <span>→</span>
        </button>
      </div>
    `;
  } else {
    briefHtml += `
      <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-slate-700 uppercase tracking-wide">💡 Biaya Operasional</span>
          <p class="text-xs text-slate-600 mt-1">Pengeluaran operasional hari ini ${formatRupiah(metrics.totalOpsExpenses)}. Terkendali.</p>
        </div>
        <button onclick="switchTab('assistant')" class="mt-3 text-xs font-bold text-emerald-700 hover:underline">Tanya evaluasi biaya →</button>
      </div>
    `;
  }
  briefContainer.innerHTML = briefHtml;

  // 4. Detail Bar
  document.getElementById('detail-total-sales').innerText = formatRupiah(metrics.totalSales);
  document.getElementById('detail-sales-split').innerText = `${formatRupiah(metrics.cashSales)} Tunai / ${formatRupiah(metrics.debtSales)} Bon`;
  document.getElementById('detail-total-hpp').innerText = formatRupiah(metrics.totalHPP);
  document.getElementById('detail-gross-profit').innerText = formatRupiah(metrics.grossProfit);
  
  const marginPct = metrics.totalSales > 0 ? Math.round((metrics.grossProfit / metrics.totalSales) * 100) : 0;
  document.getElementById('detail-gross-margin').innerText = `Margin Kotor: ${marginPct}%`;
  document.getElementById('detail-total-ops').innerText = formatRupiah(metrics.totalOpsExpenses);
  document.getElementById('detail-net-profit').innerText = formatRupiah(metrics.netProfit);

  // 5. Tabel Transaksi Terakhir
  const tbody = document.getElementById('transactions-table-body');
  if (state.transactions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-6 text-slate-400">Belum ada transaksi tercatat hari ini.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.transactions.slice().reverse().map(t => {
    let typeBadge = '';
    let profitBadge = '';
    let desc = '';

    if (t.type === 'sale') {
      typeBadge = `<span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold text-[10px]">Penjualan</span>`;
      profitBadge = `<span class="text-emerald-600 font-bold">+${formatRupiah(t.grossProfit)} (Laba)</span>`;
      desc = (t.items || []).map(i => `${i.name} (${i.qty})`).join(', ') + ` • <em>${t.customer}</em>`;
    } else if (t.type === 'expense_ops') {
      typeBadge = `<span class="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full font-bold text-[10px]">Operasional</span>`;
      profitBadge = `<span class="text-red-500 font-semibold">-${formatRupiah(t.totalAmount)} (Biaya)</span>`;
      desc = `${t.description} (${t.category})`;
    } else if (t.type === 'personal_draw') {
      typeBadge = `<span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold text-[10px]">Uang Pribadi</span>`;
      profitBadge = `<span class="text-purple-600 font-semibold">-${formatRupiah(t.totalAmount)} (Prive)</span>`;
      desc = `${t.description}`;
    } else if (t.type === 'expense_stock') {
      typeBadge = `<span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold text-[10px]">Belanja Barang</span>`;
      profitBadge = `<span class="text-amber-700 font-semibold">Aset Masuk Gudang</span>`;
      desc = `${t.description}`;
    }

    const methodLabel = t.paymentMethod === 'debt' ? '<span class="text-amber-700 font-bold">Bon/Tempo</span>' : (t.type === 'sale' ? 'Tunai' : '-');

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-2.5 px-4 text-slate-500">${t.time || '12:00'}</td>
        <td class="py-2.5 px-4">${typeBadge}</td>
        <td class="py-2.5 px-4 text-slate-800 max-w-xs truncate">${desc}</td>
        <td class="py-2.5 px-4">${methodLabel}</td>
        <td class="py-2.5 px-4 text-right font-bold text-slate-900">${formatRupiah(t.totalAmount)}</td>
        <td class="py-2.5 px-4 text-right">${profitBadge}</td>
      </tr>
    `;
  }).join('');
}

// ==================== TAB 2: CATAT CEPAT (KASIR) ====================
function setCashierMode(mode) {
  document.getElementById('panel-cashier-sale').classList.add('hidden');
  document.getElementById('panel-cashier-ops').classList.add('hidden');
  document.getElementById('panel-cashier-personal').classList.add('hidden');

  document.getElementById('btn-mode-sale').className = 'flex-1 py-2.5 px-4 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center space-x-1.5';
  document.getElementById('btn-mode-ops').className = 'flex-1 py-2.5 px-4 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center space-x-1.5';
  document.getElementById('btn-mode-personal').className = 'flex-1 py-2.5 px-4 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center space-x-1.5';

  if (mode === 'sale') {
    document.getElementById('panel-cashier-sale').classList.remove('hidden');
    document.getElementById('btn-mode-sale').className = 'flex-1 py-2.5 px-4 rounded-lg bg-white shadow-sm text-emerald-700 font-bold transition-all flex items-center justify-center space-x-1.5';
  } else if (mode === 'ops') {
    document.getElementById('panel-cashier-ops').classList.remove('hidden');
    document.getElementById('btn-mode-ops').className = 'flex-1 py-2.5 px-4 rounded-lg bg-white shadow-sm text-slate-900 font-bold transition-all flex items-center justify-center space-x-1.5';
  } else if (mode === 'personal') {
    document.getElementById('panel-cashier-personal').classList.remove('hidden');
    document.getElementById('btn-mode-personal').className = 'flex-1 py-2.5 px-4 rounded-lg bg-white shadow-sm text-purple-700 font-bold transition-all flex items-center justify-center space-x-1.5';
    calculatePersonalDrawImpact();
  }
}

function renderCashierProducts() {
  const query = (document.getElementById('quick-product-search')?.value || '').toLowerCase();
  const grid = document.getElementById('quick-products-grid');
  if (!grid) return;

  const filtered = state.products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));

  grid.innerHTML = filtered.map(p => {
    const isLow = p.stock <= p.minStock;
    return `
      <div onclick="addToCart('${p.id}')" class="p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer bg-slate-50 hover:bg-emerald-50/30 flex flex-col justify-between select-none">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-[10px] font-semibold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">${p.category}</span>
            <span class="text-[10px] font-bold ${isLow ? 'text-amber-600 bg-amber-100' : 'text-slate-600 bg-slate-200'} px-1.5 py-0.5 rounded-full">Sisa ${p.stock}</span>
          </div>
          <h4 class="font-bold text-xs text-slate-900 line-clamp-2">${p.name}</h4>
        </div>
        <div class="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between">
          <span class="text-xs font-extrabold text-emerald-700">${formatRupiah(p.sellPrice)}</span>
          <span class="text-[10px] text-emerald-600 bg-emerald-100 font-bold px-1.5 py-0.5 rounded">+ Tambah</span>
        </div>
      </div>
    `;
  }).join('');
}

function filterQuickProducts() {
  renderCashierProducts();
}

function addToCart(productId) {
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(c => c.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      productId: prod.id,
      name: prod.name,
      price: prod.sellPrice,
      cost: prod.costPrice,
      unit: prod.unit,
      qty: 1
    });
  }
  renderCart();
}

function changeCartQty(productId, delta) {
  const item = state.cart.find(c => c.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.productId !== productId);
  }
  renderCart();
}

function clearCart() {
  state.cart = [];
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 text-center py-6">Belum ada barang dipilih. Klik barang di sebelah kiri.</p>`;
    document.getElementById('cart-total-cost').innerText = 'Rp 0';
    document.getElementById('cart-gross-profit').innerText = 'Rp 0';
    document.getElementById('cart-total-amount').innerText = 'Rp 0';
    return;
  }

  let totalAmount = 0;
  let totalCost = 0;

  container.innerHTML = state.cart.map(c => {
    const subtotal = c.price * c.qty;
    const subcost = c.cost * c.qty;
    totalAmount += subtotal;
    totalCost += subcost;

    return `
      <div class="p-2 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
        <div class="flex-1 pr-2">
          <div class="font-bold text-slate-800 truncate">${c.name}</div>
          <div class="text-[10px] text-slate-500">${formatRupiah(c.price)} / ${c.unit}</div>
        </div>
        <div class="flex items-center space-x-1.5">
          <button onclick="changeCartQty('${c.productId}', -1)" class="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center">-</button>
          <span class="font-bold text-slate-900 w-5 text-center">${c.qty}</span>
          <button onclick="changeCartQty('${c.productId}', 1)" class="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 flex items-center justify-center">+</button>
        </div>
        <div class="font-bold text-emerald-700 w-20 text-right">
          ${formatRupiah(subtotal)}
        </div>
      </div>
    `;
  }).join('');

  const grossProfit = totalAmount - totalCost;
  document.getElementById('cart-total-cost').innerText = formatRupiah(totalCost);
  document.getElementById('cart-gross-profit').innerText = formatRupiah(grossProfit);
  document.getElementById('cart-total-amount').innerText = formatRupiah(totalAmount);
}

function toggleDebtDueDate(isDebt) {
  const el = document.getElementById('cart-debt-due-wrapper');
  if (isDebt) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

function submitSaleTransaction() {
  if (state.cart.length === 0) {
    alert('Keranjang belanja masih kosong!');
    return;
  }

  const customerName = document.getElementById('cart-customer-name').value.trim() || 'Pembeli Langsung';
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cash';
  const dueDate = document.getElementById('cart-due-date')?.value;

  let totalAmount = 0;
  let totalCost = 0;

  // Kurangi stok barang
  state.cart.forEach(c => {
    totalAmount += c.price * c.qty;
    totalCost += c.cost * c.qty;

    const prod = state.products.find(p => p.id === c.productId);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - c.qty);
    }
  });

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newTrx = {
    id: 'trx-' + Date.now(),
    time: timeStr,
    type: 'sale',
    customer: customerName,
    items: JSON.parse(JSON.stringify(state.cart)),
    totalAmount,
    totalCost,
    grossProfit: totalAmount - totalCost,
    paymentMethod,
    status: paymentMethod === 'cash' ? 'paid' : 'pending'
  };

  state.transactions.push(newTrx);

  // Jika pembayaran Tempo/Bon, otomatis masukkan ke Buku Piutang
  if (paymentMethod === 'debt') {
    const existingCust = state.customers.find(c => c.name.toLowerCase() === customerName.toLowerCase());
    const itemsSummary = state.cart.map(c => `${c.name} (${c.qty})`).join(', ');

    if (existingCust) {
      existingCust.debtAmount += totalAmount;
      existingCust.dueDate = dueDate || existingCust.dueDate;
      existingCust.notes = existingCust.notes + ' + ' + itemsSummary;
    } else {
      state.customers.push({
        id: 'cust-' + Date.now(),
        name: customerName,
        phone: '0812000000',
        debtAmount: totalAmount,
        dueDate: dueDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
        notes: itemsSummary
      });
    }
  }

  state.cart = [];
  saveState();
  renderAll();

  alert(`Penjualan berhasil disimpan! Laba kotor transaksi ini: ${formatRupiah(newTrx.grossProfit)}`);
}

function submitOpsExpense() {
  const desc = document.getElementById('ops-description').value.trim();
  const cat = document.getElementById('ops-category').value;
  const amount = parseInt(document.getElementById('ops-amount').value, 10);

  if (!desc || !amount || amount <= 0) {
    alert('Mohon isi keterangan dan nominal pengeluaran yang benar!');
    return;
  }

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  state.transactions.push({
    id: 'trx-' + Date.now(),
    time: timeStr,
    type: 'expense_ops',
    description: desc,
    category: cat,
    totalAmount: amount
  });

  document.getElementById('ops-description').value = '';
  document.getElementById('ops-amount').value = '';

  saveState();
  renderAll();
  alert(`Biaya operasional ${formatRupiah(amount)} berhasil dicatat.`);
}

function calculatePersonalDrawImpact() {
  const amount = parseInt(document.getElementById('personal-amount').value, 10) || 0;
  const metrics = computeMetrics();
  const advisor = document.getElementById('personal-draw-advisor');

  const afterDrawNet = metrics.netProfit - (metrics.totalPersonalDraw + amount);

  if (amount === 0) {
    advisor.innerHTML = `
      <div class="flex items-center space-x-1.5 font-bold text-slate-700">
        <span>💡</span>
        <span>Kondisi Hak Ambil Anda Saat Ini</span>
      </div>
      <p class="text-slate-600">
        Laba bersih riil toko hari ini: <strong>${formatRupiah(metrics.netProfit)}</strong>.<br>
        Uang pribadi yang sudah diambil sebelumnya: <strong>${formatRupiah(metrics.totalPersonalDraw)}</strong>.<br>
        Sisa laba dingin yang <strong>AMAN diambil: ${formatRupiah(metrics.safePersonalAllowance)}</strong>.
      </p>
    `;
    return;
  }

  if (afterDrawNet < 0) {
    const tergerus = Math.abs(afterDrawNet);
    advisor.className = 'p-4 rounded-xl bg-red-50 border border-red-200 text-xs space-y-1.5 text-red-950';
    advisor.innerHTML = `
      <div class="flex items-center space-x-1.5 font-bold text-red-900">
        <span>⚠️</span>
        <span>PERINGATAN: Modal Belanja Ulang Akan Tergerus Sebesar ${formatRupiah(tergerus)}!</span>
      </div>
      <p class="text-red-800 leading-relaxed">
        Jika Anda mengambil <strong>${formatRupiah(amount)}</strong>, total uang pribadi diambil menjadi ${formatRupiah(metrics.totalPersonalDraw + amount)}, melebihi laba bersih hari ini (${formatRupiah(metrics.netProfit)}).<br>
        Uang kas toko akan berkurang dan jatah modal belanja barang besok akan berkurang ${formatRupiah(tergerus)}.
      </p>
    `;
  } else {
    advisor.className = 'p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1.5 text-emerald-950';
    advisor.innerHTML = `
      <div class="flex items-center space-x-1.5 font-bold text-emerald-900">
        <span>✅</span>
        <span>Aman! Masih Berada di Dalam Batas Laba Bersih</span>
      </div>
      <p class="text-emerald-800 leading-relaxed">
        Pengambilan <strong>${formatRupiah(amount)}</strong> aman dilakukan. Modal belanja ulang barang (${formatRupiah(metrics.lockedRestockFund)}) tetap utuh dan masih tersisa cadangan laba sebesar <strong>${formatRupiah(afterDrawNet)}</strong>.
      </p>
    `;
  }
}

function submitPersonalDraw() {
  const desc = document.getElementById('personal-description').value.trim() || 'Keperluan Rumah Tangga';
  const amount = parseInt(document.getElementById('personal-amount').value, 10);

  if (!amount || amount <= 0) {
    alert('Masukkan nominal uang yang diambil!');
    return;
  }

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  state.transactions.push({
    id: 'trx-' + Date.now(),
    time: timeStr,
    type: 'personal_draw',
    description: desc,
    category: 'Uang Pribadi',
    totalAmount: amount
  });

  document.getElementById('personal-description').value = '';
  document.getElementById('personal-amount').value = '';

  saveState();
  renderAll();
  alert(`Pengambilan uang pribadi ${formatRupiah(amount)} berhasil dicatat.`);
}

// ==================== TAB 3: MANAJEMEN STOK ====================
function filterInventory(filter) {
  state.inventoryFilter = filter;
  ['all', 'critical', 'slow', 'safe'].forEach(f => {
    const btn = document.getElementById(`inv-filter-${f}`);
    if (f === filter) {
      btn.className = 'px-3 py-1 rounded-full bg-slate-800 text-white';
    } else {
      btn.className = 'px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 hover:bg-slate-100';
    }
  });
  renderInventory(computeMetrics());
}

function renderInventory(metrics) {
  document.getElementById('inv-total-asset-value').innerText = formatRupiah(metrics.totalInventoryAssetValue);
  document.getElementById('inv-critical-count').innerText = `${metrics.criticalItems.length} Produk`;
  document.getElementById('inv-slow-count').innerText = `${metrics.slowItems.length} Produk`;

  document.getElementById('count-all-prod').innerText = state.products.length;
  document.getElementById('count-crit-prod').innerText = metrics.criticalItems.length;
  document.getElementById('count-slow-prod').innerText = metrics.slowItems.length;
  document.getElementById('count-safe-prod').innerText = state.products.length - metrics.criticalItems.length - metrics.slowItems.length;

  const tbody = document.getElementById('inventory-table-body');
  if (!tbody) return;

  const filtered = state.products.filter(p => {
    const isCrit = p.stock <= p.minStock || (p.dailySalesAvg > 0 && (p.stock / p.dailySalesAvg) <= 3);
    const isSlow = p.dailySalesAvg < 0.5 && p.stock >= p.minStock;

    if (state.inventoryFilter === 'critical') return isCrit;
    if (state.inventoryFilter === 'slow') return isSlow;
    if (state.inventoryFilter === 'safe') return !isCrit && !isSlow;
    return true;
  });

  tbody.innerHTML = filtered.map(p => {
    const daysRemaining = p.dailySalesAvg > 0 ? (p.stock / p.dailySalesAvg) : 999;
    const isCrit = p.stock <= p.minStock || daysRemaining <= 3;
    const isSlow = p.dailySalesAvg < 0.5 && p.stock >= p.minStock;

    let statusPill = '';
    if (isCrit) {
      statusPill = `<span class="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2 py-0.5 rounded-full text-[10px]">⚠️ Sisa ${Math.round(daysRemaining*10)/10} hari</span>`;
    } else if (isSlow) {
      statusPill = `<span class="bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-full text-[10px]">🐢 Menumpuk</span>`;
    } else {
      statusPill = `<span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full text-[10px]">✅ Aman (~${Math.round(daysRemaining)} hr)</span>`;
    }

    const lockedCapital = p.stock * p.costPrice;

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4">
          <div class="font-bold text-slate-900 text-xs">${p.name}</div>
          <div class="text-[10px] text-slate-400">Min. stok: ${p.minStock} ${p.unit} • Terjual ~${p.dailySalesAvg} ${p.unit}/hari</div>
        </td>
        <td class="py-3 px-4 text-slate-600">${p.category}</td>
        <td class="py-3 px-4 text-right text-slate-600">${formatRupiah(p.costPrice)}</td>
        <td class="py-3 px-4 text-right font-bold text-slate-800">${formatRupiah(p.sellPrice)}</td>
        <td class="py-3 px-4 text-center font-extrabold text-sm ${isCrit ? 'text-amber-700' : 'text-slate-800'}">
          ${p.stock} <span class="text-[10px] font-normal text-slate-500">${p.unit}</span>
        </td>
        <td class="py-3 px-4 text-center">${statusPill}</td>
        <td class="py-3 px-4 text-right font-bold text-slate-700">${formatRupiah(lockedCapital)}</td>
        <td class="py-3 px-4 text-center">
          <button onclick="openRestockModal('${p.id}')" class="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[11px] font-bold shadow-sm whitespace-nowrap">
            + Belanja Barang
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAddProductModal() {
  document.getElementById('modal-add-product').classList.remove('hidden');
}

function closeAddProductModal() {
  document.getElementById('modal-add-product').classList.add('hidden');
}

function submitNewProduct() {
  const name = document.getElementById('new-prod-name').value.trim();
  const cat = document.getElementById('new-prod-cat').value.trim() || 'Umum';
  const unit = document.getElementById('new-prod-unit').value.trim() || 'pcs';
  const cost = parseInt(document.getElementById('new-prod-cost').value, 10);
  const sell = parseInt(document.getElementById('new-prod-sell').value, 10);
  const stock = parseInt(document.getElementById('new-prod-stock').value, 10) || 0;
  const minStock = parseInt(document.getElementById('new-prod-min').value, 10) || 5;

  if (!name || !cost || !sell) {
    alert('Mohon isi nama barang, harga beli, dan harga jual!');
    return;
  }

  state.products.push({
    id: 'prod-' + Date.now(),
    name,
    category: cat,
    costPrice: cost,
    sellPrice: sell,
    stock,
    minStock,
    dailySalesAvg: 1,
    unit
  });

  closeAddProductModal();
  saveState();
  renderAll();
  alert(`Produk ${name} berhasil ditambahkan!`);
}

function openRestockModal(productId) {
  state.activeRestockProductId = productId;
  const prod = state.products.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById('restock-prod-name').innerText = `${prod.name} (Stok sekarang: ${prod.stock} ${prod.unit})`;
  document.getElementById('restock-qty').value = Math.max(prod.minStock * 2 - prod.stock, 5);
  document.getElementById('restock-unit-cost').value = prod.costPrice;
  updateRestockTotal();

  document.getElementById('modal-restock').classList.remove('hidden');
}

function closeRestockModal() {
  document.getElementById('modal-restock').classList.add('hidden');
}

function updateRestockTotal() {
  const qty = parseInt(document.getElementById('restock-qty').value, 10) || 0;
  const cost = parseInt(document.getElementById('restock-unit-cost').value, 10) || 0;
  document.getElementById('restock-total-cost').innerText = formatRupiah(qty * cost);
}

function submitRestock() {
  const prod = state.products.find(p => p.id === state.activeRestockProductId);
  if (!prod) return;

  const qty = parseInt(document.getElementById('restock-qty').value, 10) || 0;
  const unitCost = parseInt(document.getElementById('restock-unit-cost').value, 10) || 0;

  if (qty <= 0 || unitCost <= 0) {
    alert('Masukkan jumlah dan harga beli yang valid!');
    return;
  }

  const totalCost = qty * unitCost;

  // Tambah stok & update harga modal jika berubah
  prod.stock += qty;
  prod.costPrice = unitCost;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Catat transaksi belanja barang
  state.transactions.push({
    id: 'trx-' + Date.now(),
    time: timeStr,
    type: 'expense_stock',
    description: `Belanja ${prod.name} (${qty} ${prod.unit})`,
    category: 'Stok Barang',
    totalAmount: totalCost
  });

  closeRestockModal();
  saveState();
  renderAll();
  alert(`Stok ${prod.name} bertambah ${qty} ${prod.unit}. Kas keluar belanja barang ${formatRupiah(totalCost)} dicatat.`);
}

// ==================== TAB 4: BUKU PIUTANG ====================
function renderDebts(metrics) {
  document.getElementById('debt-total-receivable').innerText = formatRupiah(metrics.totalReceivable);
  document.getElementById('debt-urgent-count').innerText = `${metrics.urgentDebts.length} Tagihan`;

  const tbody = document.getElementById('debt-table-body');
  if (!tbody) return;

  const todayStr = new Date().toISOString().split('T')[0];

  tbody.innerHTML = state.customers.map(c => {
    const isDueToday = c.dueDate === todayStr;
    const isOverdue = c.dueDate < todayStr;
    const diffDays = Math.ceil((new Date(c.dueDate) - new Date(todayStr)) / (1000 * 60 * 60 * 24));

    let statusBadge = '';
    if (c.debtAmount === 0) {
      statusBadge = `<span class="bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-full text-[10px]">Lunas</span>`;
    } else if (isOverdue) {
      statusBadge = `<span class="bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full text-[10px]">Lewat Jatuh Tempo</span>`;
    } else if (isDueToday) {
      statusBadge = `<span class="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full text-[10px]">Jatuh Tempo HARI INI</span>`;
    } else {
      statusBadge = `<span class="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[10px]">Jatuh Tempo ${diffDays} Hari</span>`;
    }

    return `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 font-bold text-slate-900">${c.name}</td>
        <td class="py-3 px-4 text-slate-600 font-mono">${c.phone}</td>
        <td class="py-3 px-4 text-slate-700 max-w-xs truncate">${c.notes || '-'}</td>
        <td class="py-3 px-4 text-right font-extrabold text-sm ${c.debtAmount > 0 ? 'text-red-600' : 'text-slate-400'}">
          ${formatRupiah(c.debtAmount)}
        </td>
        <td class="py-3 px-4 text-center text-slate-600">${c.dueDate}</td>
        <td class="py-3 px-4 text-center">${statusBadge}</td>
        <td class="py-3 px-4 text-center space-x-1.5 whitespace-nowrap">
          ${c.debtAmount > 0 ? `
            <button onclick="openWaModal('${c.id}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold shadow-sm">
              💬 Kirim WA Sopan
            </button>
            <button onclick="settleDebt('${c.id}')" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-[11px] font-bold">
              Bayar Lunas
            </button>
          ` : `
            <span class="text-xs text-slate-400 font-medium">Tidak ada utang</span>
          `}
        </td>
      </tr>
    `;
  }).join('');
}

function openAddDebtModal() {
  document.getElementById('modal-add-debt').classList.remove('hidden');
}

function closeAddDebtModal() {
  document.getElementById('modal-add-debt').classList.add('hidden');
}

function submitNewDebt() {
  const name = document.getElementById('new-debt-name').value.trim();
  const phone = document.getElementById('new-debt-phone').value.trim() || '0812000000';
  const amount = parseInt(document.getElementById('new-debt-amount').value, 10);
  const notes = document.getElementById('new-debt-notes').value.trim();
  const dueDate = document.getElementById('new-debt-due').value;

  if (!name || !amount || amount <= 0 || !dueDate) {
    alert('Mohon isi nama pelanggan, nominal utang, dan tanggal jatuh tempo!');
    return;
  }

  state.customers.push({
    id: 'cust-' + Date.now(),
    name,
    phone,
    debtAmount: amount,
    notes,
    dueDate
  });

  closeAddDebtModal();
  saveState();
  renderAll();
  alert(`Catatan piutang ${name} sebesar ${formatRupiah(amount)} berhasil disimpan.`);
}

function settleDebt(customerId) {
  const cust = state.customers.find(c => c.id === customerId);
  if (!cust) return;

  if (confirm(`Pelanggan ${cust.name} membayar lunas piutang ${formatRupiah(cust.debtAmount)}? Uang akan langsung masuk ke kas toko.`)) {
    const amount = cust.debtAmount;
    cust.debtAmount = 0;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    state.transactions.push({
      id: 'trx-' + Date.now(),
      time: timeStr,
      type: 'sale',
      customer: cust.name,
      items: [{ name: `Pelunasan Bon: ${cust.notes || 'Utang tempo'}`, qty: 1, price: amount, cost: 0 }],
      totalAmount: amount,
      totalCost: 0,
      grossProfit: amount,
      paymentMethod: 'cash',
      status: 'paid'
    });

    saveState();
    renderAll();
    alert(`Pembayaran ${formatRupiah(amount)} berhasil diterima dan masuk ke kas toko!`);
  }
}

function openWaModal(customerId) {
  const cust = state.customers.find(c => c.id === customerId);
  if (!cust) return;

  state.selectedCustomerForWa = cust;
  const greeting = cust.name.startsWith('Bu') ? 'Bu' : cust.name.startsWith('Pak') ? 'Pak' : 'Kak';
  const todayStr = new Date().toISOString().split('T')[0];
  const isOverdue = cust.dueDate < todayStr;
  const isToday = cust.dueDate === todayStr;

  let message = '';
  if (isOverdue) {
    message = `Halo ${cust.name}, semoga kabar ${greeting} dan keluarga sehat selalu ya 🙏\n\nMohon maaf sebelumnya ${greeting}, sekadar menginformasikan catatan belanja kemarin sebesar *${formatRupiah(cust.debtAmount)}* (${cust.notes}) yang jatuh tempo pada tanggal ${cust.dueDate}.\n\nJika ${greeting} berkenan, pembayarannya bisa dititipkan ke toko atau via transfer ya. Terima kasih banyak atas kerja sama dan langganannya selama ini 🙏😊`;
  } else if (isToday) {
    message = `Halo ${cust.name}, selamat siang, semoga harinya berkah dan lancar ya ${greeting} 🙏\n\nSekadar mengingatkan catatan titipan belanja sebesar *${formatRupiah(cust.debtAmount)}* (${cust.notes}) yang jatuh tempo *hari ini*.\n\nBila mau dititipkan atau butuh nomor rekening transfer, kabari kami ya. Terima kasih banyak ${greeting} 🙏`;
  } else {
    message = `Halo ${cust.name}, semoga sehat selalu ya ${greeting} 🙏\n\nSekadar mengabarkan catatan belanja kemarin sebesar *${formatRupiah(cust.debtAmount)}* (${cust.notes}) yang jatuh tempo pada ${cust.dueDate}.\n\nTerima kasih banyak atas kepercayaannya selalu belanja di toko kami 🙏`;
  }

  document.getElementById('modal-wa-text').value = message;
  document.getElementById('modal-wa-reminder').classList.remove('hidden');
}

function closeWaModal() {
  document.getElementById('modal-wa-reminder').classList.add('hidden');
}

function copyModalWaText() {
  const text = document.getElementById('modal-wa-text').value;
  navigator.clipboard.writeText(text);
  const label = document.getElementById('btn-modal-copy-label');
  label.innerText = 'Tersalin! ✓';
  setTimeout(() => { label.innerText = 'Salin Teks'; }, 2000);
}

function sendDirectWhatsApp() {
  const text = document.getElementById('modal-wa-text').value;
  const phone = state.selectedCustomerForWa?.phone || '';
  let formattedPhone = phone.replace(/[^0-9]/g, '');
  if (formattedPhone.startsWith('0')) {
    formattedPhone = '62' + formattedPhone.substring(1);
  }
  const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ==================== TAB 5: KALKULATOR HARGA & MARGIN ====================
function updateMarginSlider(val) {
  document.getElementById('calc-margin-val').innerText = val + '%';
  calculatePricingTiers();
}

function calculatePricingTiers() {
  const costPrice = parseInt(document.getElementById('calc-cost-price')?.value, 10) || 0;
  const packCost = parseInt(document.getElementById('calc-pack-cost')?.value, 10) || 0;
  const opsCost = parseInt(document.getElementById('calc-ops-cost')?.value, 10) || 0;
  const targetMargin = parseInt(document.getElementById('calc-target-margin')?.value, 10) || 20;

  const totalBaseCost = costPrice + packCost + opsCost;
  document.getElementById('calc-total-base-cost').innerText = formatRupiah(totalBaseCost);

  // Rumus Margin Murni: Harga Jual = Modal / (1 - Margin%)
  // 1. Eceran
  const retailMarginRatio = targetMargin / 100;
  const retailPrice = retailMarginRatio < 1 ? Math.round(totalBaseCost / (1 - retailMarginRatio)) : totalBaseCost;
  const retailProfit = retailPrice - totalBaseCost;

  document.getElementById('tier-retail-margin').innerText = `Margin ${targetMargin}%`;
  document.getElementById('tier-retail-price').innerText = formatRupiah(retailPrice);
  document.getElementById('tier-retail-profit').innerText = `Laba: ${formatRupiah(retailProfit)} / unit`;

  // 2. Grosir (Margin ~12%)
  const wholesaleMarginRatio = 0.12;
  const wholesalePrice = Math.round(totalBaseCost / (1 - wholesaleMarginRatio));
  const wholesaleProfit = wholesalePrice - totalBaseCost;

  document.getElementById('tier-wholesale-price').innerText = formatRupiah(wholesalePrice);
  document.getElementById('tier-wholesale-profit').innerText = `Laba: ${formatRupiah(wholesaleProfit)} / unit`;

  // 3. Reseller (Margin ~16%)
  const resellerMarginRatio = 0.16;
  const resellerPrice = Math.round(totalBaseCost / (1 - resellerMarginRatio));
  const resellerProfit = resellerPrice - totalBaseCost;

  document.getElementById('tier-reseller-price').innerText = formatRupiah(resellerPrice);
  document.getElementById('tier-reseller-profit').innerText = `Laba: ${formatRupiah(resellerProfit)} / unit`;
}

// ==================== TAB 6: ASISTEN TEMANUSAHA ====================
function renderChatHistory() {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  container.innerHTML = state.chatHistory.map(msg => {
    const isAi = msg.sender === 'ai';
    return `
      <div class="flex items-start space-x-2.5 ${isAi ? '' : 'flex-row-reverse space-x-reverse'}">
        <div class="w-8 h-8 rounded-full ${isAi ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'} flex items-center justify-center text-xs font-bold shrink-0">
          ${isAi ? 'TU' : 'Anda'}
        </div>
        <div class="max-w-lg p-3.5 rounded-2xl text-xs leading-relaxed ${isAi ? 'bg-white border border-slate-200 text-slate-800 shadow-sm' : 'bg-emerald-600 text-white'}">
          <div class="whitespace-pre-line">${msg.text}</div>
          <span class="text-[9px] block mt-1.5 opacity-60 text-right">${msg.time}</span>
        </div>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
}

function askQuickPrompt(promptText) {
  document.getElementById('chat-input').value = promptText;
  handleChatSubmit(new Event('submit'));
}

function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const question = input.value.trim();
  if (!question) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Tambah chat user
  state.chatHistory.push({
    sender: 'user',
    time: timeStr,
    text: question
  });

  input.value = '';
  renderChatHistory();

  // AI menganalisis data riil
  const metrics = computeMetrics();
  const q = question.toLowerCase();
  let aiReply = '';

  if (q.includes('laba') || q.includes('untung') || q.includes('tipis') || q.includes('turun')) {
    const marginPct = metrics.totalSales > 0 ? Math.round((metrics.grossProfit / metrics.totalSales) * 100) : 0;
    aiReply = `Berdasarkan kalkulasi transaksi hari ini:\n\n• **Total Penjualan:** ${formatRupiah(metrics.totalSales)}\n• **Modal Pokok Barang (HPP):** ${formatRupiah(metrics.totalHPP)} (sekitar ${100 - marginPct}% dari omzet)\n• **Biaya Operasional Toko:** ${formatRupiah(metrics.totalOpsExpenses)}\n• **Laba Bersih Riil:** ${formatRupiah(metrics.netProfit)}\n\n💡 **Diagnosa TemanUsaha:**\nMargin laba kotor toko Anda berkisar **${marginPct}%**. Bila terasa tipis, penyebab terbesarnya adalah produk sembako pokok (beras, minyak, telur) memiliki margin kecil (8%-12%).\n\n🎯 **Saran Tindakan:**\nSetiap pelanggan beli beras/minyak, tawarkan produk dengan margin tebal di atas 20% seperti kopi sachet, saus, atau cemilan untuk mendongkrak keuntungan harian.`;
  } else if (q.includes('paling untung') || q.includes('laris') || q.includes('produk mana')) {
    const sorted = [...state.products].map(p => {
      const marginRp = p.sellPrice - p.costPrice;
      const marginPct = Math.round((marginRp / p.sellPrice) * 100);
      const estDaily = marginRp * p.dailySalesAvg;
      return { ...p, marginRp, marginPct, estDaily };
    }).sort((a, b) => b.estDaily - a.estDaily);

    const p1 = sorted[0];
    const p2 = sorted[1];
    aiReply = `Berikut data produk terbaik toko Anda:\n\n🥇 **Penyumbang Laba Harian Terbesar:**\n1. **${p1.name}**: Estimasi laba ${formatRupiah(p1.estDaily)}/hari (~${p1.dailySalesAvg} ${p1.unit}/hari, margin ${p1.marginPct}%)\n2. **${p2.name}**: Estimasi laba ${formatRupiah(p2.estDaily)}/hari\n\n🎯 **Saran TemanUsaha:**\nJangan sampai kedua barang ini kehabisan stok, karena inilah mesin penghasil uang kas harian toko Anda!`;
  } else if (q.includes('modal') || q.includes('5 juta') || q.includes('uang')) {
    const restockEst = metrics.criticalItems.reduce((acc, i) => acc + i.costEst, 0);
    aiReply = `Jika Anda memiliki modal cadangan Rp 5 juta, berikut saran pembagian alokasi paling aman:\n\n1. **Belanja Barang Stok Kritis (40% - ~${formatRupiah(restockEst || 1500000)}):**\nAmankan barang cepat laku yang hampir habis (${metrics.criticalItems.map(i => i.name).join(', ') || 'Beras & Minyak'}).\n\n2. **Kas Cadangan Operasional (35% - Rp 1.750.000):**\nSimpan di rekening terpisah untuk antisipasi distributor naik harga mendadak.\n\n3. **Coba Produk Baru (15% - Rp 750.000):**\nBelanja produk yang sering ditanyakan tetangga tetapi belum Anda jual.\n\n4. **Hak Uang Pribadi (10% - Rp 500.000):**\nSisihkan untuk keperluan rumah tangga agar tidak mengganggu uang kas toko.`;
  } else if (q.includes('pribadi') || q.includes('ambil uang') || q.includes('250')) {
    if (metrics.isPersonalOverdrawn) {
      aiReply = `⚠️ **Jangan Ambil Uang Kas Dulu Hari Ini!**\n\nCatatan Anda menunjukkan hari ini sudah diambil uang pribadi sebesar ${formatRupiah(metrics.totalPersonalDraw)}, padahal laba bersih baru ${formatRupiah(metrics.netProfit)}.\n\nSudah ada **${formatRupiah(metrics.capitalErosionAmount)} modal belanja barang yang tergerus**. Jika diambil Rp 250.000 lagi, modal belanja barang besok akan semakin kurang.`;
    } else {
      aiReply = `✅ **Aman untuk Diambil!**\n\nSetelah mengamankan modal belanja barang terjual (${formatRupiah(metrics.lockedRestockFund)}) dan biaya operasional, sisa laba bersih Anda saat ini adalah **${formatRupiah(metrics.safePersonalAllowance)}**.\n\nMengambil Rp 250.000 masih dalam batas aman dan tidak mengganggu modal belanja barang toko.`;
    }
  } else if (q.includes('karyawan') || q.includes('pegawai')) {
    aiReply = `Mari kita hitung secara rasional tanpa tebak-tebakan:\n\n• Misalkan gaji 1 karyawan toko adalah Rp 1.500.000/bulan.\n• Rata-rata margin bersih toko Anda adalah ~12%.\n• Untuk menutup gaji tersebut, toko harus menghasilkan omzet tambahan minimal:\n  Rp 1.500.000 ÷ 12% = **Rp 12.500.000/bulan** (~Rp 420.000/hari).\n\n💡 **Kesimpulan TemanUsaha:**\nBila dengan ada karyawan Anda bisa fokus menambah omzet di atas Rp 420.000/hari (misal pesan antar grosir atau katering), maka merekrut karyawan **sangat layak**. Namun jika hanya untuk menjaga kasir sementara omzet tetap sama, sebaiknya gunakan pencatatan kilat ini terlebih dahulu.`;
  } else {
    aiReply = `Saya telah memeriksa pembukuan toko Anda hari ini:\n- Total omzet: ${formatRupiah(metrics.totalSales)}\n- Laba bersih: ${formatRupiah(metrics.netProfit)}\n- Sisa kas fisik di laci: ${formatRupiah(metrics.cashInHand)}\n- Modal tertahan di stok: ${formatRupiah(metrics.totalInventoryAssetValue)}\n\nAda yang perlu kita bahas lebih detail mengenai stok kritis, piutang, atau strategi penjualan?`;
  }

  setTimeout(() => {
    state.chatHistory.push({
      sender: 'ai',
      time: timeStr,
      text: aiReply
    });
    saveState();
    renderChatHistory();
  }, 400);
}

// ==================== TAB 7: IDE PROMOSI & PEMASARAN ====================
function renderMarketingOptions() {
  const select = document.getElementById('promo-product-select');
  if (!select) return;

  select.innerHTML = state.products.map(p => {
    return `<option value="${p.id}">${p.name} (Stok: ${p.stock} ${p.unit} - ${formatRupiah(p.sellPrice)})</option>`;
  }).join('');

  generatePromoText();
}

function generatePromoText() {
  const prodId = document.getElementById('promo-product-select')?.value;
  const style = document.querySelector('input[name="promoStyle"]:checked')?.value || 'friendly';
  const prod = state.products.find(p => p.id === prodId) || state.products[0];

  if (!prod) return;

  let text = '';
  const badge = document.getElementById('promo-badge-style');

  if (style === 'friendly') {
    badge.innerText = 'Format Status WhatsApp Santai';
    text = `Halo bapak-ibu tetangga semuanya 🙏😊\n\nYang mau masak atau stok kebutuhan dapur, di Toko Berkah Barokah lagi ready *${prod.name}* nih.\n\nHarga bersahabat cuma *${formatRupiah(prod.sellPrice)}* aja per ${prod.unit}.\n\nBisa langsung mampir ke toko atau mau dititip anterin ke rumah juga bisa ya. Yang mau pesan silakan balas chat ini ya Bu/Pak 🙏`;
  } else if (style === 'bundle') {
    badge.innerText = 'Format Paket Hemat Cuci Gudang';
    text = `🔥 *PROMO PAKET HEMAT MINGGU INI!* 🔥\n\nDapatkan *${prod.name}* dengan harga spesial hemat hanya *${formatRupiah(prod.sellPrice)}*!\n\n💡 _Tips Dapur:_ Cocok banget disandingkan dengan bahan pokok lainnya buat stok masak sekeluarga seminggu ke depan.\n\nStok terbatas ya Bun, siapa cepat dia dapat. Yuk amankan sebelum kehabisan, chat kami sekarang juga ya! 🙏✨`;
  } else if (style === 'story') {
    badge.innerText = 'Format Cerita / Edukasi';
    text = `Banyak yang tanya ke kami: _"Kenapa ${prod.name} di Toko Berkah Barokah selalu jadi langganan ibu-ibu?"_\n\nJawabannya karena kualitasnya selalu terjaga, barang baru dari distributor, dan harganya tetap ramah di kantong (${formatRupiah(prod.sellPrice)}).\n\nYuk pastikan stok dapur keluarga tetap aman hari ini. Mampir ke Toko Berkah Barokah ya ibu-ibu! 🙏😊`;
  } else if (style === 'urgent') {
    badge.innerText = 'Format Gercep / Stok Terbatas';
    text = `⚠️ *KABAR KILAT: Sisa ${prod.stock} ${prod.unit} Terakhir!* ⚠️\n\nUntuk pelanggan setia, *${prod.name}* sisa ${prod.stock} ${prod.unit} lagi sebelum kiriman distributor minggu depan.\n\nHarga tetap normal *${formatRupiah(prod.sellPrice)}*.\n\nYang butuh buat masak hari ini atau besok, langsung amankan sebelum keduluan tetangga ya Bun. Chat sekarang! 🙏`;
  }

  document.getElementById('promo-output-text').value = text;
}

function copyPromoText() {
  const text = document.getElementById('promo-output-text').value;
  navigator.clipboard.writeText(text);
  const label = document.getElementById('btn-copy-promo-label');
  label.innerText = 'Tersalin! ✓';
  setTimeout(() => { label.innerText = 'Salin Teks'; }, 2000);
}

function sharePromoWhatsApp() {
  const text = document.getElementById('promo-output-text').value;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ==================== NAVIGASI TAB & MENU GARIS TIGA ====================
function toggleSideMenu() {
  const container = document.getElementById('side-menu-container');
  if (!container) return;
  if (container.classList.contains('hidden')) {
    openSideMenu();
  } else {
    closeSideMenu();
  }
}

function openSideMenu() {
  const container = document.getElementById('side-menu-container');
  if (!container) return;
  container.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSideMenu() {
  const container = document.getElementById('side-menu-container');
  if (!container) return;
  container.classList.add('hidden');
  document.body.style.overflow = '';
}

function selectMenu(tabId) {
  closeSideMenu();
  switchTab(tabId);
}

function switchTab(tabId) {
  state.activeTab = tabId;
  const tabs = ['dashboard', 'cashier', 'inventory', 'debts', 'pricing', 'assistant', 'marketing'];
  const titles = {
    dashboard: '📊 Kondisi Usaha',
    cashier: '⚡ Catat Cepat',
    inventory: '📦 Stok & Belanja Barang',
    debts: '📒 Buku Piutang',
    pricing: '🏷️ Kalkulator Harga',
    assistant: '💬 Tanya TemanUsaha',
    marketing: '📢 Ide Promosi'
  };

  const pillTitle = document.getElementById('header-active-page-title');
  if (pillTitle && titles[tabId]) {
    pillTitle.innerText = titles[tabId];
  }

  tabs.forEach(t => {
    const section = document.getElementById(`tab-${t}`);
    const topBtn = document.getElementById(`tab-btn-${t}`);
    const drawerBtn = document.getElementById(`drawer-btn-${t}`);

    if (t === tabId) {
      if (section) section.classList.remove('hidden');
      if (topBtn) topBtn.className = 'tab-btn py-2.5 px-3 rounded-none border-b-2 border-emerald-600 text-emerald-700 font-bold flex items-center space-x-1.5 whitespace-nowrap';
      if (drawerBtn) drawerBtn.className = 'w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60 shadow-sm';
    } else {
      if (section) section.classList.add('hidden');
      if (topBtn) topBtn.className = 'tab-btn py-2.5 px-3 rounded-none border-b-2 border-transparent text-slate-600 hover:text-slate-900 flex items-center space-x-1.5 whitespace-nowrap';
      if (drawerBtn) drawerBtn.className = 'w-full flex items-center justify-between p-3 rounded-xl transition-all text-left group hover:bg-slate-50 text-slate-700 font-semibold border border-transparent';
    }
  });

  if (tabId === 'assistant') {
    renderChatHistory();
  }
}

// Jalankan aplikasi saat dokumen siap
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
