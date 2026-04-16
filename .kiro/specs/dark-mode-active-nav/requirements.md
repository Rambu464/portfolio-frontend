# Requirements Document

## Introduction

Fitur ini menambahkan dua peningkatan UI ke website portofolio yang sudah ada: **Dark Mode** dan **Active Nav Indicator**. Dark Mode memungkinkan Visitor mengubah tampilan website ke tema gelap dengan preferensi yang disimpan secara persisten. Active Nav Indicator secara otomatis meng-highlight item navigasi yang sesuai dengan section yang sedang terlihat di viewport. Kedua fitur terintegrasi dalam komponen Navbar yang sama, dengan state dark mode dikelola melalui React Context.

## Glossary

- **ThemeProvider**: Komponen React Context provider yang menyediakan state dark mode ke seluruh component tree.
- **ThemeContext**: React Context yang menyimpan nilai `isDark` dan fungsi `toggleTheme`.
- **DarkModeToggle**: Komponen tombol yang menampilkan ikon matahari/bulan dan memicu perubahan tema.
- **Theme**: Nilai bertipe `'light'` atau `'dark'` yang merepresentasikan tema aktif.
- **isDark**: Boolean state yang bernilai `true` saat dark mode aktif.
- **toggleTheme**: Fungsi yang membalik nilai `isDark` dan menyinkronkan perubahan ke localStorage.
- **getInitialTheme**: Fungsi yang menentukan tema awal berdasarkan localStorage atau OS preference.
- **useTheme**: Custom hook yang mengakses `ThemeContext` dari dalam komponen.
- **useActiveSection**: Custom hook yang menggunakan `IntersectionObserver` untuk melacak section aktif.
- **ActiveSection**: ID string dari section yang sedang paling terlihat di viewport.
- **IntersectionObserver**: Browser API yang digunakan untuk mendeteksi visibilitas elemen di viewport.
- **SectionId**: Salah satu dari nilai `'hero'`, `'about'`, `'skills'`, `'projects'`, `'contact'`.
- **Navbar**: Komponen navigasi yang menampilkan tautan ke setiap section dan tombol DarkModeToggle.
- **THEME_STORAGE_KEY**: Kunci localStorage `'portfolio-theme'` yang digunakan untuk menyimpan preferensi tema.

---

## Requirements

### Requirement 1: Theme State Management

**User Story:** Sebagai Visitor, saya ingin preferensi tema saya disimpan secara persisten, sehingga saya tidak perlu mengatur ulang tema setiap kali membuka website.

#### Acceptance Criteria

1. THE ThemeProvider SHALL menyediakan nilai `isDark` dan fungsi `toggleTheme` ke seluruh komponen dalam component tree.
2. WHEN `getInitialTheme` dipanggil dan `localStorage` berisi nilai `'dark'` atau `'light'` pada kunci `THEME_STORAGE_KEY`, THE ThemeProvider SHALL menggunakan nilai tersebut sebagai tema awal.
3. WHEN `getInitialTheme` dipanggil dan `localStorage` tidak berisi nilai yang valid, THE ThemeProvider SHALL menggunakan nilai `prefers-color-scheme` dari OS sebagai tema awal.
4. IF `localStorage` tidak tersedia dan `prefers-color-scheme` tidak dapat dibaca, THEN THE ThemeProvider SHALL menggunakan `'light'` sebagai tema awal.
5. THE `getInitialTheme` SHALL selalu mengembalikan salah satu dari nilai `'light'` atau `'dark'` untuk semua kombinasi input yang valid maupun tidak valid.
6. WHEN `useTheme` dipanggil di luar `ThemeProvider`, THE `useTheme` SHALL melempar error dengan pesan yang menjelaskan bahwa hook harus digunakan di dalam `ThemeProvider`.

---

### Requirement 2: Theme Toggle dan Persistensi

**User Story:** Sebagai Visitor, saya ingin dapat mengaktifkan dan menonaktifkan dark mode dengan satu klik, sehingga saya dapat menyesuaikan tampilan sesuai preferensi saya.

#### Acceptance Criteria

1. WHEN `toggleTheme` dipanggil, THE ThemeProvider SHALL membalik nilai `isDark` dari `true` ke `false` atau sebaliknya.
2. WHEN `toggleTheme` dipanggil, THE ThemeProvider SHALL menyimpan nilai tema baru ke `localStorage` pada kunci `THEME_STORAGE_KEY`.
3. WHILE `isDark` bernilai `true`, THE ThemeProvider SHALL memastikan elemen `document.documentElement` memiliki class `'dark'`.
4. WHILE `isDark` bernilai `false`, THE ThemeProvider SHALL memastikan elemen `document.documentElement` tidak memiliki class `'dark'`.
5. THE ThemeProvider SHALL memastikan nilai `isDark` dan nilai yang tersimpan di `localStorage[THEME_STORAGE_KEY]` selalu sinkron setelah setiap pemanggilan `toggleTheme`.

