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
const DEFAULT_STORE_PROFILE = {
  name: 'Toko TemanUsaha',
  type: 'Sembako & Kebutuhan Harian',
  phone: '',
  address: '',
  logo: '🏪',
  email: ''
};

const DEFAULT_SUBSCRIPTION = {
  plan: 'trial',
  planName: 'Masa Uji Coba Gratis (30 Hari)',
  status: 'active',
  startDate: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
};

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
  storeProfile: { ...DEFAULT_STORE_PROFILE },
  subscription: { ...DEFAULT_SUBSCRIPTION },
  currentUser: null,
  currentPaymentPlan: {
    id: '6_months',
    name: 'Paket Hemat (6 Bulan)',
    amount: 150000
  },
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

// ==================== STORE LANDING PAGE (untuk URL slug toko) ====================

/**
 * Tampilkan halaman profil publik toko ketika seseorang mengakses URL slug toko.
 * Contoh: https://andhyz16.github.io/temanusaha/humairasembako
 */
function showStoreLandingPage(store) {
  // Sembunyikan app shell utama
  const appMain = document.getElementById('main-app-shell');
  if (appMain) appMain.style.display = 'none';
  
  const header = document.getElementById('main-header');
  if (header) header.style.display = 'none';
  
  // Update judul halaman
  document.title = `${store.storeName} - TemanUsaha`;
  
  // Buat overlay landing page toko
  const overlay = document.createElement('div');
  overlay.id = 'store-public-page';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9000;overflow-y:auto;background:#f8fafc;';
  
  const businessEmoji = getBusinessEmoji(store.businessType);
  const baseUrl = 'https://andhyz16.github.io/temanusaha';
  const storeUrl = `${baseUrl}/${store.slug || generateSlug(store.storeName)}`;
  
  overlay.innerHTML = `
    <!-- Header Navigasi TemanUsaha -->
    <div style="background:linear-gradient(135deg,#064e3b,#065f46);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;">
      <a href="${baseUrl}/" style="display:flex;align-items:center;gap:8px;text-decoration:none;">
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;">🤝</div>
        <span style="color:white;font-weight:800;font-size:14px;">TemanUsaha</span>
      </a>
      <button onclick="openAuthModal()" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);padding:6px 14px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;">
        Daftar / Masuk Toko
      </button>
    </div>
    
    <!-- Hero Card Toko -->
    <div style="max-width:480px;margin:0 auto;padding:24px 16px;">
      <div style="background:white;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-bottom:16px;">
        <!-- Banner Toko -->
        <div style="background:linear-gradient(135deg,#064e3b,#047857,#059669);padding:32px 24px;text-align:center;position:relative;">
          <div style="width:72px;height:72px;background:rgba(255,255,255,0.15);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 12px;border:3px solid rgba(255,255,255,0.3);">
            ${businessEmoji}
          </div>
          <h1 style="color:white;font-size:22px;font-weight:800;margin:0 0 4px;">${store.storeName}</h1>
          <div style="color:rgba(255,255,255,0.8);font-size:13px;">${store.businessType || 'Usaha UMKM'}</div>
          <div style="margin-top:12px;display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 12px;">
            <span style="width:8px;height:8px;background:#4ade80;border-radius:50%;display:inline-block;"></span>
            <span style="color:white;font-size:11px;font-weight:600;">Toko Resmi TemanUsaha</span>
          </div>
        </div>
        
        <!-- Info Toko -->
        <div style="padding:20px 24px;">
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${store.phone ? `<div style="display:flex;align-items:center;gap:12px;">
              <div style="width:36px;height:36px;background:#ecfdf5;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">📱</div>
              <div>
                <div style="font-size:10px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Nomor WhatsApp</div>
                <div style="font-size:14px;font-weight:700;color:#0f172a;">+62${store.phone.replace(/^0/, '')}</div>
              </div>
            </div>` : ''}
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:36px;height:36px;background:#ecfdf5;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">🔗</div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:10px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Alamat Toko Online</div>
                <div style="font-size:11px;color:#059669;font-weight:700;word-break:break-all;">${storeUrl}</div>
              </div>
            </div>
          </div>
          
          <!-- Tombol Hubungi -->
          ${store.phone ? `<a href="https://wa.me/62${store.phone.replace(/^0/, '')}?text=Halo%20${encodeURIComponent(store.storeName)}%2C%20saya%20mau%20bertanya%20tentang%20produk%20Anda" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:16px;background:#25D366;color:white;text-decoration:none;padding:12px;border-radius:12px;font-weight:700;font-size:14px;">
            <span>💬</span>
            <span>Hubungi via WhatsApp</span>
          </a>` : ''}
        </div>
      </div>
      
      <!-- Powered by TemanUsaha -->
      <div style="text-align:center;padding:16px;">
        <div style="font-size:11px;color:#94a3b8;margin-bottom:8px;">Toko ini menggunakan aplikasi kasir</div>
        <a href="${baseUrl}/" style="display:inline-flex;align-items:center;gap:8px;background:white;border:1.5px solid #e2e8f0;border-radius:12px;padding:8px 16px;text-decoration:none;">
          <span style="font-size:16px;">🤝</span>
          <div style="text-align:left;">
            <div style="font-size:13px;font-weight:800;color:#064e3b;">TemanUsaha</div>
            <div style="font-size:10px;color:#64748b;">Sahabat Bisnis UMKM Indonesia</div>
          </div>
        </a>
        
        <div style="margin-top:16px;">
          <div style="font-size:12px;color:#64748b;margin-bottom:8px;">Ingin punya toko online seperti ini?</div>
          <button onclick="openAuthModal()" style="background:linear-gradient(135deg,#059669,#047857);color:white;border:none;padding:12px 24px;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;width:100%;">
            🆓 Daftar Gratis 30 Hari Sekarang!
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.prepend(overlay);
  
  // Tampilkan auth modal setelah delay jika user belum login
  if (!state.currentUser) {
    // Jangan buka auth modal otomatis — biarkan user klik sendiri dari tombol
    // Tapi siapkan auth modal agar bisa dibuka
  }
}

/**
 * Tampilkan halaman "Toko Tidak Ditemukan" jika slug tidak ada di database.
 */
function showStoreNotFound(slug) {
  const header = document.getElementById('main-header');
  if (header) header.style.display = 'none';
  
  const appMain = document.getElementById('main-app-shell');
  if (appMain) appMain.style.display = 'none';
  
  document.title = 'Toko Tidak Ditemukan - TemanUsaha';
  
  const overlay = document.createElement('div');
  overlay.id = 'store-not-found-page';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9000;overflow-y:auto;background:#f8fafc;';
  
  const baseUrl = 'https://andhyz16.github.io/temanusaha';
  
  overlay.innerHTML = `
    <div style="background:linear-gradient(135deg,#064e3b,#065f46);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;">
      <a href="${baseUrl}/" style="display:flex;align-items:center;gap:8px;text-decoration:none;">
        <span style="color:white;font-weight:800;font-size:14px;">🤝 TemanUsaha</span>
      </a>
    </div>
    <div style="max-width:400px;margin:60px auto;padding:24px;text-align:center;">
      <div style="font-size:64px;margin-bottom:16px;">🏪</div>
      <h1 style="font-size:20px;font-weight:800;color:#0f172a;margin-bottom:8px;">Toko Tidak Ditemukan</h1>
      <p style="color:#64748b;font-size:14px;margin-bottom:24px;">Toko dengan alamat "<strong>${slug}</strong>" belum terdaftar di TemanUsaha.</p>
      <a href="${baseUrl}/" style="display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,#059669,#047857);color:white;text-decoration:none;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;">
        ← Kembali ke Beranda
      </a>
    </div>
  `;
  
  document.body.prepend(overlay);
}

/**
 * Mendapatkan emoji berdasarkan jenis usaha.
 */
function getBusinessEmoji(businessType) {
  const emojiMap = {
    'Sembako & Kebutuhan Harian': '🛒',
    'Toko Pakaian & Fashion': '👗',
    'Pakaian & Fashion': '👗',
    'Warung Makan & Kuliner': '🍜',
    'Warung Makan & Minuman': '🍜',
    'Konter Pulsa & Aksesoris HP': '📱',
    'Elektronik & Gadget': '📱',
    'Toko Bangunan & Perkakas': '🏗️',
    'Bengkel & Sparepart': '🔧',
    'Reseller & Toko Online': '🛍️',
    'Kosmetik & Kecantikan': '💄',
    'Perabot Rumah Tangga': '🏠',
    'Toko Kelontong': '🏪',
    'Apotek & Kesehatan': '💊',
    'Toko Online': '🛍️',
  };
  return emojiMap[businessType] || '🏪';
}

/**
 * Menghasilkan data demo inventaris, transaksi, dan pelanggan yang relevan
 * sesuai dengan jenis usaha yang dipilih oleh pengguna saat pendaftaran.
 */
function getDemoDataForBusinessType(businessType, storeName) {
  const type = businessType || 'Sembako & Kebutuhan Harian';

  if (type === 'Toko Pakaian & Fashion' || type === 'Pakaian & Fashion') {
    return {
      logo: '👗',
      initialCash: 1500000,
      products: [
        { id: 'prod-f-1', name: 'Daster Rayon Motif Premium', category: 'Fashion Wanita', costPrice: 38000, sellPrice: 55000, stock: 8, minStock: 15, dailySalesAvg: 4.0, unit: 'pcs' },
        { id: 'prod-f-2', name: 'Gamis Crinkle Airflow Polos', category: 'Fashion Wanita', costPrice: 75000, sellPrice: 110000, stock: 4, minStock: 10, dailySalesAvg: 2.5, unit: 'pcs' },
        { id: 'prod-f-3', name: 'Hijab Segiempat Voal Premium', category: 'Hijab & Jilbab', costPrice: 16000, sellPrice: 28000, stock: 28, minStock: 12, dailySalesAvg: 5.5, unit: 'pcs' },
        { id: 'prod-f-4', name: 'Celana Kulot Highwaist Linen', category: 'Bawahan', costPrice: 48000, sellPrice: 75000, stock: 6, minStock: 12, dailySalesAvg: 3.0, unit: 'pcs' },
        { id: 'prod-f-5', name: 'Kemeja Flanel Oversize Pria/Wanita', category: 'Atasan', costPrice: 62000, sellPrice: 95000, stock: 5, minStock: 8, dailySalesAvg: 2.0, unit: 'pcs' },
        { id: 'prod-f-6', name: 'Kaos Polos Cotton Combed 30s', category: 'Atasan', costPrice: 28000, sellPrice: 45000, stock: 32, minStock: 15, dailySalesAvg: 6.0, unit: 'pcs' },
        { id: 'prod-f-7', name: 'Rok Plisket Mayung Premium', category: 'Bawahan', costPrice: 40000, sellPrice: 65000, stock: 10, minStock: 8, dailySalesAvg: 2.5, unit: 'pcs' },
        { id: 'prod-f-8', name: 'Mukena Dewasa Katun Rayon Adem', category: 'Perlengkapan Ibadah', costPrice: 72000, sellPrice: 115000, stock: 3, minStock: 6, dailySalesAvg: 1.5, unit: 'set' }
      ],
      customers: [
        { id: 'cust-f-1', name: 'Bu Linda (Reseller Gamis)', phone: '081234567891', debtAmount: 385000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Gamis Crinkle 2 + Daster 3' },
        { id: 'cust-f-2', name: 'Mbak Ayu (Pelanggan Tetap)', phone: '081987654321', debtAmount: 140000, dueDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], notes: 'Kulot Linen 1 + Hijab Voal 2' },
        { id: 'cust-f-3', name: 'Bu RT Wardah', phone: '085711223344', debtAmount: 75000, dueDate: new Date().toISOString().split('T')[0], notes: 'Daster Rayon 1 pcs' }
      ],
      transactions: [
        {
          id: 'trx-f-1',
          time: '09:20',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [{ productId: 'prod-f-1', name: 'Daster Rayon Motif Premium', qty: 2, price: 55000, cost: 38000 }],
          totalAmount: 110000,
          totalCost: 76000,
          grossProfit: 34000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-f-2',
          time: '11:15',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-f-4', name: 'Celana Kulot Highwaist Linen', qty: 1, price: 75000, cost: 48000 },
            { productId: 'prod-f-3', name: 'Hijab Segiempat Voal Premium', qty: 2, price: 28000, cost: 16000 }
          ],
          totalAmount: 131000,
          totalCost: 80000,
          grossProfit: 51000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-f-3',
          time: '12:30',
          type: 'expense_ops',
          description: 'Plastik polymailer kemasan + hanger baju toko',
          category: 'Plastik & Kemasan',
          totalAmount: 35000
        },
        {
          id: 'trx-f-4',
          time: '14:00',
          type: 'sale',
          customer: 'Bu Linda (Reseller Gamis)',
          items: [
            { productId: 'prod-f-2', name: 'Gamis Crinkle Airflow Polos', qty: 2, price: 110000, cost: 75000 },
            { productId: 'prod-f-1', name: 'Daster Rayon Motif Premium', qty: 3, price: 55000, cost: 38000 }
          ],
          totalAmount: 385000,
          totalCost: 264000,
          grossProfit: 121000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-f-5',
          time: '15:10',
          type: 'personal_draw',
          description: 'Uang belanja dapur & saku anak',
          category: 'Uang Pribadi',
          totalAmount: 120000
        }
      ]
    };
  }

  if (type === 'Warung Makan & Kuliner' || type === 'Warung Makan & Minuman') {
    return {
      logo: '🍜',
      initialCash: 850000,
      products: [
        { id: 'prod-k-1', name: 'Paket Nasi Ayam Geprek Sambal Bawang', category: 'Makanan Berat', costPrice: 11000, sellPrice: 17000, stock: 25, minStock: 10, dailySalesAvg: 18.0, unit: 'porsi' },
        { id: 'prod-k-2', name: 'Nasi Goreng Spesial Telur Ceplok', category: 'Makanan Berat', costPrice: 9000, sellPrice: 15000, stock: 30, minStock: 10, dailySalesAvg: 15.0, unit: 'porsi' },
        { id: 'prod-k-3', name: 'Mie Ayam Bakso Urat Jumbo', category: 'Mie & Bakso', costPrice: 12000, sellPrice: 18000, stock: 18, minStock: 10, dailySalesAvg: 12.0, unit: 'mangkuk' },
        { id: 'prod-k-4', name: 'Es Teh Manis Jumbo Segar', category: 'Minuman Segar', costPrice: 1800, sellPrice: 5000, stock: 85, minStock: 20, dailySalesAvg: 30.0, unit: 'gelas' },
        { id: 'prod-k-5', name: 'Kopi Susu Gula Aren Cup', category: 'Minuman Segar', costPrice: 5500, sellPrice: 12000, stock: 35, minStock: 15, dailySalesAvg: 10.0, unit: 'cup' },
        { id: 'prod-k-6', name: 'Tempe Mendoan Hangat (Isi 4)', category: 'Camilan & Gorengan', costPrice: 4000, sellPrice: 8000, stock: 20, minStock: 10, dailySalesAvg: 12.0, unit: 'porsi' },
        { id: 'prod-k-7', name: 'Jus Alpukat Kocok Kental', category: 'Minuman Segar', costPrice: 6500, sellPrice: 14000, stock: 14, minStock: 8, dailySalesAvg: 7.0, unit: 'cup' },
        { id: 'prod-k-8', name: 'Kerupuk Kaleng Putih', category: 'Pelengkap', costPrice: 800, sellPrice: 2000, stock: 50, minStock: 15, dailySalesAvg: 20.0, unit: 'buah' }
      ],
      customers: [
        { id: 'cust-k-1', name: 'Pak Joko (Bengkel Sebelah)', phone: '081234567891', debtAmount: 145000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Makan siang mingguan bengkel' },
        { id: 'cust-k-2', name: 'Bu Siti (Kantor Kelurahan)', phone: '081987654321', debtAmount: 280000, dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], notes: 'Paket makan siang rapat kelurahan' },
        { id: 'cust-k-3', name: 'Mas Rian (Driver Ojol)', phone: '085711223344', debtAmount: 50000, dueDate: new Date().toISOString().split('T')[0], notes: 'Ayam Geprek + Es Teh' }
      ],
      transactions: [
        {
          id: 'trx-k-1',
          time: '11:45',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-k-1', name: 'Paket Nasi Ayam Geprek Sambal Bawang', qty: 2, price: 17000, cost: 11000 },
            { productId: 'prod-k-4', name: 'Es Teh Manis Jumbo Segar', qty: 2, price: 5000, cost: 1800 }
          ],
          totalAmount: 44000,
          totalCost: 25600,
          grossProfit: 18400,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-k-2',
          time: '12:30',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-k-2', name: 'Nasi Goreng Spesial Telur Ceplok', qty: 3, price: 15000, cost: 9000 },
            { productId: 'prod-k-6', name: 'Tempe Mendoan Hangat (Isi 4)', qty: 2, price: 8000, cost: 4000 },
            { productId: 'prod-k-4', name: 'Es Teh Manis Jumbo Segar', qty: 3, price: 5000, cost: 1800 }
          ],
          totalAmount: 76000,
          totalCost: 40400,
          grossProfit: 35600,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-k-3',
          time: '13:00',
          type: 'expense_ops',
          description: 'Gas Elpiji 3kg + Minyak Goreng Curah 2kg',
          category: 'Bahan Baku & Dapur',
          totalAmount: 48000
        },
        {
          id: 'trx-k-4',
          time: '13:30',
          type: 'sale',
          customer: 'Bu Siti (Kantor Kelurahan)',
          items: [
            { productId: 'prod-k-1', name: 'Paket Nasi Ayam Geprek Sambal Bawang', qty: 15, price: 17000, cost: 11000 },
            { productId: 'prod-k-4', name: 'Es Teh Manis Jumbo Segar', qty: 15, price: 5000, cost: 1800 }
          ],
          totalAmount: 330000,
          totalCost: 192000,
          grossProfit: 138000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-k-5',
          time: '14:45',
          type: 'personal_draw',
          description: 'Uang belanja sayur pasar rumah',
          category: 'Uang Pribadi',
          totalAmount: 75000
        }
      ]
    };
  }

  if (type === 'Konter Pulsa & Aksesoris HP' || type === 'Elektronik & Gadget') {
    return {
      logo: '📱',
      initialCash: 1200000,
      products: [
        { id: 'prod-hp-1', name: 'Kabel Data Fast Charging Type-C 3A', category: 'Kabel & Charger', costPrice: 12000, sellPrice: 25000, stock: 15, minStock: 8, dailySalesAvg: 3.5, unit: 'pcs' },
        { id: 'prod-hp-2', name: 'TWS Bluetooth Earbuds Wireless Stereo', category: 'Audio & Headset', costPrice: 55000, sellPrice: 95000, stock: 5, minStock: 6, dailySalesAvg: 1.5, unit: 'unit' },
        { id: 'prod-hp-3', name: 'Tempered Glass Full Lem Layar HP', category: 'Pelindung Layar', costPrice: 6000, sellPrice: 20000, stock: 35, minStock: 15, dailySalesAvg: 5.0, unit: 'pcs' },
        { id: 'prod-hp-4', name: 'Kepala Charger Quick Charge 20W', category: 'Kabel & Charger', costPrice: 25000, sellPrice: 48000, stock: 8, minStock: 6, dailySalesAvg: 2.0, unit: 'pcs' },
        { id: 'prod-hp-5', name: 'Powerbank 10.000 mAh Slim Fast Charge', category: 'Powerbank', costPrice: 78000, sellPrice: 135000, stock: 4, minStock: 5, dailySalesAvg: 1.0, unit: 'unit' },
        { id: 'prod-hp-6', name: 'Handsfree Bass Jack 3.5mm Earphone', category: 'Audio & Headset', costPrice: 8000, sellPrice: 20000, stock: 22, minStock: 10, dailySalesAvg: 3.0, unit: 'pcs' },
        { id: 'prod-hp-7', name: 'Holder HP Motor Waterproof Stang', category: 'Aksesoris Motor', costPrice: 22000, sellPrice: 45000, stock: 7, minStock: 6, dailySalesAvg: 1.8, unit: 'pcs' },
        { id: 'prod-hp-8', name: 'Ring Light Mini HP Selfie Clip', category: 'Aksesoris Foto', costPrice: 14000, sellPrice: 30000, stock: 12, minStock: 6, dailySalesAvg: 1.5, unit: 'pcs' }
      ],
      customers: [
        { id: 'cust-hp-1', name: 'Mas Doni (Driver Kurir)', phone: '081234567891', debtAmount: 180000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Powerbank + Holder Motor' },
        { id: 'cust-hp-2', name: 'Pak RT Budi', phone: '081987654321', debtAmount: 95000, dueDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], notes: 'TWS Earbuds Bluetooth' },
        { id: 'cust-hp-3', name: 'Mbak Dita', phone: '085711223344', debtAmount: 45000, dueDate: new Date().toISOString().split('T')[0], notes: 'Kabel Type C + Pasang Tempered' }
      ],
      transactions: [
        {
          id: 'trx-hp-1',
          time: '10:15',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-hp-3', name: 'Tempered Glass Full Lem Layar HP', qty: 1, price: 20000, cost: 6000 },
            { productId: 'prod-hp-1', name: 'Kabel Data Fast Charging Type-C 3A', qty: 1, price: 25000, cost: 12000 }
          ],
          totalAmount: 45000,
          totalCost: 18000,
          grossProfit: 27000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-hp-2',
          time: '12:00',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [{ productId: 'prod-hp-2', name: 'TWS Bluetooth Earbuds Wireless Stereo', qty: 1, price: 95000, cost: 55000 }],
          totalAmount: 95000,
          totalCost: 55000,
          grossProfit: 40000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-hp-3',
          time: '13:15',
          type: 'expense_ops',
          description: 'Lakban bening 2 roll + Bubble wrap packing',
          category: 'Packing & Kemasan',
          totalAmount: 28000
        },
        {
          id: 'trx-hp-4',
          time: '14:20',
          type: 'sale',
          customer: 'Mas Doni (Driver Kurir)',
          items: [
            { productId: 'prod-hp-5', name: 'Powerbank 10.000 mAh Slim Fast Charge', qty: 1, price: 135000, cost: 78000 },
            { productId: 'prod-hp-7', name: 'Holder HP Motor Waterproof Stang', qty: 1, price: 45000, cost: 22000 }
          ],
          totalAmount: 180000,
          totalCost: 100000,
          grossProfit: 80000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-hp-5',
          time: '15:30',
          type: 'personal_draw',
          description: 'Beli makan siang & token listrik rumah',
          category: 'Uang Pribadi',
          totalAmount: 100000
        }
      ]
    };
  }

  if (type === 'Toko Bangunan & Perkakas') {
    return {
      logo: '🏗️',
      initialCash: 2500000,
      products: [
        { id: 'prod-b-1', name: 'Semen Tiga Roda 50kg', category: 'Semen & Pasir', costPrice: 61000, sellPrice: 68000, stock: 40, minStock: 20, dailySalesAvg: 8.0, unit: 'sak' },
        { id: 'prod-b-2', name: 'Cat Tembok Vinilex 5kg Putih', category: 'Cat & Kimia', costPrice: 125000, sellPrice: 145000, stock: 12, minStock: 8, dailySalesAvg: 2.0, unit: 'galon' },
        { id: 'prod-b-3', name: 'Pipa PVC 3/4 inch Maspion AW', category: 'Plumbing & Pipa', costPrice: 26000, sellPrice: 34000, stock: 25, minStock: 15, dailySalesAvg: 4.0, unit: 'batang' },
        { id: 'prod-b-4', name: 'Paku Kayu Campur 5cm - 7cm', category: 'Baut & Paku', costPrice: 16000, sellPrice: 22000, stock: 45, minStock: 15, dailySalesAvg: 5.0, unit: 'kg' },
        { id: 'prod-b-5', name: 'Kuas Cat 3 inch Eterna Gagang Kayu', category: 'Alat Tukang', costPrice: 8500, sellPrice: 14000, stock: 30, minStock: 10, dailySalesAvg: 3.5, unit: 'pcs' },
        { id: 'prod-b-6', name: 'Thinner Super Bintang 1 Liter', category: 'Cat & Kimia', costPrice: 22000, sellPrice: 30000, stock: 18, minStock: 10, dailySalesAvg: 2.5, unit: 'kaleng' },
        { id: 'prod-b-7', name: 'Kunci Pas Ring Set 8-24mm', category: 'Alat Tukang', costPrice: 85000, sellPrice: 130000, stock: 6, minStock: 4, dailySalesAvg: 1.0, unit: 'set' },
        { id: 'prod-b-8', name: 'Saklar Lampu Broco Engkel Single', category: 'Kelistrikan', costPrice: 14000, sellPrice: 21000, stock: 35, minStock: 12, dailySalesAvg: 3.0, unit: 'pcs' }
      ],
      customers: [
        { id: 'cust-b-1', name: 'Pak Mandor Sugeng', phone: '081234567891', debtAmount: 850000, dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], notes: 'Semen 10 sak + Pipa PVC 5 btg' },
        { id: 'cust-b-2', name: 'Tukang Cat Mas Wahyu', phone: '081987654321', debtAmount: 320000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Cat Vinilex 2 galon + Kuas' },
        { id: 'cust-b-3', name: 'Pak Haji Usman', phone: '085711223344', debtAmount: 160000, dueDate: new Date().toISOString().split('T')[0], notes: 'Paku 5kg + Kunci set' }
      ],
      transactions: [
        {
          id: 'trx-b-1',
          time: '08:30',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-b-1', name: 'Semen Tiga Roda 50kg', qty: 3, price: 68000, cost: 61000 },
            { productId: 'prod-b-4', name: 'Paku Kayu Campur 5cm - 7cm', qty: 2, price: 22000, cost: 16000 }
          ],
          totalAmount: 248000,
          totalCost: 215000,
          grossProfit: 33000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-b-2',
          time: '10:45',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-b-2', name: 'Cat Tembok Vinilex 5kg Putih', qty: 1, price: 145000, cost: 125000 },
            { productId: 'prod-b-5', name: 'Kuas Cat 3 inch Eterna Gagang Kayu', qty: 2, price: 14000, cost: 8500 }
          ],
          totalAmount: 173000,
          totalCost: 142000,
          grossProfit: 31000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-b-3',
          time: '12:00',
          type: 'expense_ops',
          description: 'Tali rafia gulung besar + kantong semen bekas',
          category: 'Operasional Gudang',
          totalAmount: 35000
        },
        {
          id: 'trx-b-4',
          time: '13:30',
          type: 'sale',
          customer: 'Pak Mandor Sugeng',
          items: [
            { productId: 'prod-b-1', name: 'Semen Tiga Roda 50kg', qty: 10, price: 68000, cost: 61000 },
            { productId: 'prod-b-3', name: 'Pipa PVC 3/4 inch Maspion AW', qty: 5, price: 34000, cost: 26000 }
          ],
          totalAmount: 850000,
          totalCost: 740000,
          grossProfit: 110000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-b-5',
          time: '15:00',
          type: 'personal_draw',
          description: 'Uang belanja dapur rumah',
          category: 'Uang Pribadi',
          totalAmount: 150000
        }
      ]
    };
  }

  if (type === 'Bengkel & Sparepart') {
    return {
      logo: '🔧',
      initialCash: 1600000,
      products: [
        { id: 'prod-bg-1', name: 'Oli Mesin MPX2 0.8L Matic Honda', category: 'Oli Mesin', costPrice: 46000, sellPrice: 58000, stock: 20, minStock: 10, dailySalesAvg: 4.0, unit: 'botol' },
        { id: 'prod-bg-2', name: 'Oli Shell Advance AX7 10W-40 0.8L', category: 'Oli Mesin', costPrice: 54000, sellPrice: 68000, stock: 15, minStock: 8, dailySalesAvg: 3.0, unit: 'botol' },
        { id: 'prod-bg-3', name: 'Busi Denso Standard U24EPR9', category: 'Busi & Kelistrikan', costPrice: 14000, sellPrice: 25000, stock: 25, minStock: 10, dailySalesAvg: 3.5, unit: 'pcs' },
        { id: 'prod-bg-4', name: 'Kampas Rem Belakang Beat / Vario', category: 'Pengereman', costPrice: 28000, sellPrice: 45000, stock: 12, minStock: 6, dailySalesAvg: 2.0, unit: 'set' },
        { id: 'prod-bg-5', name: 'Ban Tubeless Depan 80/90-14 IRC', category: 'Ban & Velg', costPrice: 165000, sellPrice: 210000, stock: 6, minStock: 4, dailySalesAvg: 1.0, unit: 'buah' },
        { id: 'prod-bg-6', name: 'Cairan Ban Tubeless Anti Bocor 350ml', category: 'Ban & Velg', costPrice: 18000, sellPrice: 30000, stock: 16, minStock: 8, dailySalesAvg: 2.5, unit: 'botol' },
        { id: 'prod-bg-7', name: 'Lampu LED Depan Motor H6 Putih', category: 'Busi & Kelistrikan', costPrice: 24000, sellPrice: 45000, stock: 14, minStock: 6, dailySalesAvg: 2.0, unit: 'pcs' },
        { id: 'prod-bg-8', name: 'Rantai Roda Set Heavy Duty Supra X', category: 'Rantai & Gir', costPrice: 95000, sellPrice: 140000, stock: 5, minStock: 4, dailySalesAvg: 1.0, unit: 'set' }
      ],
      customers: [
        { id: 'cust-bg-1', name: 'Mas Agus (Driver Ojol Grab)', phone: '081234567891', debtAmount: 268000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Ban Tubeless Depan + Oli MPX2' },
        { id: 'cust-bg-2', name: 'Pak Wawan (Pelanggan Servis)', phone: '081987654321', debtAmount: 113000, dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], notes: 'Oli Shell + Kampas Rem' },
        { id: 'cust-bg-3', name: 'Mas Fajar', phone: '085711223344', debtAmount: 70000, dueDate: new Date().toISOString().split('T')[0], notes: 'Lampu LED + Busi' }
      ],
      transactions: [
        {
          id: 'trx-bg-1',
          time: '09:00',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-bg-1', name: 'Oli Mesin MPX2 0.8L Matic Honda', qty: 1, price: 58000, cost: 46000 },
            { productId: 'prod-bg-3', name: 'Busi Denso Standard U24EPR9', qty: 1, price: 25000, cost: 14000 }
          ],
          totalAmount: 83000,
          totalCost: 60000,
          grossProfit: 23000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-bg-2',
          time: '11:20',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-bg-4', name: 'Kampas Rem Belakang Beat / Vario', qty: 1, price: 45000, cost: 28000 },
            { productId: 'prod-bg-6', name: 'Cairan Ban Tubeless Anti Bocor 350ml', qty: 1, price: 30000, cost: 18000 }
          ],
          totalAmount: 75000,
          totalCost: 46000,
          grossProfit: 29000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-bg-3',
          time: '12:45',
          type: 'expense_ops',
          description: 'Kain majun pembersih + bensin cuci sparepart',
          category: 'Operasional Bengkel',
          totalAmount: 30000
        },
        {
          id: 'trx-bg-4',
          time: '14:15',
          type: 'sale',
          customer: 'Mas Agus (Driver Ojol Grab)',
          items: [
            { productId: 'prod-bg-5', name: 'Ban Tubeless Depan 80/90-14 IRC', qty: 1, price: 210000, cost: 165000 },
            { productId: 'prod-bg-1', name: 'Oli Mesin MPX2 0.8L Matic Honda', qty: 1, price: 58000, cost: 46000 }
          ],
          totalAmount: 268000,
          totalCost: 211000,
          grossProfit: 57000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-bg-5',
          time: '16:00',
          type: 'personal_draw',
          description: 'Uang belanja rumah tangga',
          category: 'Uang Pribadi',
          totalAmount: 120000
        }
      ]
    };
  }

  if (type === 'Reseller & Toko Online' || type === 'Kosmetik & Kecantikan' || type === 'Lainnya') {
    return {
      logo: type === 'Kosmetik & Kecantikan' ? '💄' : '🛍️',
      initialCash: 1200000,
      products: [
        { id: 'prod-ol-1', name: 'Paket Brightening Serum Glowing Day/Night', category: 'Skincare', costPrice: 42000, sellPrice: 75000, stock: 15, minStock: 8, dailySalesAvg: 3.0, unit: 'paket' },
        { id: 'prod-ol-2', name: 'Tumbler Stainless Termos 500ml LED Suhu', category: 'Home & Living', costPrice: 32000, sellPrice: 55000, stock: 20, minStock: 10, dailySalesAvg: 3.5, unit: 'pcs' },
        { id: 'prod-ol-3', name: 'Tas Selempang Kanvas Unisex Casual', category: 'Fashion & Tas', costPrice: 38000, sellPrice: 68000, stock: 12, minStock: 6, dailySalesAvg: 2.0, unit: 'pcs' },
        { id: 'prod-ol-4', name: 'Dompet Lipat Kulit Sintetis Slim Pria/Wanita', category: 'Fashion & Tas', costPrice: 22000, sellPrice: 45000, stock: 18, minStock: 8, dailySalesAvg: 2.5, unit: 'pcs' },
        { id: 'prod-ol-5', name: 'Botol Minum 2 Liter Gradasi Motivasi Viral', category: 'Home & Living', costPrice: 19000, sellPrice: 35000, stock: 25, minStock: 10, dailySalesAvg: 4.0, unit: 'pcs' },
        { id: 'prod-ol-6', name: 'Payung Lipat Otomatis Anti Angin & UV', category: 'Home & Living', costPrice: 36000, sellPrice: 60000, stock: 10, minStock: 6, dailySalesAvg: 1.5, unit: 'pcs' },
        { id: 'prod-ol-7', name: 'Kaos Kaki Semata Kaki Ankle (Isi 3 Pasang)', category: 'Fashion & Tas', costPrice: 12000, sellPrice: 25000, stock: 35, minStock: 12, dailySalesAvg: 4.5, unit: 'pack' },
        { id: 'prod-ol-8', name: 'Hand Cream Moisturizer Wangi Buah 30g', category: 'Skincare', costPrice: 8500, sellPrice: 18000, stock: 40, minStock: 15, dailySalesAvg: 5.0, unit: 'tube' }
      ],
      customers: [
        { id: 'cust-ol-1', name: 'Kak Nadia (Pelanggan Shopee/COD)', phone: '081234567891', debtAmount: 198000, dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], notes: 'Paket Serum + Tas Selempang (COD)' },
        { id: 'cust-ol-2', name: 'Reseller Mbak Rini', phone: '081987654321', debtAmount: 165000, dueDate: new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0], notes: 'Tumbler 3 pcs' },
        { id: 'cust-ol-3', name: 'Bu Dosen Mira', phone: '085711223344', debtAmount: 70000, dueDate: new Date().toISOString().split('T')[0], notes: 'Botol 2L + Hand Cream' }
      ],
      transactions: [
        {
          id: 'trx-ol-1',
          time: '10:00',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [{ productId: 'prod-ol-2', name: 'Tumbler Stainless Termos 500ml LED Suhu', qty: 2, price: 55000, cost: 32000 }],
          totalAmount: 110000,
          totalCost: 64000,
          grossProfit: 46000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-ol-2',
          time: '12:30',
          type: 'sale',
          customer: 'Pembeli Langsung',
          items: [
            { productId: 'prod-ol-1', name: 'Paket Brightening Serum Glowing Day/Night', qty: 1, price: 75000, cost: 42000 },
            { productId: 'prod-ol-8', name: 'Hand Cream Moisturizer Wangi Buah 30g', qty: 2, price: 18000, cost: 8500 }
          ],
          totalAmount: 111000,
          totalCost: 59000,
          grossProfit: 52000,
          paymentMethod: 'cash',
          status: 'paid'
        },
        {
          id: 'trx-ol-3',
          time: '13:45',
          type: 'expense_ops',
          description: 'Polymailer bubble wrap + stiker fragile toko',
          category: 'Packing & Ongkir',
          totalAmount: 35000
        },
        {
          id: 'trx-ol-4',
          time: '15:15',
          type: 'sale',
          customer: 'Kak Nadia (Pelanggan Shopee/COD)',
          items: [
            { productId: 'prod-ol-1', name: 'Paket Brightening Serum Glowing Day/Night', qty: 1, price: 75000, cost: 42000 },
            { productId: 'prod-ol-3', name: 'Tas Selempang Kanvas Unisex Casual', qty: 1, price: 68000, cost: 38000 },
            { productId: 'prod-ol-6', name: 'Payung Lipat Otomatis Anti Angin & UV', qty: 1, price: 55000, cost: 36000 }
          ],
          totalAmount: 198000,
          totalCost: 116000,
          grossProfit: 82000,
          paymentMethod: 'debt',
          status: 'pending'
        },
        {
          id: 'trx-ol-5',
          time: '16:30',
          type: 'personal_draw',
          description: 'Uang belanja harian keluarga',
          category: 'Uang Pribadi',
          totalAmount: 100000
        }
      ]
    };
  }

  // Standar: Sembako & Kebutuhan Harian
  return {
    logo: '🛒',
    initialCash: 1250000,
    products: DEFAULT_PRODUCTS,
    customers: DEFAULT_CUSTOMERS,
    transactions: DEFAULT_TRANSACTIONS
  };
}

// ==================== PUBLIC LANDING / AUTH SCREEN ====================

/**
 * Tampilkan halaman awal pendaftaran & login akun toko saat user belum login.
 * Menampilkan portal pendaftaran/login secara penuh dan bersih (tanpa dashboard di belakang).
 */
function showPublicLandingPage() {
  const appMain = document.getElementById('main-app-shell');
  if (appMain) appMain.style.display = 'none';
  const header = document.getElementById('main-header');
  if (header) header.style.display = 'none';
  const sideMenu = document.getElementById('side-menu-container');
  if (sideMenu) sideMenu.style.display = 'none';

  document.title = 'Daftar / Masuk Toko - TemanUsaha';

  // Hapus landing overlay lama jika ada
  const oldLanding = document.getElementById('public-landing-page');
  if (oldLanding) oldLanding.remove();

  // Tampilkan Auth Portal Modal sebagai halaman utama yang solid
  const modal = document.getElementById('auth-portal-modal');
  if (modal) {
    document.body.appendChild(modal);
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.zIndex = '99999';
    modal.style.pointerEvents = 'auto';
    // Background gelap solid elegan: tidak tembus ke dashboard sama sekali
    modal.className = 'fixed inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 flex items-center justify-center p-3 sm:p-4 overflow-y-auto';
    
    // Sembunyikan tombol silang (x) penutup jika belum login, karena ini adalah halaman awal
    const closeBtn = modal.querySelector('button[onclick="closeAuthModal()"]');
    if (closeBtn) closeBtn.style.display = 'none';
    
    // Pastikan tab pendaftaran aktif sebagai default
    switchAuthMode('register');
  }
}

/**
 * Menutup landing page dan membuka form registrasi.
 */
function closeLandingAndRegister() {
  showPublicLandingPage();
  switchAuthMode('register');
}

/**
 * Menutup landing page dan membuka form login.
 */
function closeLandingAndLogin() {
  showPublicLandingPage();
  switchAuthMode('login');
}

// Pastikan fungsi-fungsi tersedia di window global scope
window.showPublicLandingPage = showPublicLandingPage;
window.closeLandingAndRegister = closeLandingAndRegister;
window.closeLandingAndLogin = closeLandingAndLogin;

function initApp() {
  // ==================== PEMBERSIHAN OTOMATIS SATU KALI ====================
  // Bersihkan total cache browser lama agar mulai bersih dari 0 toko
  if (!localStorage.getItem('temanusaha_clean_v4')) {
    localStorage.clear();
    localStorage.setItem('temanusaha_clean_v4', 'true');
  }

  // ==================== CEK URL ROUTING (?toko=slug) ====================
  // Jika ada parameter ?toko=namatoko di URL, muat data toko tersebut
  const urlSlug = getTokoSlugFromURL();
  
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
      if (parsed.storeProfile) state.storeProfile = { ...DEFAULT_STORE_PROFILE, ...parsed.storeProfile };
      if (parsed.subscription) state.subscription = { ...DEFAULT_SUBSCRIPTION, ...parsed.subscription };
      if (parsed.currentUser && !DUMMY_IDS.includes(parsed.currentUser.storeId) && !DUMMY_EMAILS.includes(parsed.currentUser.email)) {
        state.currentUser = parsed.currentUser;
      } else {
        state.currentUser = null;
      }
    } catch (e) {
      loadDefaultData();
    }
  } else {
    loadDefaultData();
  }

  // Inisialisasi Akun Super Admin & Bersihkan Sample Member
  initRegisteredAccounts();

  // Muat akun login yang diingat (Remember Me) atau sesi aktif
  const rememberedUser = localStorage.getItem('temanusaha_remembered_user');
  const activeUser = localStorage.getItem('temanusaha_active_user');
  const userToLoad = rememberedUser || activeUser;
  if (userToLoad) {
    try {
      const parsedUser = JSON.parse(userToLoad);
      if (!DUMMY_IDS.includes(parsedUser.storeId) && !DUMMY_EMAILS.includes(parsedUser.email)) {
        state.currentUser = parsedUser;
        if (state.currentUser.storeName && state.currentUser.role !== 'super_admin') {
          state.storeProfile.name = state.currentUser.storeName;
          state.storeProfile.type = state.currentUser.businessType || state.storeProfile.type;
          state.storeProfile.phone = state.currentUser.phone || state.storeProfile.phone;
          state.storeProfile.email = state.currentUser.email || state.storeProfile.email;
        }
      } else {
        state.currentUser = null;
      }
    } catch (e) {}
  }

  // ==================== HANDLE URL SLUG ROUTING ====================
  // Jika URL berisi ?toko=slug, buka aplikasi toko tersebut
  if (urlSlug) {
    let accounts = [];
    try {
      const raw = localStorage.getItem('temanusaha_registered_accounts');
      if (raw) accounts = JSON.parse(raw);
    } catch(e) {}
    
    const foundStore = accounts.find(a => a.slug === urlSlug || generateSlug(a.storeName) === urlSlug);
    
    if (foundStore) {
      // Toko ditemukan: LANGSUNG BUKA DASHBOARD APLIKASI KASIR TOKO TERSEBUT
      state.currentUser = foundStore;
      state.storeProfile = {
        name: foundStore.storeName,
        type: foundStore.businessType || 'Usaha UMKM',
        phone: foundStore.phone || '',
        email: foundStore.email || '',
        logo: foundStore.logo || getBusinessEmoji(foundStore.businessType),
        address: foundStore.address || 'Alamat Toko Belum Diatur'
      };
      
      localStorage.setItem('temanusaha_active_user', JSON.stringify(foundStore));
      document.title = `${foundStore.storeName} - TemanUsaha`;
      
      removeLandingPageAndRestoreApp();
      renderAll();
    } else {
      // Slug tidak ditemukan di daftar toko
      setTimeout(() => showStoreNotFound(urlSlug), 100);
    }
  }

  // Set default due date to tomorrow
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const cartDueEl = document.getElementById('cart-due-date');
  if (cartDueEl) cartDueEl.value = tomorrow;

  const newDebtDueEl = document.getElementById('new-debt-due');
  if (newDebtDueEl) newDebtDueEl.value = tomorrow;

  calculatePricingTiers();

  // Tampilan awal: Jika belum login dan bukan kunjungan ke slug toko,
  // TAMPILKAN PORTAL PENDAFTARAN & MASUK AKUN (dashboard tetap tersembunyi)
  if (!state.currentUser && !urlSlug) {
    showPublicLandingPage();
  } else if (state.currentUser) {
    // Jika sudah ada user login yang sah, buka dashboard
    removeLandingPageAndRestoreApp();
    renderAll();
  }

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

  // PENTING: Hanya sinkronkan data toko jika pengguna SUDAH login dan memiliki storeId sah!
  // Jangan sync sembarangan ke dokumen dummy (seperti toko-berkah) yang berisi data toko lama.
  if (!state.currentUser || !state.currentUser.storeId || state.currentUser.role === 'super_admin') {
    setCloudStatus('connected', 'Firebase Cloud Siap ✓');
    return;
  }

  const storeDocId = state.currentUser.storeId;
  const storeDocRef = db.collection('stores').doc(storeDocId);

  // Real-time listener dari Firestore Cloud untuk toko yang sedang login
  unsubscribeFirestore = storeDocRef.onSnapshot((doc) => {
    if (doc.exists) {
      const data = doc.data();
      state.initialCash = data.initialCash !== undefined ? data.initialCash : state.initialCash;
      state.products = data.products || state.products;
      state.customers = data.customers || state.customers;
      state.transactions = data.transactions || state.transactions;
      state.chatHistory = data.chatHistory || state.chatHistory;
      if (data.storeProfile) state.storeProfile = { ...state.storeProfile, ...data.storeProfile };
      if (data.subscription) state.subscription = { ...state.subscription, ...data.subscription };

      // Update local storage juga
      localStorage.setItem('temanusaha_db_v1', JSON.stringify({
        initialCash: state.initialCash,
        products: state.products,
        customers: state.customers,
        transactions: state.transactions,
        chatHistory: state.chatHistory,
        storeProfile: state.storeProfile,
        subscription: state.subscription,
        currentUser: state.currentUser
      }));

      setCloudStatus('connected', 'Firebase Terhubung ✓');
      renderAll();
    }
  }, (err) => {
    console.warn('Firestore sync error:', err);
    setCloudStatus('offline', 'Offline');
  });
}

function loadDefaultData() {
  state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  state.customers = JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS));
  state.transactions = JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS));
  state.storeProfile = { ...DEFAULT_STORE_PROFILE };
  state.subscription = { ...DEFAULT_SUBSCRIPTION };
  saveState();
}

function saveState() {
  const payload = {
    initialCash: state.initialCash,
    products: state.products,
    customers: state.customers,
    transactions: state.transactions,
    chatHistory: state.chatHistory,
    storeProfile: state.storeProfile,
    subscription: state.subscription,
    currentUser: state.currentUser
  };

  // Simpan ke LocalStorage seketika
  localStorage.setItem('temanusaha_db_v1', JSON.stringify(payload));

  // Simpan ke Firebase Firestore secara asinkron (hanya jika ada akun toko login)
  if (typeof isFirebaseReady !== 'undefined' && isFirebaseReady && db && state.currentUser && state.currentUser.storeId && state.currentUser.role !== 'super_admin') {
    setCloudStatus('syncing', 'Menyimpan...');
    const storeDocId = state.currentUser.storeId;
    db.collection('stores').doc(storeDocId).set({
      ...payload,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true })
    .then(() => {
      setCloudStatus('connected', 'Cloud Siap ✓');
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
  renderStoreProfile();
  updateSubscriptionUI();
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
  const tabs = ['dashboard', 'cashier', 'inventory', 'debts', 'pricing', 'assistant', 'marketing', 'subscription', 'settings'];
  const titles = {
    dashboard: '📊 Kondisi Usaha',
    cashier: '⚡ Catat Cepat',
    inventory: '📦 Stok & Belanja Barang',
    debts: '📒 Buku Piutang',
    pricing: '🏷️ Kalkulator Harga',
    assistant: '💬 Tanya TemanUsaha',
    marketing: '📢 Ide Promosi',
    subscription: '💳 Perpanjang Sewa Aplikasi',
    settings: '⚙️ Pengaturan Toko & Akun'
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

// ==================== IDENTITAS TOKO & PROFIL ====================

/**
 * Render logo toko: mendukung gambar Base64/URL dan karakter emoji.
 */
function renderLogoElement(element, logoValue, altName = 'Logo Toko') {
  if (!element) return;
  const logo = logoValue || '🏪';
  if (typeof logo === 'string' && (logo.startsWith('data:image/') || logo.startsWith('http://') || logo.startsWith('https://') || logo.startsWith('blob:'))) {
    element.innerHTML = `<img src="${logo}" alt="${altName}" class="w-full h-full object-cover rounded-xl">`;
  } else {
    element.innerHTML = `<span class="flex items-center justify-center w-full h-full">${logo}</span>`;
  }
}

function renderStoreProfile() {
  const profile = state.storeProfile || DEFAULT_STORE_PROFILE;

  // Header Logo & Judul
  const headerLogo = document.getElementById('header-store-logo');
  if (headerLogo) renderLogoElement(headerLogo, profile.logo, profile.name);

  const storeTitle = document.getElementById('store-title');
  if (storeTitle) storeTitle.innerText = `${profile.name} • ${profile.type}`;

  const userBtnLabel = document.getElementById('header-user-btn-label');
  if (userBtnLabel) {
    userBtnLabel.innerText = state.currentUser ? (profile.name.length > 12 ? profile.name.substring(0, 12) + '...' : profile.name) : 'Daftar / Masuk';
  }

  // Drawer (Menu Samping)
  const drawerLogo = document.getElementById('drawer-store-logo');
  if (drawerLogo) renderLogoElement(drawerLogo, profile.logo, profile.name);

  const drawerName = document.getElementById('drawer-store-name');
  if (drawerName) drawerName.innerText = profile.name;

  const drawerType = document.getElementById('drawer-business-type');
  if (drawerType) drawerType.innerText = profile.type;

  const drawerPhone = document.getElementById('drawer-user-phone');
  if (drawerPhone) {
    drawerPhone.innerText = state.currentUser ? (state.currentUser.phone || state.currentUser.email || 'Akun Aktif') : 'Mode Demo';
  }

  // Settings Tab (Tab 9)
  const settingsLogo = document.getElementById('settings-logo-preview');
  if (settingsLogo) renderLogoElement(settingsLogo, profile.logo, profile.name);

  const settingsName = document.getElementById('settings-store-name');
  if (settingsName && document.activeElement !== settingsName) settingsName.value = profile.name;

  const settingsType = document.getElementById('settings-business-type');
  if (settingsType && document.activeElement !== settingsType) settingsType.value = profile.type;

  const settingsPhone = document.getElementById('settings-store-phone');
  if (settingsPhone && document.activeElement !== settingsPhone) settingsPhone.value = profile.phone;

  const settingsAddress = document.getElementById('settings-store-address');
  if (settingsAddress && document.activeElement !== settingsAddress) settingsAddress.value = profile.address || '';

  const settingsEmail = document.getElementById('settings-account-email');
  if (settingsEmail) settingsEmail.value = profile.email || (state.currentUser ? state.currentUser.email : 'pemilik@toko.com');

  // Kontrol Akses Super Admin: HANYA tampil jika login resmi sebagai Super Admin Andi Zulkifli
  const isAdmin = isSuperAdmin(state.currentUser);
  const headerAdminBtn = document.getElementById('header-admin-btn');
  if (headerAdminBtn) headerAdminBtn.style.display = isAdmin ? 'flex' : 'none';
  const drawerAdminBtn = document.getElementById('drawer-admin-btn');
  if (drawerAdminBtn) drawerAdminBtn.style.display = isAdmin ? 'flex' : 'none';
}

function selectStoreLogo(emoji) {
  if (!state.storeProfile) state.storeProfile = { ...DEFAULT_STORE_PROFILE };
  state.storeProfile.logo = emoji;
  if (state.currentUser) {
    state.currentUser.logo = emoji;
    localStorage.setItem('temanusaha_active_user', JSON.stringify(state.currentUser));
    try {
      let accounts = JSON.parse(localStorage.getItem('temanusaha_registered_accounts') || '[]');
      const idx = accounts.findIndex(a => a.storeId === state.currentUser.storeId || a.email === state.currentUser.email);
      if (idx !== -1) {
        accounts[idx].logo = emoji;
        localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
      }
    } catch(err) {}
  }
  saveState();
  renderStoreProfile();
}

/**
 * Mengunggah dan membaca foto / logo toko dari penyimpanan HP atau Laptop klien.
 * Otomatis diubah menjadi Base64 Data URL dan disimpan ke profil toko & localStorage.
 */
function handleStoreLogoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  // Batas ukuran 2MB agar hemat penyimpanan localStorage
  if (file.size > 2 * 1024 * 1024) {
    alert('Ukuran file foto / logo maksimal 2MB. Silakan pilih foto dengan resolusi lebih kecil.');
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    if (!state.storeProfile) state.storeProfile = { ...DEFAULT_STORE_PROFILE };
    state.storeProfile.logo = dataUrl;

    if (state.currentUser) {
      state.currentUser.logo = dataUrl;
      localStorage.setItem('temanusaha_active_user', JSON.stringify(state.currentUser));
      try {
        let accounts = JSON.parse(localStorage.getItem('temanusaha_registered_accounts') || '[]');
        const idx = accounts.findIndex(a => a.storeId === state.currentUser.storeId || a.email === state.currentUser.email);
        if (idx !== -1) {
          accounts[idx].logo = dataUrl;
          localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
        }
      } catch(err) {}
    }

    saveState();
    renderStoreProfile();
    alert('✅ Foto / Logo toko berhasil diperbarui dari perangkat Anda!');
  };
  reader.readAsDataURL(file);
}

function saveStoreProfileSettings() {
  const nameEl = document.getElementById('settings-store-name');
  const typeEl = document.getElementById('settings-business-type');
  const phoneEl = document.getElementById('settings-store-phone');
  const addressEl = document.getElementById('settings-store-address');

  if (!nameEl || !nameEl.value.trim()) {
    alert('Nama toko tidak boleh kosong!');
    return;
  }

  if (!state.storeProfile) state.storeProfile = { ...DEFAULT_STORE_PROFILE };
  state.storeProfile.name = nameEl.value.trim();
  state.storeProfile.type = typeEl ? typeEl.value : state.storeProfile.type;
  state.storeProfile.phone = phoneEl ? phoneEl.value.trim() : state.storeProfile.phone;
  state.storeProfile.address = addressEl ? addressEl.value.trim() : state.storeProfile.address;

  saveState();
  renderStoreProfile();
  alert('✅ Profil toko berhasil diperbarui!');
}

function handleChangePassword() {
  const newPass = document.getElementById('settings-new-pass');
  const confirmPass = document.getElementById('settings-confirm-pass');

  if (!newPass || !newPass.value) {
    alert('Silakan masukkan password baru!');
    return;
  }

  if (newPass.value.length < 6) {
    alert('Password baru minimal 6 karakter!');
    return;
  }

  if (newPass.value !== confirmPass.value) {
    alert('Konfirmasi password tidak cocok! Silakan periksa kembali.');
    return;
  }

  // Update password in local accounts
  if (state.currentUser && state.currentUser.email) {
    try {
      const rawAccounts = localStorage.getItem('temanusaha_registered_accounts') || '[]';
      const accounts = JSON.parse(rawAccounts);
      const accIndex = accounts.findIndex(a => a.email === state.currentUser.email || a.phone === state.currentUser.phone);
      if (accIndex !== -1) {
        accounts[accIndex].password = newPass.value;
        localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
      }
    } catch (e) {}
  }

  newPass.value = '';
  confirmPass.value = '';
  alert('🔑 Password berhasil diperbarui!');
}

// ==================== MASA AKTIF & PERPANJANGAN SEWA ====================
function updateSubscriptionUI() {
  if (!state.subscription || !state.subscription.expiresAt) {
    state.subscription = { ...DEFAULT_SUBSCRIPTION };
  }

  const expiresTime = new Date(state.subscription.expiresAt).getTime();
  const now = Date.now();
  const diffMs = expiresTime - now;
  const remainingDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const isExpired = remainingDays <= 0;

  // Format expiry date (contoh: 28 Nov 2026)
  const expiryDateObj = new Date(state.subscription.expiresAt);
  const formattedExpiry = expiryDateObj.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Header Badge
  const headerSubText = document.getElementById('header-subscription-text');
  if (headerSubText) {
    if (isExpired) {
      headerSubText.innerText = 'Sewa Habis';
    } else if (state.subscription.plan === 'trial') {
      headerSubText.innerText = `Trial ${remainingDays} Hari`;
    } else {
      headerSubText.innerText = `Aktif ${remainingDays} Hari`;
    }
  }

  // Drawer Badge
  const drawerSubStatus = document.getElementById('drawer-sub-status');
  if (drawerSubStatus) {
    if (isExpired) {
      drawerSubStatus.innerText = 'Masa Sewa Habis';
      drawerSubStatus.className = 'font-bold text-red-300 text-[11px]';
    } else if (state.subscription.plan === 'trial') {
      drawerSubStatus.innerText = `Trial ${remainingDays} Hari Aktif`;
      drawerSubStatus.className = 'font-bold text-amber-300 text-[11px]';
    } else {
      drawerSubStatus.innerText = `Langganan Aktif (${remainingDays} Hari)`;
      drawerSubStatus.className = 'font-bold text-emerald-200 text-[11px]';
    }
  }

  const drawerBadgeSub = document.getElementById('drawer-badge-sub');
  if (drawerBadgeSub) {
    drawerBadgeSub.innerText = isExpired ? 'Habis' : (state.subscription.plan === 'trial' ? 'Trial' : 'Premium');
  }

  // Tab 8 Elements
  const subCardBadge = document.getElementById('sub-card-badge');
  if (subCardBadge) {
    subCardBadge.innerText = isExpired ? 'Masa Sewa Habis' : (state.subscription.plan === 'trial' ? 'Masa Uji Coba Gratis (Free 1 Bulan)' : 'Paket Langganan Aktif');
  }

  const subRemainingDays = document.getElementById('sub-remaining-days');
  if (subRemainingDays) {
    subRemainingDays.innerText = `${remainingDays} Hari`;
  }

  const subExpiryDate = document.getElementById('sub-expiry-date');
  if (subExpiryDate) {
    subExpiryDate.innerText = `Aktif sampai ${formattedExpiry}`;
  }
}

function openPaymentModal(planId, planName, amount) {
  state.currentPaymentPlan = { id: planId, name: planName, amount: amount };

  const titleEl = document.getElementById('pay-modal-title');
  if (titleEl) titleEl.innerText = planName;

  const amountEl = document.getElementById('pay-modal-amount');
  if (amountEl) amountEl.innerText = formatRupiah(amount);

  const modal = document.getElementById('modal-payment');
  if (modal) modal.classList.remove('hidden');
}

function closePaymentModal() {
  const modal = document.getElementById('modal-payment');
  if (modal) modal.classList.add('hidden');
}

function copyPaymentNumber() {
  const numEl = document.getElementById('pay-account-number');
  const text = numEl ? numEl.innerText.trim() : '123-456-7890';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Nomor rekening/virtual account berhasil disalin: ' + text);
    });
  } else {
    alert('Nomor rekening/virtual account: ' + text);
  }
}

function confirmPaymentWhatsApp() {
  const plan = state.currentPaymentPlan || { name: 'Paket Sewa', amount: 150000 };
  const store = state.storeProfile || DEFAULT_STORE_PROFILE;
  const user = state.currentUser || {};

  const message = `Halo Admin TemanUsaha, saya telah melakukan transfer untuk perpanjangan sewa aplikasi:\n\n• Nama Toko: ${store.name}\n• Paket: ${plan.name}\n• Nominal: ${formatRupiah(plan.amount)}\n• No HP / Email: ${user.phone || store.phone || user.email || '-'}\n\nMohon dicek dan diperpanjang masa aktif akun toko saya. Terima kasih!`;

  const url = `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  closePaymentModal();
}

