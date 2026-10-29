import { formatRupiah } from '../utils/formatters';

export function generateDailyMorningBrief(metrics) {
  const alerts = [];

  // Peringatan 1: Pengambilan Pribadi vs Laba (Pemisah Uang Usaha vs Pribadi)
  if (metrics.isPersonalOverdrawn) {
    alerts.push({
      type: 'danger',
      title: 'Uang Modal Kulakan Tergerus!',
      message: `Hari ini Anda mengambil uang pribadi ${formatRupiah(metrics.totalPersonalDraw)}, padahal laba bersih baru ${formatRupiah(metrics.netProfit)}. Ada ${formatRupiah(metrics.capitalErosionAmount)} uang modal belanja ulang yang terpakai. Hindari ambil uang kas lagi hari ini.`,
      action: 'Kunci Kas Toko'
    });
  } else if (metrics.safePersonalAllowance > 0) {
    alerts.push({
      type: 'success',
      title: 'Uang Usaha Sehat & Aman',
      message: `Setelah mengamankan modal belanja ulang (${formatRupiah(metrics.lockedRestockFund)}), Anda memiliki uang dingin sebesar ${formatRupiah(metrics.safePersonalAllowance)} yang aman digunakan untuk keperluan pribadi.`,
      action: 'Lihat Rincian Laba'
    });
  }

  // Peringatan 2: Stok Kritis
  if (metrics.criticalStockItems.length > 0) {
    const itemNames = metrics.criticalStockItems.slice(0, 2).map(i => `${i.name} (sisa ${i.stock} ${i.unit})`).join(', ');
    alerts.push({
      type: 'warning',
      title: `${metrics.criticalStockItems.length} Produk Hampir Habis!`,
      message: `Berdasarkan rata-rata penjualan harian: ${itemNames} diperkirakan habis dalam 1-3 hari. Segera order ke distributor agar tidak kehilangan pelanggan.`,
      action: 'Buat Daftar Kulakan'
    });
  }

  // Peringatan 3: Piutang Jatuh Tempo
  if (metrics.urgentDebts.length > 0) {
    const overdueCount = metrics.urgentDebts.filter(d => d.isOverdue || d.isDueToday).length;
    alerts.push({
      type: 'info',
      title: `${overdueCount > 0 ? overdueCount : metrics.urgentDebts.length} Piutang Perlu Diingatkan`,
      message: `Ada total ${formatRupiah(metrics.totalReceivable)} uang Anda yang masih tertahan di pelanggan. Tagihan terdekat: ${metrics.urgentDebts[0].name} (${formatRupiah(metrics.urgentDebts[0].debtAmount)}).`,
      action: 'Kirim WA Sopan'
    });
  }

  // Rekomendasi Utama Hari Ini
  let mainAdvice = '';
  if (metrics.isPersonalOverdrawn) {
    mainAdvice = `Prioritas hari ini: Batasi pengeluaran pribadi dan prioritaskan penjualan tunai agar modal belanja ulang ${formatRupiah(metrics.lockedRestockFund)} kembali utuh.`;
  } else if (metrics.criticalStockItems.length > 0) {
    mainAdvice = `Prioritas hari ini: Belanja ulang ${metrics.criticalStockItems[0].name} sebelum stok benar-benar kosong esok hari.`;
  } else if (metrics.slowMovingItems.length > 0) {
    mainAdvice = `Ada ${formatRupiah(metrics.slowMovingItems.reduce((acc, i) => acc + i.lockedCapital, 0))} modal tertahan di produk yang lambat laku (${metrics.slowMovingItems[0].name}). Buat paket promo bundel untuk mencairkannya kembali.`;
  } else {
    mainAdvice = `Kondisi toko stabil. Fokus tingkatkan penjualan produk dengan margin tinggi seperti minuman & cemilan.`;
  }

  return {
    alerts,
    mainAdvice
  };
}

