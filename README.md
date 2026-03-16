# LR Store - Top Up Diamond ML, Pulsa & PLN Murah

Landing page resmi untuk platform top up game dan pembayaran digital **LR Store**.

## 🚀 Cara Deploy ke GitHub Pages (GRATIS)

### Langkah 1: Buat Akun GitHub
1. Buka [github.com](https://github.com) dan daftar akun gratis
2. Verifikasi email kamu

### Langkah 2: Buat Repository Baru
1. Klik tombol **"New"** atau **"+"** di pojok kanan atas
2. Nama repository: `lrstore` (atau nama bebas)
3. Pilih **Public**
4. Klik **Create repository**

### Langkah 3: Upload File
1. Di halaman repository, klik **"uploading an existing file"**
2. Upload **semua file** dari folder ini:
   - `index.html`
   - `heroes.html`
   - folder `css/` (beserta `style.css` di dalamnya)
   - folder `js/` (beserta `main.js` di dalamnya)
3. Klik **"Commit changes"**

### Langkah 4: Aktifkan GitHub Pages
1. Klik tab **Settings** di repository kamu
2. Scroll ke bawah, cari menu **Pages** di sidebar kiri
3. Di bagian **Source**, pilih **Deploy from a branch**
4. Branch: pilih **main**, folder: **/ (root)**
5. Klik **Save**
6. Tunggu 2-3 menit, lalu website kamu live di:
   `https://USERNAME.github.io/lrstore/`

---

## 🔍 Cara Masuk Google Search (SEO)

### Langkah 1: Daftarkan ke Google Search Console
1. Buka [search.google.com/search-console](https://search.google.com/search-console)
2. Login pakai akun Google
3. Klik **"Add Property"**
4. Masukkan URL GitHub Pages kamu: `https://USERNAME.github.io/lrstore/`
5. Pilih metode verifikasi **HTML tag**
6. Copy meta tag verifikasi yang diberikan Google
7. Buka `index.html` dan paste meta tag di dalam `<head>`
8. Commit dan push perubahan
9. Kembali ke Search Console dan klik **Verify**

### Langkah 2: Submit Sitemap
1. Di Search Console, klik **Sitemaps**
2. Masukkan URL: `sitemap.xml`
3. Klik **Submit**

### Langkah 3: Request Indexing
1. Di Search Console, pilih **URL Inspection**
2. Masukkan URL homepage kamu
3. Klik **Request Indexing**
4. Ulangi untuk halaman `heroes.html`

### Estimasi Waktu Muncul di Google
- Halaman baru: **3-14 hari**
- Lebih cepat jika sering dishare di media sosial
- Gunakan domain sendiri (.com/.my.id) agar lebih cepat dan profesional

---

## ✏️ Cara Tambah Video YouTube Hero

Buka file `heroes.html`, cari data hero yang ingin ditambah video, contoh:
```
{ name:"Lancelot", role:"Assassin", youtube_id:"ABC123xyz", ...
```
Ganti `""` dengan ID video YouTube kamu.

ID YouTube ada di URL video: `youtube.com/watch?v=**ID_DI_SINI**`

---

## 📁 Struktur File
```
lrstore/
├── index.html          ← Halaman utama
├── heroes.html         ← Panduan hero ML
├── sitemap.xml         ← Untuk SEO Google
├── css/
│   └── style.css       ← Semua styling
└── js/
    └── main.js         ← Slider, FAQ, interaksi
```

## 🔗 Link Penting
- Website: https://lrstore.id
- Login: https://lrstore.id/id/sign-in  
- Daftar: https://lrstore.id/id/sign-up