function contactAdminWhatsApp(subject) {
  const message = `Halo Admin TemanUsaha, saya butuh informasi seputar: ${subject || 'Aplikasi TemanUsaha'}.`;
  const url = `https://api.whatsapp.com/send?phone=6281234567890&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ==================== AUTH PORTAL (DAFTAR & MASUK) ====================
function openAuthModal() {
  const modal = document.getElementById('auth-portal-modal');
  if (!modal) return;
  // Pindahkan modal ke akhir body agar selalu di lapisan paling atas dari landing page
  document.body.appendChild(modal);
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  modal.style.inset = '0';
  modal.style.zIndex = '99999';
  modal.style.pointerEvents = 'auto';
  
  const closeBtn = modal.querySelector('button[onclick="closeAuthModal()"]');
  if (closeBtn) {
    // Tampilkan tombol tutup hanya jika sudah login (buka modal dari dalam app)
    closeBtn.style.display = state.currentUser ? '' : 'none';
  }

  if (typeof closeSideMenu === 'function') closeSideMenu();
}

function closeAuthModal() {
  const modal = document.getElementById('auth-portal-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.style.display = 'none';
  
  // Jika landing page masih tampil dan user sudah login, hapus landing page & restore app
  if (state.currentUser) {
    removeLandingPageAndRestoreApp();
  } else {
    // Jika belum login, pastikan tetap di portal auth
    showPublicLandingPage();
  }
}

// Pastikan fungsi auth tersedia di window global
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthMode = switchAuthMode;

/**
 * Menghapus landing/store page overlay dan menampilkan kembali app shell utama.
 */
function removeLandingPageAndRestoreApp() {
  const modal = document.getElementById('auth-portal-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }

  const landing = document.getElementById('public-landing-page');
  if (landing) landing.remove();
  
  const storePage = document.getElementById('store-public-page');
  if (storePage) storePage.remove();
  
  const notFoundPage = document.getElementById('store-not-found-page');
  if (notFoundPage) notFoundPage.remove();
  
  const appMain = document.getElementById('main-app-shell');
  if (appMain) appMain.style.display = 'block';
  
  const header = document.getElementById('main-header');
  if (header) header.style.display = 'block';
  
  const sideMenu = document.getElementById('side-menu-container');
  if (sideMenu) sideMenu.style.display = '';
}

function switchAuthMode(mode) {
  const regTab = document.getElementById('auth-tab-reg');
  const loginTab = document.getElementById('auth-tab-login');
  const regForm = document.getElementById('form-register-store');
  const loginForm = document.getElementById('form-login-store');

  if (mode === 'register') {
    if (regTab) regTab.className = 'py-2.5 rounded-lg bg-white text-emerald-800 shadow-sm transition-all flex items-center justify-center space-x-1.5';
    if (loginTab) loginTab.className = 'py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center space-x-1.5';
    if (regForm) regForm.classList.remove('hidden');
    if (loginForm) loginForm.classList.add('hidden');
  } else {
    if (regTab) regTab.className = 'py-2.5 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center justify-center space-x-1.5';
    if (loginTab) loginTab.className = 'py-2.5 rounded-lg bg-white text-emerald-800 shadow-sm transition-all flex items-center justify-center space-x-1.5';
    if (regForm) regForm.classList.add('hidden');
    if (loginForm) loginForm.classList.remove('hidden');
  }
}

async function handleRegisterSubmit(event) {
  if (event) event.preventDefault();

  const storeName = document.getElementById('reg-store-name').value.trim();
  const businessType = document.getElementById('reg-business-type').value;
  const phone = document.getElementById('reg-phone').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const pass = document.getElementById('reg-pass').value;
  const passConfirm = document.getElementById('reg-pass-confirm').value;

  if (pass.length < 6) {
    alert('Password minimal 6 karakter!');
    return;
  }

  if (pass !== passConfirm) {
    alert('Konfirmasi password tidak cocok dengan password yang dimasukkan!');
    return;
  }

  // Cek aturan: 1 nomor HP dan 1 email untuk 1 akun
  let accounts = [];
  try {
    const raw = localStorage.getItem('temanusaha_registered_accounts');
    if (raw) accounts = JSON.parse(raw);
  } catch (e) {
    accounts = [];
  }

  const existingPhone = accounts.find(a => a.phone === phone);
  if (existingPhone) {
    alert('Nomor WhatsApp ini sudah terdaftar! 1 nomor HP hanya untuk 1 akun toko. Silakan gunakan menu Masuk Toko.');
    switchAuthMode('login');
    return;
  }

  const existingEmail = accounts.find(a => a.email === email);
  if (existingEmail) {
    alert('Alamat email ini sudah terdaftar! 1 email hanya untuk 1 akun toko. Silakan gunakan menu Masuk Toko.');
    switchAuthMode('login');
    return;
  }

  // Siapkan data demo sesuai jenis usaha
  const demoData = getDemoDataForBusinessType(businessType, storeName);

  // Periksa apakah pengguna mengunggah foto / logo sendiri dari HP atau Laptop
  const logoFileInput = document.getElementById('reg-logo-file');
  let chosenLogo = demoData.logo || getBusinessEmoji(businessType);

  if (logoFileInput && logoFileInput.files && logoFileInput.files[0]) {
    const file = logoFileInput.files[0];
    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran file foto/logo maksimal 2MB!');
      return;
    }
    try {
      chosenLogo = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = () => resolve(demoData.logo || '🏪');
        reader.readAsDataURL(file);
      });
    } catch(err) {
      chosenLogo = demoData.logo || '🏪';
    }
  }

  // Buat akun baru dengan Free Trial 1 Bulan (30 Hari)
  const storeId = 'store-' + Date.now();
  const trialExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  
  // Generate slug URL unik untuk toko ini
  const baseSlug = generateSlug(storeName);
  let slug = baseSlug;
  // Pastikan slug unik (jika sudah ada, tambahkan angka)
  let slugCounter = 1;
  while (accounts.find(a => a.slug === slug)) {
    slug = baseSlug + slugCounter;
    slugCounter++;
  }

  const newAccount = {
    storeId: storeId,
    storeName: storeName,
    businessType: businessType,
    phone: phone,
    email: email,
    password: pass,
    slug: slug,
    logo: chosenLogo,
    createdAt: new Date().toISOString()
  };

  accounts.push(newAccount);
  localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
  localStorage.setItem('temanusaha_active_user', JSON.stringify(newAccount));

  state.currentUser = newAccount;
  state.storeProfile = {
    name: storeName,
    type: businessType,
    phone: phone,
    address: 'Alamat Toko Belum Diatur',
    logo: chosenLogo,
    email: email
  };

  // Muat data inventaris, kas, dan transaksi contoh sesuai jenis usaha yang dipilih
  state.products = demoData.products || [];
  state.customers = demoData.customers || [];
  state.transactions = demoData.transactions || [];
  if (demoData.initialCash) state.initialCash = demoData.initialCash;

  state.subscription = {
    plan: 'trial',
    planName: 'Masa Uji Coba Gratis (30 Hari)',
    status: 'active',
    startDate: new Date().toISOString(),
    expiresAt: trialExpires
  };

  saveState();
  
  // Update URL browser secara otomatis ke link toko baru (?toko=slug)
  try {
    const newUrl = window.location.origin + window.location.pathname + '?toko=' + slug;
    window.history.pushState({ toko: slug }, '', newUrl);
  } catch(e) {}

  // Buka aplikasi kasir toko langsung
  removeLandingPageAndRestoreApp();
  renderAll();

  // Tampilkan notifikasi link toko agar mudah disalin
  setTimeout(() => showStoreURLNotification(slug), 500);

  alert(`🎉 Selamat! Toko "${storeName}" berhasil didaftarkan.\n\nLink Toko Anda:\nhttps://andhyz16.github.io/temanusaha/?toko=${slug}\n\nContoh produk (${businessType}) telah disiapkan otomatis. Anda mendapatkan GRATIS 1 BULAN (30 Hari) masa sewa aplikasi TemanUsaha dengan akses semua fitur kasir dan asisten cerdas.`);
}