---

### Requirement 3: DarkModeToggle Component

**User Story:** Sebagai Visitor, saya ingin melihat tombol toggle yang jelas di navbar, sehingga saya dapat dengan mudah mengaktifkan atau menonaktifkan dark mode.

#### Acceptance Criteria

1. WHILE `isDark` bernilai `false`, THE DarkModeToggle SHALL menampilkan ikon bulan (moon icon).
2. WHILE `isDark` bernilai `true`, THE DarkModeToggle SHALL menampilkan ikon matahari (sun icon).
3. WHEN Visitor mengklik DarkModeToggle, THE DarkModeToggle SHALL memanggil fungsi `toggleTheme`.
4. WHILE `isDark` bernilai `false`, THE DarkModeToggle SHALL memiliki `aria-label` yang mendeskripsikan aksi mengaktifkan dark mode.
5. WHILE `isDark` bernilai `true`, THE DarkModeToggle SHALL memiliki `aria-label` yang mendeskripsikan aksi mengaktifkan light mode.
6. THE DarkModeToggle SHALL memiliki `aria-label` yang berbeda antara state `isDark === true` dan `isDark === false`, dan keduanya harus berupa string non-empty.

---

### Requirement 4: Active Section Detection

**User Story:** Sebagai Visitor, saya ingin navbar secara otomatis menunjukkan section mana yang sedang saya baca, sehingga saya selalu tahu posisi saya di halaman.

#### Acceptance Criteria

1. THE `useActiveSection` SHALL menerima array `sectionIds` yang non-empty dan mengembalikan ID section yang sedang paling terlihat di viewport.
2. THE `useActiveSection` SHALL selalu mengembalikan string yang merupakan salah satu elemen dari array `sectionIds` yang diberikan.
3. WHEN tidak ada section yang sedang intersecting dengan viewport, THE `useActiveSection` SHALL mengembalikan elemen pertama dari `sectionIds`.
4. WHEN `useActiveSection` digunakan dan komponen di-unmount, THE `useActiveSection` SHALL memanggil `observer.disconnect()` untuk membersihkan IntersectionObserver.
5. IF elemen DOM dengan ID tertentu tidak ditemukan saat observer dibuat, THEN THE `useActiveSection` SHALL melewati elemen tersebut tanpa error.
6. IF `IntersectionObserver` tidak tersedia di browser, THEN THE `useActiveSection` SHALL mengembalikan elemen pertama dari `sectionIds` sebagai nilai default.

---

### Requirement 5: Active Nav Indicator di Navbar

**User Story:** Sebagai Visitor, saya ingin melihat highlight visual pada item navigasi yang sesuai dengan section yang sedang saya lihat, sehingga saya dapat dengan mudah berpindah ke section lain.

#### Acceptance Criteria

1. WHEN `activeSection` bernilai ID suatu section, THE Navbar SHALL menerapkan class aktif (`border-b-2 border-indigo-600`) pada nav link yang sesuai di tampilan desktop.
2. WHEN `activeSection` bernilai ID suatu section, THE Navbar SHALL menerapkan class aktif (background highlight) pada nav link yang sesuai di tampilan mobile.
3. THE Navbar SHALL memastikan tepat satu nav link memiliki class aktif pada satu waktu untuk semua nilai `activeSection` yang valid.
4. WHEN `activeSection` berubah, THE Navbar SHALL memperbarui class aktif pada nav link yang sesuai tanpa memerlukan reload halaman.
5. THE Navbar SHALL menampilkan DarkModeToggle di sebelah tombol hamburger menu.

---

### Requirement 6: Tailwind Dark Mode Integration

**User Story:** Sebagai Visitor, saya ingin seluruh tampilan website berubah ke tema gelap saat dark mode diaktifkan, sehingga pengalaman visual saya konsisten di semua bagian halaman.

#### Acceptance Criteria

1. THE Website SHALL menggunakan strategi `darkMode: 'class'` pada konfigurasi Tailwind CSS.
2. WHILE class `'dark'` ada pada elemen `document.documentElement`, THE Navbar SHALL menampilkan background gelap (`dark:bg-gray-900`).
3. WHILE class `'dark'` ada pada elemen `document.documentElement`, THE HeroSection SHALL menampilkan gradient gelap (`dark:from-gray-900 dark:to-gray-800`).
4. WHILE class `'dark'` ada pada elemen `document.documentElement`, THE Website SHALL menampilkan teks dengan warna yang sesuai untuk kontras pada latar belakang gelap.
5. THE ThemeProvider SHALL membungkus seluruh component tree di `App.tsx` sehingga semua komponen dapat mengakses state tema.