// Simulasi AI Copilot TemanUsaha Berbasis Data Riil
export function askTemanUsahaAI(question, metrics, products, transactions, customers) {
  const q = question.toLowerCase();

  // Pertanyaan 1: Kenapa laba turun / bagaimana kondisi laba?
  if (q.includes('laba') || q.includes('untung') || q.includes('keuntungan') || q.includes('turun')) {
    const marginPercent = metrics.totalSales > 0 ? Math.round((metrics.grossProfit / metrics.totalSales) * 100) : 0;
    return {
      answer: `Berdasarkan data hari ini:\n\n1. **Total Penjualan:** ${formatRupiah(metrics.totalSales)}\n2. **Modal Pokok Barang (HPP):** ${formatRupiah(metrics.totalHPP)} (sekitar ${100 - marginPercent}% dari harga jual)\n3. **Biaya Operasional:** ${formatRupiah(metrics.totalOpsExpenses)}\n4. **Laba Bersih Riil:** ${formatRupiah(metrics.netProfit)}\n\n💡 **Diagnosa TemanUsaha:**\nMargin kotor toko Anda saat ini berkisar **${marginPercent}%**. Jika laba terasa tipis, ada 2 faktor utama:\n- Sebagian barang pokok (seperti beras & telur) memiliki margin kecil (8%-12%).\n- Pengeluaran operasional hari ini tercatat ${formatRupiah(metrics.totalOpsExpenses)}.\n\n🎯 **Saran Tindakan:**\nDorong penjualan produk pelengkap yang marginnya di atas 20% (misal kopi kemasan atau bumbu) saat pelanggan membeli barang pokok.`,
      category: 'Keuangan & Laba'
    };
  }

  // Pertanyaan 2: Produk mana yang paling menguntungkan?
  if (q.includes('paling untung') || q.includes('laris') || q.includes('terbaik') || q.includes('produk mana')) {
    const sortedByProfit = [...products].map(p => {
      const marginRp = p.sellPrice - p.costPrice;
      const marginPct = Math.round((marginRp / p.sellPrice) * 100);
      const dailyEstProfit = marginRp * p.dailySalesAvg;
      return { ...p, marginRp, marginPct, dailyEstProfit };
    }).sort((a, b) => b.dailyEstProfit - a.dailyEstProfit);

    const top1 = sortedByProfit[0];
    const top2 = sortedByProfit[1];
    const highMargin = [...products].sort((a, b) => ((b.sellPrice - b.costPrice)/b.sellPrice) - ((a.sellPrice - a.costPrice)/a.sellPrice))[0];

    return {
      answer: `Dari catatan penjualan toko Anda:\n\n🥇 **Penyumbang Laba Terbesar Harian:**\n- **${top1.name}**: Estimasi laba ${formatRupiah(top1.dailyEstProfit)}/hari (Terjual ~${top1.dailySalesAvg} ${top1.unit}/hari, margin ${top1.marginPct}%)\n- **${top2.name}**: Estimasi laba ${formatRupiah(top2.dailyEstProfit)}/hari\n\n💎 **Persentase Margin Tertinggi:**\n- **${highMargin.name}** memiliki persentase keuntungan tertinggi, yaitu **${Math.round(((highMargin.sellPrice - highMargin.costPrice)/highMargin.sellPrice)*100)}%** per unit.\n\n🎯 **Saran Tindakan:**\nJangan sampai ${top1.name} dan ${top2.name} kehabisan stok, karena inilah tulang punggung penghasil uang kas harian toko Anda.`,
      category: 'Analisis Produk'
    };
  }

  // Pertanyaan 3: Alokasi modal (misal ada uang 3-5 juta)
  if (q.includes('modal') || q.includes('5 juta') || q.includes('3 juta') || q.includes('alokasi') || q.includes('digunakan untuk apa')) {
    const restockNeeds = metrics.criticalStockItems.reduce((acc, i) => acc + i.estimatedCost, 0);
    return {
      answer: `Jika Anda memiliki tambahan modal, berikut pembagian alokasi paling aman untuk usaha Anda:\n\n1. **Prioritas 1 (40% - ~${formatRupiah(restockNeeds || 1200000)}): Belanja Ulang Stok Kritis.**\nAmankan produk yang perputarannya cepat dan hampir habis (${metrics.criticalStockItems.map(i => i.name).join(', ') || 'Beras & Minyak'}). Ini uang berputar cepat.\n\n2. **Prioritas 2 (30% - Kas Cadangan Operasional):**\nSimpan di rekening/dompet terpisah untuk antisipasi lonjakan harga beli dari distributor atau kebutuhan mendesak toko.\n\n3. **Prioritas 3 (20% - Produk Baru yang Banyak Dicari):**\nTanyakan ke 5 pelanggan terakhir barang apa yang sering mereka cari tapi belum tersedia di toko Anda.\n\n4. **Prioritas 4 (10% - Uang Pribadi/Tabungan Darurat Keluarga):**\nSisihkan untuk hak pribadi agar tidak tergoda mengutak-atik kas toko saat ada keperluan mendadak.`,
      category: 'Strategi Modal'
    };
  }

  // Pertanyaan 4: Apakah boleh ambil uang pribadi hari ini?
  if (q.includes('pribadi') || q.includes('ambil uang') || q.includes('gaji') || q.includes('belanja dapur') || q.includes('keperluan rumah')) {
    if (metrics.isPersonalOverdrawn) {
      return {
        answer: `⚠️ **Sangat Tidak Disarankan Mengambil Uang Kas Hari Ini!**\n\nCatatan Anda menunjukkan pengambilan pribadi hari ini sudah mencapai **${formatRupiah(metrics.totalPersonalDraw)}**, sedangkan laba bersih baru terkumpul **${formatRupiah(metrics.netProfit)}**.\n\nArtinya sudah ada **${formatRupiah(metrics.capitalErosionAmount)} uang modal belanja ulang yang terpakai**.\n\nJika Anda mengambil uang lagi, besok Anda akan kekurangan modal saat sales distributor datang mengantarkan barang.`,
        category: 'Disiplin Keuangan'
      };
    } else {
      return {
        answer: `✅ **Aman untuk Diambil Secukupnya.**\n\nSetelah dikurangi modal belanja ulang barang yang terjual (${formatRupiah(metrics.lockedRestockFund)}) dan biaya operasional, sisa uang laba bersih yang aman Anda bawa pulang hari ini adalah:\n\n👉 **Maksimal: ${formatRupiah(metrics.safePersonalAllowance)}**\n\nPastikan sisa kas di laci tidak berkurang di bawah modal kas awal agar toko tetap siap uang kembalian besok pagi.`,
        category: 'Disiplin Keuangan'
      };
    }
  }

  // Pertanyaan 5: Apakah mampu menambah karyawan?
  if (q.includes('karyawan') || q.includes('pegawai') || q.includes('bantu') || q.includes('tambah orang')) {
    return {
      answer: `Mari kita hitung secara rasional tanpa tebak-tebakan:\n\n1. Misalkan gaji 1 karyawan toko adalah Rp 1.500.000 - Rp 2.000.000/bulan.\n2. Rata-rata margin bersih toko Anda adalah ~12%.\n3. Artinya, untuk menutup gaji Rp 1.500.000/bulan, toko Anda harus menambah omzet penjualan minimal:\n   $$\\frac{\\text{Rp 1.500.000}}{12\\%} = \\mathbf{Rp 12.500.000/bulan} \\text{ (atau ~Rp 420.000/hari)}$$\n\n💡 **Kesimpulan TemanUsaha:**\nBila penambahan karyawan bisa membuat Anda fokus menambah omzet lebih dari Rp 420.000/hari (misal Anda bisa kulakan partai besar atau melayani pesanan katering), maka merekrut karyawan **sangat layak**. Namun jika hanya untuk menjaga kasir sementara omzet tetap sama, sebaiknya gunakan sistem pencatatan cepat terlebih dahulu.`,
      category: 'Keputusan Investasi'
    };
  }

  // Default: Analisis kondisi umum
  return {
    answer: `Halo! Saya memeriksa catatan toko Anda hari ini:\n- Total omzet: ${formatRupiah(metrics.totalSales)}\n- Laba bersih: ${formatRupiah(metrics.netProfit)}\n- Sisa kas fisik di tangan: ${formatRupiah(metrics.cashInHand)}\n- Nilai modal barang di toko: ${formatRupiah(metrics.totalInventoryAssetValue)}\n\nAda hal spesifik yang ingin kita bahas? Anda bisa tanyakan seputar stok kritis, penagihan piutang, cara hitung harga jual, atau simulasi keuntungan.`,
    category: 'Konsultasi Umum'
  };
}

