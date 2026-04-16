# Website Portofolio — Rambu Ilalang

Website portofolio pribadi yang dibuat dengan React dan TypeScript. Menampilkan profil, keahlian, proyek, dan formulir kontak dalam satu halaman yang responsif.

---

## Fitur

- **Hero Section** — Menampilkan nama, tagline, foto profil, dan tombol navigasi cepat
- **About Section** — Latar belakang, pendidikan, pengalaman, dan tombol unduh CV
- **Skills Section** — Daftar keahlian yang dikelompokkan per kategori
- **Projects Section** — Kartu proyek dengan deskripsi, teknologi, link repo, dan demo
- **Contact Section** — Formulir kontak yang mengirim email langsung + link media sosial
- **Dark Mode** — Beralih antara tema terang dan gelap, preferensi tersimpan otomatis
- **Navigasi Aktif** — Navbar otomatis menandai section yang sedang dilihat
- **Responsif** — Tampilan menyesuaikan di mobile, tablet, dan desktop

---

## Tools & Teknologi

| Kategori | Tools |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animasi | Framer Motion |
| Kirim Email | EmailJS |
| Testing | Vitest + React Testing Library + fast-check |

---

## Cara Instalasi

### 1. Clone repository

```bash
git clone <url-repository>
cd web-porto_kiro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup EmailJS (untuk formulir kontak)

Buat file `.env` di root project:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Daftar gratis di [emailjs.com](https://www.emailjs.com) untuk mendapatkan kredensial di atas.

### 4. Jalankan di lokal

```bash
npm run dev
```

Buka `http://localhost:5173` di browser.

---

## Kustomisasi Data

Semua data portofolio (nama, skills, proyek, dll.) ada di satu file:

```
src/data/portfolio.ts
```

Edit file tersebut untuk mengganti konten sesuai profil kamu.

Untuk foto profil, letakkan file gambar di folder `public/` lalu update path di `portfolio.ts`:

```ts
profileImageUrl: '/nama-file-foto.jpeg',
```

---

## Perintah Lainnya

```bash
npm run build      # Build untuk production
npm run preview    # Preview hasil build
npm run lint       # Cek kode dengan ESLint
npx vitest --run   # Jalankan semua test
```
