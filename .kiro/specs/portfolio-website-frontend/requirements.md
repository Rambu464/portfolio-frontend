# Requirements Document

## Introduction

Fitur ini mencakup pembuatan front-end website portofolio pribadi yang menampilkan identitas, keahlian, proyek, dan informasi kontak pemilik. Website ini dirancang untuk memberikan kesan profesional kepada calon klien, rekruter, atau kolaborator yang mengunjunginya. Website bersifat responsif, mudah dinavigasi, dan dapat diakses di berbagai perangkat.

## Glossary

- **Website**: Aplikasi web front-end portofolio yang dibangun.
- **Visitor**: Pengguna yang mengakses website portofolio.
- **Hero_Section**: Bagian utama halaman yang pertama kali terlihat saat website dibuka, berisi nama, tagline, dan call-to-action.
- **About_Section**: Bagian yang menampilkan informasi singkat tentang pemilik portofolio.
- **Skills_Section**: Bagian yang menampilkan daftar keahlian teknis dan non-teknis pemilik.
- **Projects_Section**: Bagian yang menampilkan daftar proyek yang pernah dikerjakan.
- **Contact_Section**: Bagian yang menyediakan cara untuk menghubungi pemilik portofolio.
- **Navbar**: Komponen navigasi yang memungkinkan Visitor berpindah antar bagian halaman.
- **Project_Card**: Komponen kartu yang menampilkan ringkasan satu proyek.
- **Contact_Form**: Formulir yang memungkinkan Visitor mengirim pesan kepada pemilik.
- **Responsive_Layout**: Tata letak yang menyesuaikan tampilan berdasarkan ukuran layar perangkat.
- **Dark_Mode_Toggle**: Tombol yang memungkinkan Visitor beralih antara tema terang dan gelap.
- **Theme**: Skema warna yang diterapkan pada seluruh tampilan Website (terang atau gelap).

---

## Requirements

### Requirement 1: Navigasi Halaman

**User Story:** Sebagai Visitor, saya ingin dapat berpindah ke bagian mana pun di halaman dengan mudah, sehingga saya dapat menemukan informasi yang saya cari dengan cepat.

#### Acceptance Criteria

1. THE Navbar SHALL menampilkan tautan navigasi ke setiap bagian utama halaman (Hero, About, Skills, Projects, Contact).
2. WHEN Visitor mengklik tautan navigasi, THE Website SHALL melakukan smooth scroll ke bagian yang dituju.
3. WHILE Visitor menggulir halaman, THE Navbar SHALL tetap terlihat di bagian atas layar (sticky).
4. WHEN Visitor mengakses website dari perangkat mobile, THE Navbar SHALL menampilkan menu hamburger yang dapat dibuka dan ditutup.
5. WHEN Visitor membuka menu hamburger, THE Navbar SHALL menampilkan daftar tautan navigasi secara vertikal.

---

### Requirement 2: Hero Section

**User Story:** Sebagai Visitor, saya ingin melihat identitas dan pesan utama pemilik portofolio saat pertama kali membuka website, sehingga saya langsung memahami siapa pemiliknya dan apa yang ditawarkan.

#### Acceptance Criteria

1. THE Hero_Section SHALL menampilkan nama lengkap pemilik portofolio.
2. THE Hero_Section SHALL menampilkan tagline atau deskripsi singkat profesi pemilik.
3. THE Hero_Section SHALL menampilkan tombol call-to-action yang mengarahkan Visitor ke Projects_Section atau Contact_Section.
4. WHEN Visitor mengklik tombol call-to-action, THE Website SHALL melakukan smooth scroll ke bagian yang dituju.
5. WHERE foto profil tersedia, THE Hero_Section SHALL menampilkan foto profil pemilik.

---

### Requirement 3: About Section

**User Story:** Sebagai Visitor, saya ingin membaca informasi latar belakang pemilik portofolio, sehingga saya dapat mengenal pemilik lebih jauh sebelum memutuskan untuk berkolaborasi.

#### Acceptance Criteria

1. THE About_Section SHALL menampilkan deskripsi singkat tentang latar belakang dan pengalaman pemilik.
2. THE About_Section SHALL menampilkan informasi pendidikan atau pengalaman kerja yang relevan.
3. WHERE file CV tersedia, THE About_Section SHALL menampilkan tombol unduh CV yang mengarah ke file tersebut.
4. WHEN Visitor mengklik tombol unduh CV, THE Website SHALL membuka file CV di tab baru atau mengunduhnya.

---

### Requirement 4: Skills Section

**User Story:** Sebagai Visitor, saya ingin melihat daftar keahlian pemilik portofolio, sehingga saya dapat menilai apakah keahlian tersebut sesuai dengan kebutuhan saya.

#### Acceptance Criteria

1. THE Skills_Section SHALL menampilkan daftar keahlian teknis pemilik dalam bentuk yang mudah dibaca.
2. THE Skills_Section SHALL mengelompokkan keahlian berdasarkan kategori (misalnya: Frontend, Backend, Tools).
3. WHERE tingkat kemahiran tersedia, THE Skills_Section SHALL menampilkan indikator tingkat kemahiran untuk setiap keahlian.