// ==================== SLUG & URL ROUTING ====================

/**
 * Menghasilkan slug URL dari nama toko.
 * Contoh: "Humaira Sembako & Harian" → "humairasembako"
 */
function generateSlug(storeName) {
  return storeName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // hapus aksen
    .replace(/[^a-z0-9\s]/g, '')     // hapus karakter spesial
    .replace(/\s+/g, '')              // hapus spasi
    .substring(0, 30);
}

/**
 * Mengambil parameter URL ?toko= dari query string.
 * Digunakan saat pertama kali halaman dibuka.
 */
function getTokoSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('toko') || null;
}

/**
 * Menampilkan notifikasi URL toko setelah registrasi berhasil.
 */
function showStoreURLNotification(slug) {
  const baseUrl = 'https://andhyz16.github.io/temanusaha';
  const storeUrl = `${baseUrl}/?toko=${slug}`;
  
  const notif = document.createElement('div');
  notif.id = 'store-url-notif';
  notif.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[92vw] max-w-md';
  notif.innerHTML = `
    <div class="bg-white border border-emerald-200 rounded-2xl shadow-2xl p-4 animate-bounce-in">
      <div class="flex items-start space-x-3">
        <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl shrink-0">🔗</div>
        <div class="flex-1 min-w-0">
          <div class="font-extrabold text-slate-900 text-sm mb-1">URL Toko Anda Siap! 🎉</div>
          <div class="text-xs text-slate-500 mb-2">Bagikan tautan ini ke pelanggan agar mereka bisa melihat profil toko Anda:</div>
          <div class="flex items-center space-x-2 bg-slate-50 rounded-xl p-2.5 border border-slate-200">
            <code class="text-xs text-emerald-700 font-bold flex-1 break-all">${storeUrl}</code>
            <button onclick="copyStoreURL('${storeUrl}')" class="shrink-0 w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors" title="Salin URL">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            </button>
          </div>
        </div>
        <button onclick="document.getElementById('store-url-notif').remove()" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 shrink-0">✕</button>
      </div>
    </div>
  `;
  document.body.appendChild(notif);
  
  // Auto-dismiss setelah 30 detik
  setTimeout(() => {
    const el = document.getElementById('store-url-notif');
    if (el) el.remove();
  }, 30000);
}

