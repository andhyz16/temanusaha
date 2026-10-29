export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Beras Pandan Wangi 5kg',
    category: 'Sembako',
    costPrice: 68000,
    sellPrice: 78000,
    stock: 6,
    minStock: 12,
    dailySalesAvg: 3.5,
    unit: 'karung',
    status: 'warning' // warning, danger, safe
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
    unit: 'pouch',
    status: 'danger'
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
    unit: 'kg',
    status: 'safe'
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
    unit: 'bungkus',
    status: 'safe'
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
    unit: 'renceng',
    status: 'safe'
  },
  {
    id: 'prod-6',
    name: 'Mi Instan Goreng (Karton isi 40)',
    category: 'Makanan',
    costPrice: 108000,
    sellPrice: 122000,
    stock: 5,
    minStock: 4,
    dailySalesAvg: 1.2,
    unit: 'karton',
    status: 'safe'
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
    unit: 'botol',
    status: 'slow_moving' // menumpuk
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
    unit: 'kg',
    status: 'safe'
  }
];

export const INITIAL_CUSTOMERS = [
  {
    id: 'cust-1',
    name: 'Bu Siti (Warung Nasi)',
    phone: '6281234567891',
    debtAmount: 450000,
    dueDate: new Date(Date.now() + 86400000 * 1).toISOString().split('T')[0], // besok
    notes: 'Beras 3 karung + telur 5kg',
    totalPurchases: 4850000,
    isReliable: true
  },
  {
    id: 'cust-2',
    name: 'Pak Hendro (Tetangga)',
    phone: '6281987654321',
    debtAmount: 175000,
    dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 hari lagi
    notes: 'Minyak 2L + Kopi 3 renceng',
    totalPurchases: 1200000,
    isReliable: true
  },
  {
    id: 'cust-3',
    name: 'Bu Wahyu',
    phone: '6285711223344',
    debtAmount: 85000,
    dueDate: new Date().toISOString().split('T')[0], // Hari ini!
    notes: 'Gula 3kg + Tepung 2kg',
    totalPurchases: 650000,
    isReliable: false
  }
];

export const INITIAL_TRANSACTIONS = [
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
    description: 'Kantong plastik besar 2 pak + isolasi',
    category: 'Operasional',
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
    status: 'pending' // Piutang
  },
  {
    id: 'trx-5',
    time: '14:20',
    type: 'personal_draw', // Uang Pribadi / Prive
    description: 'Uang saku anak & belanja sayur dapur rumah',
    category: 'Uang Pribadi',
    totalAmount: 120000
  }
];

export const STORE_PROFILE = {
  name: 'Toko Berkah Barokah',
  owner: 'Pak Joko & Bu Ratna',
  category: 'Sembako & Kebutuhan Harian',
  initialCash: 1250000, // Uang kas awal di laci hari ini
};