---

### Requirement 5: Projects Section

**User Story:** Sebagai Visitor, saya ingin melihat proyek-proyek yang pernah dikerjakan pemilik, sehingga saya dapat menilai kualitas dan pengalaman kerja pemilik secara nyata.

#### Acceptance Criteria

1. THE Projects_Section SHALL menampilkan daftar proyek dalam bentuk Project_Card.
2. THE Project_Card SHALL menampilkan judul proyek, deskripsi singkat, dan teknologi yang digunakan.
3. WHERE tautan repositori kode tersedia, THE Project_Card SHALL menampilkan tautan ke repositori tersebut.
4. WHERE tautan demo langsung tersedia, THE Project_Card SHALL menampilkan tautan ke demo proyek.
5. WHEN Visitor mengklik tautan pada Project_Card, THE Website SHALL membuka tautan tersebut di tab baru.
6. WHERE gambar pratinjau proyek tersedia, THE Project_Card SHALL menampilkan gambar pratinjau proyek.

---

### Requirement 6: Contact Section

**User Story:** Sebagai Visitor, saya ingin dapat menghubungi pemilik portofolio dengan mudah, sehingga saya dapat menyampaikan tawaran kerja sama atau pertanyaan.

#### Acceptance Criteria

1. THE Contact_Section SHALL menampilkan Contact_Form dengan kolom nama, alamat email, dan pesan.
2. WHEN Visitor mengirimkan Contact_Form dengan semua kolom terisi dan format email valid, THE Contact_Form SHALL memproses pengiriman pesan.
3. IF Visitor mengirimkan Contact_Form dengan kolom wajib yang kosong, THEN THE Contact_Form SHALL menampilkan pesan kesalahan yang menjelaskan kolom mana yang belum diisi.
4. IF Visitor memasukkan format email yang tidak valid, THEN THE Contact_Form SHALL menampilkan pesan kesalahan yang menyatakan format email tidak valid.
5. WHEN pengiriman pesan berhasil, THE Contact_Form SHALL menampilkan pesan konfirmasi keberhasilan kepada Visitor.
6. THE Contact_Section SHALL menampilkan tautan ke profil media sosial atau platform profesional pemilik (misalnya: LinkedIn, GitHub).

---

### Requirement 7: Tampilan Responsif

**User Story:** Sebagai Visitor, saya ingin website dapat ditampilkan dengan baik di berbagai ukuran layar, sehingga saya dapat mengaksesnya dari perangkat apa pun.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL menyesuaikan tata letak konten untuk layar dengan lebar kurang dari 768px (mobile).
2. THE Responsive_Layout SHALL menyesuaikan tata letak konten untuk layar dengan lebar antara 768px dan 1024px (tablet).
3. THE Responsive_Layout SHALL menyesuaikan tata letak konten untuk layar dengan lebar lebih dari 1024px (desktop).
4. WHILE Visitor mengakses website dari perangkat mobile, THE Projects_Section SHALL menampilkan Project_Card dalam satu kolom.
5. WHILE Visitor mengakses website dari perangkat desktop, THE Projects_Section SHALL menampilkan Project_Card dalam dua atau lebih kolom.

---

### Requirement 9: Dark Mode

**User Story:** Sebagai Visitor, saya ingin dapat beralih antara tema terang dan gelap, sehingga saya dapat menyesuaikan tampilan website dengan preferensi atau kondisi pencahayaan saya.

#### Acceptance Criteria

1. THE Navbar SHALL menampilkan Dark_Mode_Toggle yang dapat diklik oleh Visitor.
2. WHEN Visitor mengklik Dark_Mode_Toggle, THE Website SHALL beralih antara Theme terang dan Theme gelap.
3. WHILE Theme gelap aktif, THE Website SHALL menerapkan skema warna gelap pada seluruh komponen halaman.
4. WHILE Theme terang aktif, THE Website SHALL menerapkan skema warna terang pada seluruh komponen halaman.
5. WHEN Visitor memuat ulang halaman, THE Website SHALL mempertahankan preferensi Theme yang terakhir dipilih.
6. THE Dark_Mode_Toggle SHALL menampilkan ikon yang mencerminkan Theme yang sedang aktif.

---

### Requirement 8: Performa dan Aksesibilitas

**User Story:** Sebagai Visitor, saya ingin website dapat dimuat dengan cepat dan mudah digunakan, sehingga pengalaman browsing saya menjadi nyaman.

#### Acceptance Criteria

1. THE Website SHALL memuat halaman utama dalam waktu kurang dari 3 detik pada koneksi broadband standar.
2. THE Website SHALL menyediakan atribut `alt` yang deskriptif pada setiap elemen gambar.
3. THE Website SHALL menggunakan elemen HTML semantik yang sesuai (misalnya: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
4. THE Website SHALL memastikan rasio kontras warna antara teks dan latar belakang memenuhi standar minimum 4.5:1.
5. WHEN Visitor menavigasi website menggunakan keyboard, THE Website SHALL menampilkan indikator fokus yang terlihat pada setiap elemen interaktif.