function copyStoreURL(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert('✅ URL toko berhasil disalin!\n\n' + url);
  }).catch(() => {
    prompt('Salin URL toko Anda:', url);
  });
}

// ==================== SUPER ADMIN & PENGELOLAAN MEMBER ====================
const SUPER_ADMIN_CONFIG = {
  phone: '082299777924',
  email: 'andizulkifli28@gmail.com',
  name: 'Andi Zulkifli (Super Admin)',
  defaultPassword: 'admin123',
  role: 'super_admin'
};

const SEED_MEMBERS = [
  {
    storeId: 'store-superadmin',
    storeName: 'Pusat TemanUsaha (Super Admin)',
    businessType: 'Sistem SaaS & Lisensi',
    city: 'Makassar',
    phone: '082299777924',
    email: 'andizulkifli28@gmail.com',
    password: 'admin123',
    role: 'super_admin',
    slug: 'superadmin',
    logo: '👑',
    productsCount: 0,
    viewCount: 0,
    orderCount: 0,
    expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    createdAt: '2026-01-01T00:00:00.000Z'
  }
];

function initRegisteredAccounts() {
  let accounts = [];
  try {
    const raw = localStorage.getItem('temanusaha_registered_accounts');
    if (raw) accounts = JSON.parse(raw);
  } catch (e) {
    accounts = [];
  }

  // PEMBERSIHAN OTOMATIS: Buang semua akun toko sample bawaan lama
  const DUMMY_IDS = ['store-anw-beauty', 'store-haura-jewelry', 'store-berkah-barokah'];
  const DUMMY_EMAILS = ['atikah.nurfadhilah@gmail.com', 'khulafaurrasyidin04@gmail.com', 'pemilik@toko.com'];
  accounts = accounts.filter(a => !DUMMY_IDS.includes(a.storeId) && !DUMMY_EMAILS.includes(a.email));

  // Masukkan Super Admin jika belum ada
  const hasSuperAdmin = accounts.some(a => a.email === SUPER_ADMIN_CONFIG.email || a.phone === SUPER_ADMIN_CONFIG.phone);
  if (!hasSuperAdmin) {
    accounts.unshift({
      storeId: 'store-superadmin',
      storeName: 'Pusat TemanUsaha (Super Admin)',
      businessType: 'Sistem SaaS & Lisensi',
      city: 'Makassar',
      phone: SUPER_ADMIN_CONFIG.phone,
      email: SUPER_ADMIN_CONFIG.email,
      password: SUPER_ADMIN_CONFIG.defaultPassword,
      role: 'super_admin',
      slug: 'superadmin',
      logo: '👑',
      productsCount: 0,
      viewCount: 0,
      orderCount: 0,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'active',
      createdAt: '2026-01-01T00:00:00.000Z'
    });
  }

  // Pastikan semua akun punya slug (untuk routing toko)
  accounts.forEach(acc => {
    if (!acc.slug && acc.storeName) {
      acc.slug = generateSlug(acc.storeName);
    }
  });

  localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
}

