# TemanUsaha 🏪
### *Sahabat Bisnis UMKM Indonesia — Bukan Sekadar Mencatat, Tapi Membantu Mengambil Keputusan*

**TemanUsaha** adalah aplikasi asisten bisnis khusus pelaku UMKM Indonesia yang dirancang dari sudut pandang pedagang yang telah berjualan puluhan tahun. Aplikasi ini fokus menjawab 3 pertanyaan mendasar:
1. **Apa yang sedang terjadi?** *(Diagnosa kondisi keuangan dan perputaran barang)*
2. **Mengapa hal itu terjadi?** *(Analisis akar masalah: margin tipis, biaya operasional, piutang menunggak)*
3. **Apa yang sebaiknya saya lakukan?** *(Aksi konkret: belanja ulang stok kritis, tagih piutang sopan, amankan modal belanja)*

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini dibuat **super ringan, tanpa perlu install library yang berat**, dan bisa langsung dijalankan:

### Opsi 1: Buka Langsung di Browser (Paling Mudah)
* Cukup klik ganda (double-click) file **`index.html`** di folder ini.
* Aplikasi langsung terbuka di Google Chrome, Microsoft Edge, atau browser HP Anda.

### Opsi 2: Jalankan via Server Lokal (Bisa Diakses dari HP lewat Wi-Fi)
1. Buka terminal di folder ini.
2. Jalankan perintah:
   ```bash
   node server.js
   ```
3. Akses melalui:
   * **Di Komputer / Laptop**: [http://localhost:3000](http://localhost:3000)
   * **Di HP / Smartphone**: Buka alamat IP lokal yang tertera di terminal (misal: `http://192.168.x.x:3000`) pada Wi-Fi yang sama.

---

## 🌟 7 Fitur Utama Sesuai Kebutuhan UMKM

| Fitur | Kebutuhan Riil UMKM | Solusi di TemanUsaha |
| :--- | :--- | :--- |
| **1. Laporan Kondisi 1 Halaman** | Pedagang tidak punya waktu membuka banyak menu. | Health check harian: Kas di tangan, modal kulakan terkunci, sisa laba dingin, 3 peringatan mendesak pagi hari. |
| **2. Pemisah Uang Usaha vs Pribadi** | Seringkali dagangan ramai tapi modal belanja habis terpakai keperluan rumah. | Sistem otomatis memisahkan **HPP (Modal Belanja Ulang)** dari **Laba Bersih**. Jika uang pribadi yang diambil melebihi laba, sistem memberi sinyal bahaya: *"Modal kulakan tergerus!"*. |
| **3. Kasir & Pencatatan Cepat** | Butuh catat transaksi dalam hitungan detik di HP. | Pilih barang dengan 1 klik, hitung HPP otomatis, dukung pembayaran Tunai maupun Bon Tempo. |
| **4. Stok Pencegah Kerugian** | Mencegah kehabisan barang laku dan mencegah uang mati di barang menumpuk. | Indikator estimasi hari habis, deteksi barang *slow-moving*, dan tombol cepat *"Kulakan"* yang otomatis memotong kas toko. |
| **5. Buku Piutang & Tagih WA Sopan** | Menjaga silaturahmi pelanggan namun tetap tertib menagih. | Daftar jatuh tempo bon + tombol *"Kirim WA Sopan"* yang otomatis menyusun pesan santun dan membuka WhatsApp dalam 1 klik. |
| **6. Kalkulator Harga & Margin** | Banyak UMKM salah hitung margin karena hanya menambah markup ke modal. | Menghitung harga jual berdasarkan HPP lengkap + target margin laba bersih. Memberikan 3 tier harga: Eceran, Grosir, Reseller. |
| **7. Asisten TemanUsaha (AI Bisnis)** | Butuh teman diskusi tanpa istilah akuntansi rumit. | Tanya jawab berbasis angka riil: *"Kenapa laba terasa tipis?"*, *"Produk mana paling untung?"*, *"Aman ambil uang pribadi?"*, *"Mampu tambah karyawan?"*. |
| **8. Generator Promosi & Pemasaran** | Kesulitan merangkai kata promosi untuk mencairkan produk menumpuk. | Menghasilkan draf status WhatsApp, promo paket hemat cuci gudang, dan cerita edukasi siap salin. |

---

## 🔒 Privasi & Keamanan Data
* Semua data tersimpan aman di penyimpanan lokal peramban Anda (**LocalStorage**).
* Tidak memerlukan internet khusus untuk pencatatan harian.
* Dilengkapi tombol **"Reset Demo"** untuk mencoba simulasi atau memulai catatan dari nol.
