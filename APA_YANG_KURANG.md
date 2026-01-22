# Hal yang Kurang dan Perlu Diperbaiki

Berikut adalah daftar hal-hal yang perlu diperhatikan atau ditambahkan di masa mendatang untuk meningkatkan kualitas portfolio:

## 1. Aset Media
- [ ] **Foto Profil**: Saat ini foto profil masih menggunakan placeholder atau link yang mungkin tidak valid (`/images/profile-photo.jpg`).
- [ ] **File CV**: Link download CV merujuk ke `/files/cv-muhammad-sobri-maulana.pdf` yang belum ada.
- [ ] **Gambar Proyek**: Banyak kartu portfolio menggunakan placeholder gambar. Perlu ditambahkan gambar asli untuk setiap proyek/pencapaian.

## 2. Konten
- [ ] **Detail Publikasi**: Pastikan semua link DOI atau link jurnal berfungsi dengan baik.
- [ ] **Sertifikat**: Scan sertifikat asli perlu diunggah jika ingin ditampilkan di halaman detail.
- [ ] **Google Scholar ID**: Update link Google Scholar dengan ID yang benar (saat ini masih `user=example`).

## 3. Teknis & Fitur
- [ ] **PWA Support**: Menambahkan `manifest.json` dan service worker untuk dukungan Offline.
- [ ] **Analytics**: Menambahkan Google Analytics atau Plausible untuk memantau pengunjung.
- [ ] **Contact Form Backend**: Form kontak saat ini mungkin hanya UI saja, perlu integrasi dengan layanan seperti Formspree atau Netlify Forms.
- [ ] **Dark Mode**: Menambahkan toggle tema gelap untuk kenyamanan mata.
- [ ] **SEO Optimization**: Menambahkan meta tags yang lebih spesifik untuk setiap halaman detail.

## 4. Animasi Lanjutan
- [ ] Menggunakan library seperti `Framer Motion` untuk transisi halaman yang lebih smooth.
- [ ] Menambahkan *reveal animation* saat scroll menggunakan `Intersection Observer`.

## 5. Perbaikan yang Telah Dilakukan
- [x] **Mobile Responsiveness**: Memperbaiki menu navigasi yang sebelumnya tidak bisa dibuka di HP.
- [x] **Logo & Favicon**: Menambahkan logo placeholder berbasis SVG.
- [x] **Fix Build Errors**: Memperbaiki error saat build (Missing dependencies & CSS import order).
- [x] **Basic Animations**: Menambahkan animasi fade-in dan slide-up pada Hero section.