function getRegisteredAccounts() {
  try {
    const raw = localStorage.getItem('temanusaha_registered_accounts');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveRegisteredAccounts(accounts) {
  localStorage.setItem('temanusaha_registered_accounts', JSON.stringify(accounts));
}

function isSuperAdmin(user) {
  if (!user) return false;
  return user.role === 'super_admin' ||
    user.email === 'andizulkifli28@gmail.com' ||
    user.phone === '082299777924' ||
    user.phone === '+6282299777924';
}

function handleLoginSubmit(event) {
  if (event) event.preventDefault();

  const identifier = document.getElementById('login-identifier').value.trim().toLowerCase();
  const pass = document.getElementById('login-pass').value;
  const rememberCheckbox = document.getElementById('login-remember-me');
  const rememberMe = rememberCheckbox ? rememberCheckbox.checked : true;

  const accounts = getRegisteredAccounts();

  // Cek apakah identifier adalah akun Super Admin Andi Zulkifli
  const isSuperAdminUser = (identifier === 'andizulkifli28@gmail.com' || identifier === '082299777924' || identifier === '+6282299777924');

  const matched = accounts.find(a => 
    (a.email.toLowerCase() === identifier || a.phone.toLowerCase() === identifier || a.phone.replace(/^0/, '+62') === identifier) &&
    (a.password === pass || (isSuperAdminUser && pass === 'admin123'))
  );

  if (matched || (isSuperAdminUser && (pass === 'admin123' || pass.length >= 6))) {
    const userToSave = matched || {
      storeId: 'store-superadmin',
      storeName: 'Pusat TemanUsaha (Super Admin)',
      businessType: 'Sistem SaaS & Lisensi',
      city: 'Makassar',
      phone: '082299777924',
      email: 'andizulkifli28@gmail.com',
      password: pass,
      role: 'super_admin'
    };

    state.currentUser = userToSave;
    localStorage.setItem('temanusaha_active_user', JSON.stringify(userToSave));
    
    // Fitur Centang Ingat Saya (Remember Me)
    if (rememberMe) {
      localStorage.setItem('temanusaha_remembered_user', JSON.stringify(userToSave));
    } else {
      localStorage.removeItem('temanusaha_remembered_user');
    }

    if (userToSave.role !== 'super_admin') {
      state.storeProfile.name = userToSave.storeName || state.storeProfile.name;
      state.storeProfile.type = userToSave.businessType || state.storeProfile.type;
      state.storeProfile.phone = userToSave.phone || state.storeProfile.phone;
      state.storeProfile.email = userToSave.email || state.storeProfile.email;
      if (userToSave.logo) state.storeProfile.logo = userToSave.logo;
      if (userToSave.address) state.storeProfile.address = userToSave.address;
    }

    saveState();
    closeAuthModal();
    renderAll();

    if (isSuperAdmin(userToSave)) {
      alert(`👑 Selamat datang Bapak Andi Zulkifli!\nAnda masuk sebagai SUPER ADMIN TemanUsaha dengan akses kontrol penuh seluruh toko & lisensi.`);
      openSuperAdminModal();
    } else {
      alert(`👋 Selamat datang kembali di Toko "${userToSave.storeName}"!`);
    }
  } else {
    alert('Email/No WhatsApp atau Password salah! Periksa kembali atau gunakan opsi "Lupa Password?" untuk menghubungi Super Admin via WhatsApp.');
  }
}

function handleForgotPassword() {
  const ident = document.getElementById('login-identifier') ? document.getElementById('login-identifier').value.trim() : '';
  const message = `Halo Super Admin TemanUsaha (Pak Andi), saya lupa password akun toko saya:\n\n• Email / No WhatsApp Toko: ${ident || '(belum diisi)'}\n\nMohon bantuannya untuk reset password toko saya. Terima kasih!`;
  const url = `https://api.whatsapp.com/send?phone=6282299777924&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function handleLogout() {
  if (confirm('Apakah Anda yakin ingin keluar dari akun toko saat ini?')) {
    state.currentUser = null;
    localStorage.removeItem('temanusaha_active_user');
    localStorage.removeItem('temanusaha_remembered_user');
    state.storeProfile = { ...DEFAULT_STORE_PROFILE };
    closeSideMenu();
    
    // Reset URL browser ke halaman utama tanpa parameter ?toko=
    try {
      const baseUrl = window.location.origin + window.location.pathname;
      window.history.pushState({}, '', baseUrl);
    } catch(e) {}

    // Kembali ke tampilan awal pendaftaran & login
    showPublicLandingPage();
    
    alert('Anda telah keluar dari akun toko. Sampai jumpa! 👋');
  }
}

// ==================== SUPER ADMIN MODAL & KONTROL LISENSI ====================
function openSuperAdminModal() {
  const modal = document.getElementById('super-admin-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  modal.style.zIndex = '9999';
  document.body.style.overflow = 'hidden';
  refreshAdminMemberList();
  renderAdminPinList();
}

function closeSuperAdminModal() {
  const modal = document.getElementById('super-admin-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function switchAdminTab(tab) {
  const btnMembers = document.getElementById('admin-tab-btn-members');
  const btnLicenses = document.getElementById('admin-tab-btn-licenses');
  const viewMembers = document.getElementById('admin-view-members');
  const viewLicenses = document.getElementById('admin-view-licenses');

  if (tab === 'members') {
    if (btnMembers) btnMembers.className = 'pb-3 border-b-2 border-emerald-600 text-emerald-700 flex items-center space-x-2 transition-all';
    if (btnLicenses) btnLicenses.className = 'pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-2 transition-all';
    if (viewMembers) viewMembers.classList.remove('hidden');
    if (viewLicenses) viewLicenses.classList.add('hidden');
    refreshAdminMemberList();
  } else {
    if (btnMembers) btnMembers.className = 'pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-2 transition-all';
    if (btnLicenses) btnLicenses.className = 'pb-3 border-b-2 border-emerald-600 text-emerald-700 flex items-center space-x-2 transition-all';
    if (viewMembers) viewMembers.classList.add('hidden');
    if (viewLicenses) viewLicenses.classList.remove('hidden');
    renderAdminPinList();
  }
}

function refreshAdminMemberList() {
  renderAdminMemberList();
}

function filterAdminStores() {
  renderAdminMemberList();
}

function renderAdminMemberList() {
  const listEl = document.getElementById('admin-store-list');
  const countEl = document.getElementById('admin-member-count');
  if (!listEl) return;

  const accounts = getRegisteredAccounts().filter(a => a.role !== 'super_admin');
  const search = (document.getElementById('admin-search-input')?.value || '').toLowerCase();
  const filterStatus = document.getElementById('admin-filter-status')?.value || 'all';

  const now = Date.now();

  const filtered = accounts.filter(acc => {
    const isExpired = acc.expiresAt ? new Date(acc.expiresAt).getTime() < now : false;
    
    // Status filter
    if (filterStatus === 'active' && isExpired) return false;
    if (filterStatus === 'expired' && !isExpired) return false;

    // Search filter
    if (search) {
      const matchName = (acc.storeName || '').toLowerCase().includes(search);
      const matchPhone = (acc.phone || '').toLowerCase().includes(search);
      const matchEmail = (acc.email || '').toLowerCase().includes(search);
      const matchCity = (acc.city || '').toLowerCase().includes(search);
      return matchName || matchPhone || matchEmail || matchCity;
    }
    return true;
  });

  if (countEl) countEl.innerText = filtered.length;

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
        <span class="text-3xl block mb-2">🔍</span>
        <p class="font-bold text-sm text-slate-700">Tidak ada toko yang sesuai pencarian.</p>
        <p class="text-xs text-slate-400 mt-1">Coba gunakan kata kunci lain atau segarkan data.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(acc => {
    const expiresTime = acc.expiresAt ? new Date(acc.expiresAt).getTime() : now;
    const isExpired = expiresTime < now;
    const expiryStr = acc.expiresAt ? new Date(acc.expiresAt).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) : 'Belum Diatur';

    const cleanPhone = (acc.phone || '').replace(/[^0-9]/g, '');
    const waNumber = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow space-y-4">
        <!-- Card Top Bar: Logo, Nama, Status, Lokasi, Action Buka/Hapus -->
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-inner shrink-0">
              ${acc.logo || '🏪'}
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-extrabold text-slate-900 text-base leading-tight">${acc.storeName}</h4>
                ${isExpired ? `
                  <span class="bg-red-100 text-red-700 border border-red-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <span>❌</span>
                    <span>EXPIRED</span>
                  </span>
                ` : `
                  <span class="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <span>✓</span>
                    <span>AKTIF</span>
                  </span>
                `}
                <span class="text-slate-400 text-xs">•</span>
                <span class="text-xs font-semibold text-slate-500 flex items-center space-x-1">
                  <span>📍</span>
                  <span>${acc.city || acc.businessType || 'Indonesia'}</span>
                </span>
              </div>

              <!-- Detail Kontak -->
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1">
                <span class="flex items-center space-x-1">
                  <span>📱 WA:</span>
                  <strong class="font-mono text-slate-700">${acc.phone}</strong>
                </span>
                <span class="flex items-center space-x-1">
                  <span>✉️</span>
                  <span class="font-mono text-slate-600">${acc.email}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Quick Top Buttons: Buka Toko & Hapus -->
          <div class="flex items-center space-x-1.5 shrink-0">
            <button onclick="adminSwitchToStore('${acc.storeId}')" title="Buka Toko Ini di Layar" class="p-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <button onclick="adminDeleteStore('${acc.storeId}')" title="Hapus Toko" class="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Statistik Toko (Produk, Transaksi, S/d) -->
        <div class="flex flex-wrap items-center gap-3 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div class="flex items-center space-x-1 text-slate-700">
            <span>📦</span>
            <span class="font-bold">${acc.productsCount || 3} Produk</span>
          </div>
          <span class="text-slate-300">•</span>
          <div class="flex items-center space-x-1 text-slate-700">
            <span>👁️</span>
            <span>${acc.viewCount || 2}x Dilihat</span>
          </div>
          <span class="text-slate-300">•</span>
          <div class="flex items-center space-x-1 text-slate-700">
            <span>🛒</span>
            <span>${acc.orderCount || 0} Order</span>
          </div>
          <span class="text-slate-300">•</span>
          <div class="flex items-center space-x-1 ${isExpired ? 'text-red-700 font-extrabold' : 'text-slate-700'}">
            <span>⏳</span>
            <span>S/d: <strong>${expiryStr}</strong></span>
          </div>
        </div>

        <!-- Controls Perpanjangan & Quick Action Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
          <!-- Dropdown Perpanjang + Simpan -->
          <div class="flex items-center space-x-2">
            <span class="font-bold text-slate-700 whitespace-nowrap flex items-center space-x-1">
              <span>📅</span>
              <span>Perpanjang:</span>
            </span>
            <select id="select-extend-${acc.storeId}" class="border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 bg-white focus:outline-emerald-500">
              <option value="30">Standar • 1 Bulan (+30 Hari)</option>
              <option value="180">Hemat • 6 Bulan (+180 Hari)</option>
              <option value="365">Eksklusif • 1 Tahun (+365 Hari)</option>
            </select>
            <button onclick="adminExtendStore('${acc.storeId}')" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all shadow-sm flex items-center space-x-1">
              <span>✓</span>
              <span>Simpan</span>
            </button>
          </div>

          <!-- Quick Action: Ingatkan WA & Buat PIN Khusus -->
          <div class="flex items-center space-x-2">
            <button onclick="adminRemindWA('${waNumber}', '${acc.storeName.replace(/'/g, "\\'")}', '${expiryStr}')" class="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-emerald-300 text-emerald-800 hover:bg-emerald-50 font-bold transition-colors flex items-center justify-center space-x-1.5">
              <span>💬</span>
              <span>Ingatkan WA</span>
            </button>
            <button onclick="adminGenerateStorePin('${acc.storeId}', '${acc.storeName.replace(/'/g, "\\'")}', '${waNumber}')" class="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-bold transition-colors flex items-center justify-center space-x-1.5">
              <span>🔑</span>
              <span>Buat PIN Khusus</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function adminExtendStore(storeId) {
  const selectEl = document.getElementById(`select-extend-${storeId}`);
  const days = selectEl ? parseInt(selectEl.value, 10) : 30;

  const accounts = getRegisteredAccounts();
  const accIndex = accounts.findIndex(a => a.storeId === storeId);
  if (accIndex === -1) return;

  const acc = accounts[accIndex];
  const now = Date.now();
  let baseTime = acc.expiresAt ? new Date(acc.expiresAt).getTime() : now;
  if (baseTime < now) baseTime = now; // Jika sudah kadaluarsa, hitung dari hari ini

  const newExpiry = new Date(baseTime + days * 24 * 60 * 60 * 1000).toISOString();
  acc.expiresAt = newExpiry;
  acc.status = 'active';

  saveRegisteredAccounts(accounts);

  // Jika yang diperpanjang adalah toko yang sedang dibuka di state
  if (state.currentUser && state.currentUser.storeId === storeId) {
    state.subscription.expiresAt = newExpiry;
    state.subscription.status = 'active';
    saveState();
  }

  const formattedNewDate = new Date(newExpiry).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  alert(`✅ Masa sewa Toko "${acc.storeName}" berhasil diperpanjang +${days} hari!\nMasa aktif baru: ${formattedNewDate}`);
  refreshAdminMemberList();
  renderAll();
}

function adminRemindWA(waNumber, storeName, expiryStr) {
  const message = `Halo Pemilik Toko ${storeName}, kami dari Admin TemanUsaha menginfokan bahwa masa sewa aplikasi Anda aktif s/d ${expiryStr}.\n\nAgar pencatatan kasir dan pembukuan toko tetap lancar tanpa terhenti, silakan lakukan perpanjangan sewa aplikasi. Terima kasih! 🙏`;
  const url = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function adminGenerateStorePin(storeId, storeName, waNumber) {
  const days = 30;
  const pinCode = 'TU-' + Math.floor(1000 + Math.random() * 9000) + '-1BLN';

  const newPinObj = {
    pin: pinCode,
    days: days,
    plan: '1_month',
    planName: 'Paket Standar (1 Bulan)',
    targetStore: storeName,
    targetPhone: waNumber,
    notes: 'PIN Khusus dari Super Admin',
    createdAt: new Date().toISOString(),
    isUsed: false,
    usedBy: null,
    usedAt: null
  };

  let pins = [];
  try {
    const raw = localStorage.getItem('temanusaha_license_pins');
    if (raw) pins = JSON.parse(raw);
  } catch (e) {
    pins = [];
  }

  pins.unshift(newPinObj);
  localStorage.setItem('temanusaha_license_pins', JSON.stringify(pins));

  const text = `Halo ${storeName}, ini PIN Aktivasi Sewa 1 Bulan TemanUsaha Anda:\n\n🔑 PIN: *${pinCode}*\n\nCara pakai: Buka aplikasi TemanUsaha > Menu Perpanjang Sewa > Masukkan PIN di kotak aktivasi. Masa sewa otomatis bertambah 30 hari. Terima kasih!`;
  
  if (confirm(`PIN Berhasil Dibuat: ${pinCode}\n\nIngin langsung mengirimkan PIN ini ke WhatsApp ${storeName}?`)) {
    const url = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(pinCode).then(() => {
      alert(`PIN ${pinCode} telah disalin ke clipboard!`);
    });
  }
}

function adminSwitchToStore(storeId) {
  const accounts = getRegisteredAccounts();
  const acc = accounts.find(a => a.storeId === storeId);
  if (!acc) return;

  if (confirm(`Beralih ke Toko "${acc.storeName}" di layar kasir?`)) {
    state.storeProfile.name = acc.storeName;
    state.storeProfile.type = acc.businessType || state.storeProfile.type;
    state.storeProfile.phone = acc.phone || state.storeProfile.phone;
    state.storeProfile.email = acc.email || state.storeProfile.email;
    state.storeProfile.logo = acc.logo || '🏪';
    if (acc.expiresAt) {
      state.subscription.expiresAt = acc.expiresAt;
    }
    saveState();
    closeSuperAdminModal();
    renderAll();
    alert(`Sekarang menampilkan data Toko "${acc.storeName}".`);
  }
}

function adminDeleteStore(storeId) {
  if (confirm('Apakah Anda yakin ingin menghapus toko member ini?')) {
    let accounts = getRegisteredAccounts();
    accounts = accounts.filter(a => a.storeId !== storeId);
    saveRegisteredAccounts(accounts);
    refreshAdminMemberList();
    alert('Toko member berhasil dihapus dari sistem.');
  }
}

// ==================== GENERATOR & REDEEM PIN LISENSI ====================
function adminCreateNewPin() {
  const planVal = document.getElementById('gen-pin-plan')?.value || '1_month';
  const target = document.getElementById('gen-pin-target')?.value.trim() || 'Umum';
  const notes = document.getElementById('gen-pin-notes')?.value.trim() || 'Diterbitkan Super Admin';

  let days = 30;
  let planSuffix = '1BLN';
  let planName = 'Paket Standar (1 Bulan)';

  if (planVal === '6_months') {
    days = 180;
    planSuffix = '6BLN';
    planName = 'Paket Hemat (6 Bulan)';
  } else if (planVal === '12_months') {
    days = 365;
    planSuffix = '1THN';
    planName = 'Paket Eksklusif (1 Tahun)';
  }

  const random4 = Math.floor(1000 + Math.random() * 9000);
  const pinCode = `TU-${random4}-${planSuffix}`;

  const pinObj = {
    pin: pinCode,
    days: days,
    plan: planVal,
    planName: planName,
    targetStore: target,
    targetPhone: target,
    notes: notes,
    createdAt: new Date().toISOString(),
    isUsed: false,
    usedBy: null,
    usedAt: null
  };

  let pins = [];
  try {
    const raw = localStorage.getItem('temanusaha_license_pins');
    if (raw) pins = JSON.parse(raw);
  } catch (e) {
    pins = [];
  }

  pins.unshift(pinObj);
  localStorage.setItem('temanusaha_license_pins', JSON.stringify(pins));

  // Reset form
  if (document.getElementById('gen-pin-target')) document.getElementById('gen-pin-target').value = '';
  if (document.getElementById('gen-pin-notes')) document.getElementById('gen-pin-notes').value = '';

  renderAdminPinList();
  alert(`✨ PIN Lisensi Berhasil Diterbitkan:\n\n${pinCode}\nDurasi: ${planName}\nTarget: ${target}`);
}

function renderAdminPinList() {
  const container = document.getElementById('admin-pin-container');
  const countEl = document.getElementById('admin-pin-count');
  if (!container) return;

  let pins = [];
  try {
    const raw = localStorage.getItem('temanusaha_license_pins');
    if (raw) pins = JSON.parse(raw);
  } catch (e) {
    pins = [];
  }

  if (countEl) countEl.innerText = `${pins.length} PIN Tercatat`;

  if (pins.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center bg-white rounded-xl border border-slate-200 text-slate-400">
        Belum ada PIN yang diterbitkan. Silakan buat PIN baru di form atas.
      </div>
    `;
    return;
  }

  container.innerHTML = pins.map(p => {
    return `
      <div class="bg-white rounded-xl border border-slate-200 p-3.5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div class="space-y-1">
          <div class="flex items-center space-x-2">
            <span class="font-mono font-extrabold text-sm text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">${p.pin}</span>
            <span class="text-xs font-bold ${p.isUsed ? 'bg-slate-100 text-slate-500' : 'bg-emerald-100 text-emerald-800'} px-2 py-0.5 rounded-full">
              ${p.isUsed ? `✓ Sudah Dipakai (${p.usedBy || 'Member'})` : '🟢 Belum Digunakan'}
            </span>
          </div>
          <div class="text-[11px] text-slate-500">
            <strong>${p.planName}</strong> • Target: <span class="font-semibold text-slate-700">${p.targetStore || 'Umum'}</span> • ${p.notes || ''}
          </div>
        </div>

        <div class="flex items-center space-x-2 w-full sm:w-auto">
          <button onclick="adminCopyPin('${p.pin}')" class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs flex items-center space-x-1">
            <span>📋</span>
            <span>Salin</span>
          </button>
          ${!p.isUsed ? `
            <button onclick="adminSendPinWhatsApp('${p.pin}', '${p.planName}', '${p.targetPhone || ''}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1 shadow-sm">
              <span>📲</span>
              <span>Kirim WA</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function adminCopyPin(pinCode) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(pinCode).then(() => {
      alert(`PIN ${pinCode} berhasil disalin ke clipboard!`);
    });
  } else {
    alert(`PIN: ${pinCode}`);
  }
}

function adminSendPinWhatsApp(pinCode, planName, targetPhone) {
  const cleanPhone = (targetPhone || '').replace(/[^0-9]/g, '');
  const wa = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : (cleanPhone || '6282299777924');
  const message = `Halo, ini PIN Aktivasi Sewa Aplikasi TemanUsaha Anda:\n\n🔑 PIN: *${pinCode}*\n• Paket: ${planName}\n\nSilakan buka aplikasi TemanUsaha > Menu Perpanjang Sewa > Masukkan PIN di kolom aktivasi untuk menambah masa aktif sewa Anda. Terima kasih! 🙏`;
  const url = `https://api.whatsapp.com/send?phone=${wa}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function redeemActivationPin() {
  const inputEl = document.getElementById('input-activation-pin');
  if (!inputEl) return;
  const enteredPin = inputEl.value.trim().toUpperCase();

  if (!enteredPin) {
    alert('Silakan ketikkan kode PIN Lisensi terlebih dahulu!');
    return;
  }

  let pins = [];
  try {
    const raw = localStorage.getItem('temanusaha_license_pins');
    if (raw) pins = JSON.parse(raw);
  } catch (e) {
    pins = [];
  }

  const pinIndex = pins.findIndex(p => p.pin.toUpperCase() === enteredPin);

  if (pinIndex === -1) {
    alert('❌ PIN Lisensi tidak ditemukan atau salah ketik!\n\nPastikan format PIN benar (contoh: TU-8224-1BLN) atau hubungi Super Admin di WhatsApp 082299777924.');
    return;
  }

  const pinObj = pins[pinIndex];

  if (pinObj.isUsed) {
    alert(`❌ PIN Lisensi ini sudah pernah digunakan sebelumnya pada ${new Date(pinObj.usedAt).toLocaleString('id-ID')}.\n\nHubungi Super Admin jika membutuhkan lisensi baru.`);
    return;
  }

  // Aktifkan lisensi
  const days = pinObj.days || 30;
  const now = Date.now();
  let baseTime = state.subscription.expiresAt ? new Date(state.subscription.expiresAt).getTime() : now;
  if (baseTime < now) baseTime = now; // Jika sudah kadaluarsa, hitung dari sekarang

  const newExpiresAt = new Date(baseTime + days * 24 * 60 * 60 * 1000).toISOString();

  state.subscription.expiresAt = newExpiresAt;
  state.subscription.status = 'active';
  state.subscription.plan = pinObj.plan || 'active';

  // Tandai PIN sudah dipakai
  pinObj.isUsed = true;
  pinObj.usedBy = state.storeProfile.name;
  pinObj.usedAt = new Date().toISOString();
  pins[pinIndex] = pinObj;
  localStorage.setItem('temanusaha_license_pins', JSON.stringify(pins));

  // Simpan state
  saveState();
  inputEl.value = '';
  renderAll();

  const formattedDate = new Date(newExpiresAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  alert(`🎉 SELAMAT! PIN LISENSI BERHASIL DIAKTIFKAN!\n\nMasa sewa Toko "${state.storeProfile.name}" bertambah +${days} hari.\nAktif sampai: ${formattedDate}`);
}

// Export fungsi global ke window agar dapat dipanggil dari HTML onclick / onchange
window.handleStoreLogoUpload = handleStoreLogoUpload;
window.renderLogoElement = renderLogoElement;
window.getDemoDataForBusinessType = getDemoDataForBusinessType;
window.selectStoreLogo = selectStoreLogo;
window.handleRegisterSubmit = handleRegisterSubmit;

// Jalankan aplikasi saat dokumen siap
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