// WhatsApp Message Generator untuk Tagih Piutang Santun
export function generateWhatsAppReminder(customer) {
  const isOverdue = customer.isOverdue;
  const greeting = customer.name.startsWith('Bu') ? 'Bu' : customer.name.startsWith('Pak') ? 'Pak' : 'Kak';

  if (isOverdue) {
    return `Halo ${customer.name}, semoga kabar ${greeting} dan keluarga sehat selalu ya 🙏\n\nMohon maaf sebelumnya ${greeting}, sekadar menginformasikan catatan belanja tempo kemarin sebesar *${formatRupiah(customer.debtAmount)}* (${customer.notes}) yang jatuh tempo pada tanggal ${customer.dueDate}.\n\nJika ${greeting} berkenan, pembayarannya bisa dititipkan ke toko atau via transfer ya ${greeting}. Terima kasih banyak atas kerja sama dan langganannya selama ini 🙏😊`;
  }

  return `Halo ${customer.name}, selamat siang, semoga usaha dan kegiatannya lancar hari ini 🙏\n\nSekadar mengingatkan catatan belanja tempo sebesar *${formatRupiah(customer.debtAmount)}* (${customer.notes}) yang jatuh tempo ${customer.isDueToday ? '*hari ini*' : 'besok lusa'}.\n\nBila ada yang perlu disiapkan atau dicek kembali, kabari kami ya ${greeting}. Terima kasih banyak atas kepercayaannya berbelanja di toko kami 🙏`;
}
