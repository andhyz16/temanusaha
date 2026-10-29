// Logika Bisnis & Mesin Perhitungan TemanUsaha
export function calculateBusinessMetrics(transactions, products, customers, initialCash = 1000000) {
  let totalSales = 0;
  let totalHPP = 0; // Modal barang yang terjual
  let cashSales = 0;
  let debtSales = 0; // Penjualan yang belum lunas (bon)
  let totalOpsExpenses = 0;
  let totalPersonalDraw = 0; // Uang pribadi / Prive
  let stockPurchaseExpense = 0;

  transactions.forEach(trx => {
    if (trx.type === 'sale') {
      totalSales += trx.totalAmount || 0;
      totalHPP += trx.totalCost || 0;
      if (trx.paymentMethod === 'cash') {
        cashSales += trx.totalAmount || 0;
      } else {
        debtSales += trx.totalAmount || 0;
      }
    } else if (trx.type === 'expense_ops') {
      totalOpsExpenses += trx.totalAmount || 0;
    } else if (trx.type === 'personal_draw') {
      totalPersonalDraw += trx.totalAmount || 0;
    } else if (trx.type === 'expense_stock') {
      stockPurchaseExpense += trx.totalAmount || 0;
    }
  });

  // Laba Kotor & Bersih Riil
  const grossProfit = totalSales - totalHPP;
  const netProfit = grossProfit - totalOpsExpenses;

  // Uang Kas Fisik di Laci/Tangan Hari Ini
  const cashInHand = initialCash + cashSales - totalOpsExpenses - stockPurchaseExpense - totalPersonalDraw;

  // Dana Kulakan yang Wajib Diamankan (HPP dari penjualan tunai yang diterima)
  // Ini adalah uang modal yang TIDAK BOLEH diambil untuk keperluan dapur/pribadi
  const lockedRestockFund = totalHPP;

  // Evaluasi Pengambilan Pribadi (Prive vs Laba Bersih)
  const isPersonalOverdrawn = totalPersonalDraw > netProfit;
  const capitalErosionAmount = isPersonalOverdrawn ? totalPersonalDraw - Math.max(0, netProfit) : 0;

  // Uang yang Aman Boleh Dibawa Pulang
  // Hanya laba bersih riil dikurangi yang sudah diambil
  const safePersonalAllowance = Math.max(0, netProfit - totalPersonalDraw);

  // Inventori Analitik
  let totalInventoryAssetValue = 0;
  const criticalStockItems = [];
  const slowMovingItems = [];

  products.forEach(p => {
    totalInventoryAssetValue += (p.costPrice * p.stock);

    const daysRemaining = p.dailySalesAvg > 0 ? (p.stock / p.dailySalesAvg) : 999;
    
    if (p.stock <= p.minStock || daysRemaining <= 3) {
      criticalStockItems.push({
        ...p,
        daysRemaining: Math.round(daysRemaining * 10) / 10,
        suggestedRestockQty: Math.max(p.minStock * 2 - p.stock, 5),
        estimatedCost: Math.max(p.minStock * 2 - p.stock, 5) * p.costPrice
      });
    }

    if (p.dailySalesAvg < 0.5 && p.stock >= p.minStock) {
      slowMovingItems.push({
        ...p,
        lockedCapital: p.stock * p.costPrice
      });
    }
  });

  // Piutang Analitik
  const todayStr = new Date().toISOString().split('T')[0];
  let totalReceivable = 0;
  const urgentDebts = [];

  customers.forEach(c => {
    if (c.debtAmount > 0) {
      totalReceivable += c.debtAmount;
      const isDueTodayOrOverdue = c.dueDate <= todayStr;
      const isDueSoon = !isDueTodayOrOverdue && (new Date(c.dueDate) - new Date(todayStr)) <= 86400000 * 2;

      if (isDueTodayOrOverdue || isDueSoon) {
        urgentDebts.push({
          ...c,
          isOverdue: c.dueDate < todayStr,
          isDueToday: c.dueDate === todayStr,
          isDueSoon
        });
      }
    }
  });

  return {
    initialCash,
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
    criticalStockItems,
    slowMovingItems,
    totalReceivable,
    urgentDebts
  };
}
