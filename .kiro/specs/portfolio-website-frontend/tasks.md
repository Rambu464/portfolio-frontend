# Implementation Plan: Portfolio Website Frontend

## Overview

Implementasi website portofolio sebagai Single Page Application (SPA) menggunakan React + TypeScript + Vite + Tailwind CSS. Setiap task membangun di atas task sebelumnya, dimulai dari setup proyek, data model, komponen UI, hingga integrasi penuh.

## Tasks

- [x] 1. Setup proyek dan struktur dasar
  - Inisialisasi proyek Vite + React + TypeScript
  - Konfigurasi Tailwind CSS
  - Install dependensi: `framer-motion` (opsional), `emailjs-com`, `fast-check`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`
  - Buat struktur direktori: `src/components`, `src/data`, `src/utils`, `src/__tests__/unit`, `src/__tests__/property`
  - Konfigurasi Vitest di `vite.config.ts`
  - _Requirements: 8.3_

- [x] 2. Definisikan data model dan data statis portofolio
  - [x] 2.1 Buat file `src/data/types.ts` dengan semua interface TypeScript
    - Definisikan `HeroData`, `AboutData`, `EducationItem`, `ExperienceItem`, `SkillCategory`, `Skill`, `Project`, `ContactData`, `SocialLink`, `ContactFormData`, `FormSubmissionStatus`
    - _Requirements: 2.1, 2.2, 3.1, 4.1, 5.1, 6.1_
  - [x] 2.2 Buat file `src/data/portfolio.ts` dengan data portofolio statis
    - Isi data contoh untuk semua section (hero, about, skills, projects, contact)
    - _Requirements: 2.1, 2.2, 3.1, 4.1, 5.1, 6.6_

- [x] 3. Implementasi utilitas validasi form
  - [x] 3.1 Buat file `src/utils/validation.ts`
    - Implementasikan fungsi `isValidEmail(email: string): boolean`
    - Implementasikan fungsi `validateContactForm(data: ContactFormData): ValidationResult`
    - _Requirements: 6.2, 6.3, 6.4_
  - [ ]* 3.2 Tulis property test untuk validasi form
    - **Property 8: Validasi form menerima data yang valid**
    - **Validates: Requirements 6.2**
    - **Property 9: Validasi form menolak field kosong atau whitespace**
    - **Validates: Requirements 6.3**
    - **Property 10: isValidEmail menolak format email yang tidak valid**
    - **Validates: Requirements 6.4**
    - Buat file `src/__tests__/property/validation.property.test.ts`
  - [ ]* 3.3 Tulis unit test untuk validasi form
    - Test kasus valid, email kosong, nama kosong, pesan kosong, format email salah
    - Buat file `src/__tests__/unit/validation.test.ts`
    - _Requirements: 6.2, 6.3, 6.4_

- [x] 4. Implementasi komponen Navbar
  - [x] 4.1 Buat komponen `src/components/Navbar.tsx`
    - Tampilkan tautan navigasi ke semua section (Hero, About, Skills, Projects, Contact)
    - Implementasikan sticky navbar (posisi fixed/sticky di atas)
    - Implementasikan smooth scroll saat tautan diklik menggunakan anchor link
    - Implementasikan hamburger menu untuk tampilan mobile
    - Toggle buka/tutup menu hamburger
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  - [ ]* 4.2 Tulis unit test untuk Navbar
    - Verifikasi semua tautan navigasi ada
    - Verifikasi hamburger menu muncul di mobile (simulasi viewport kecil)
    - Verifikasi toggle hamburger menu
    - Buat file `src/__tests__/unit/Navbar.test.tsx`
    - _Requirements: 1.1, 1.4, 1.5_

- [x] 5. Implementasi HeroSection
  - [x] 5.1 Buat komponen `src/components/HeroSection.tsx`
    - Tampilkan nama lengkap, tagline, dan tombol CTA
    - Implementasikan conditional rendering foto profil (hanya jika `profileImageUrl` tersedia)
    - Tambahkan atribut `alt` deskriptif pada elemen gambar
    - Tombol CTA melakukan smooth scroll ke section target
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 8.2_
  - [ ]* 5.2 Tulis property test untuk HeroSection
    - **Property 1: HeroSection merender semua data yang diberikan**
    - **Validates: Requirements 2.1, 2.2, 2.3**
    - **Property 2: Conditional rendering foto profil di HeroSection**
    - **Validates: Requirements 2.5**
    - **Property 12: Semua elemen gambar memiliki atribut alt yang tidak kosong**
    - **Validates: Requirements 8.2**
    - Buat file `src/__tests__/property/HeroSection.property.test.tsx`
  - [ ]* 5.3 Tulis unit test untuk HeroSection
    - Test render dengan dan tanpa foto profil
    - Test klik tombol CTA
    - Buat file `src/__tests__/unit/HeroSection.test.tsx`
    - _Requirements: 2.1, 2.2, 2.3, 2.5_

- [x] 6. Implementasi AboutSection
  - [x] 6.1 Buat komponen `src/components/AboutSection.tsx`
    - Tampilkan deskripsi, pendidikan, dan pengalaman kerja
    - Implementasikan conditional rendering tombol unduh CV (hanya jika `cvUrl` tersedia)
    - Tombol unduh CV membuka file di tab baru
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  - [ ]* 6.2 Tulis property test untuk AboutSection
    - **Property 3: AboutSection merender semua data yang diberikan**
    - **Validates: Requirements 3.1, 3.2**
    - **Property 4: Conditional rendering tombol CV di AboutSection**
    - **Validates: Requirements 3.3**
    - Buat file `src/__tests__/property/AboutSection.property.test.tsx`
  - [ ]* 6.3 Tulis unit test untuk AboutSection
    - Test render dengan dan tanpa cvUrl
    - Verifikasi tombol CV membuka tab baru
    - Buat file `src/__tests__/unit/AboutSection.test.tsx`
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 7. Implementasi SkillsSection
  - [x] 7.1 Buat komponen `src/components/SkillsSection.tsx`
    - Tampilkan skill yang dikelompokkan per kategori
    - Implementasikan conditional rendering indikator kemahiran (hanya jika `proficiencyLevel` tersedia)
    - _Requirements: 4.1, 4.2, 4.3_
  - [ ]* 7.2 Tulis property test untuk SkillsSection
    - **Property 5: SkillsSection merender semua skill dengan kategori dan indikator yang benar**
    - **Validates: Requirements 4.1, 4.2, 4.3**
    - Buat file `src/__tests__/property/SkillsSection.property.test.tsx`
  - [ ]* 7.3 Tulis unit test untuk SkillsSection
    - Test render kategori dan skill
    - Test conditional indikator kemahiran
    - Buat file `src/__tests__/unit/SkillsSection.test.tsx`
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 8. Checkpoint — Pastikan semua test lulus
  - Pastikan semua test lulus, tanyakan kepada user jika ada pertanyaan.

- [x] 9. Implementasi ProjectCard dan ProjectsSection
  - [x] 9.1 Buat komponen `src/components/ProjectCard.tsx`
    - Tampilkan judul, deskripsi, dan daftar teknologi
    - Implementasikan conditional rendering tautan repo, tautan demo, dan gambar pratinjau
    - Semua tautan dibuka di tab baru (`target="_blank"`)
    - Tambahkan atribut `alt` deskriptif pada gambar pratinjau
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6, 8.2_
  - [ ]* 9.2 Tulis property test untuk ProjectCard
    - **Property 7: ProjectCard merender tautan dan gambar opsional dengan benar**
    - **Validates: Requirements 5.3, 5.4, 5.5, 5.6**
    - **Property 12: Semua elemen gambar memiliki atribut alt yang tidak kosong**
    - **Validates: Requirements 8.2**
    - Buat file `src/__tests__/property/ProjectCard.property.test.tsx`
  - [x] 9.3 Buat komponen `src/components/ProjectsSection.tsx`
    - Render grid `ProjectCard` dari array `Project[]`
    - Layout responsif: satu kolom di mobile, dua kolom atau lebih di desktop (gunakan Tailwind grid)
    - _Requirements: 5.1, 7.4, 7.5_
  - [ ]* 9.4 Tulis property test untuk ProjectsSection
    - **Property 6: ProjectsSection merender semua proyek dengan konten lengkap**
    - **Validates: Requirements 5.1, 5.2**
    - Buat file `src/__tests__/property/ProjectsSection.property.test.tsx`
  - [ ]* 9.5 Tulis unit test untuk ProjectCard dan ProjectsSection
    - Test render dengan dan tanpa field opsional
    - Verifikasi `target="_blank"` pada semua tautan
    - Buat file `src/__tests__/unit/ProjectCard.test.tsx` dan `src/__tests__/unit/ProjectsSection.test.tsx`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 10. Implementasi ContactForm dan ContactSection
  - [x] 10.1 Buat komponen `src/components/ContactForm.tsx`
    - Implementasikan form dengan field nama, email, dan pesan
    - Integrasikan `validateContactForm` untuk validasi sisi klien
    - Tampilkan pesan error per field saat validasi gagal
    - Implementasikan state pengiriman: idle, submitting, success, error
    - Nonaktifkan tombol submit saat status `submitting`
    - Tampilkan pesan konfirmasi saat pengiriman berhasil
    - Integrasikan EmailJS untuk pengiriman form
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [ ]* 10.2 Tulis property test untuk ContactForm
    - **Property 8: Validasi form menerima data yang valid**
    - **Validates: Requirements 6.2**
    - **Property 9: Validasi form menolak field kosong atau whitespace**
    - **Validates: Requirements 6.3**
    - Buat file `src/__tests__/property/ContactForm.property.test.tsx`
  - [x] 10.3 Buat komponen `src/components/SocialLinks.tsx`
    - Tampilkan ikon dan tautan ke setiap profil media sosial
    - Semua tautan dibuka di tab baru
    - _Requirements: 6.6_
  - [x] 10.4 Buat komponen `src/components/ContactSection.tsx`
    - Gabungkan `ContactForm` dan `SocialLinks`
    - _Requirements: 6.1, 6.6_
  - [ ]* 10.5 Tulis property test untuk ContactSection
    - **Property 11: ContactSection merender semua tautan media sosial**
    - **Validates: Requirements 6.6**
    - Buat file `src/__tests__/property/ContactSection.property.test.tsx` (jika belum ada)
  - [ ]* 10.6 Tulis unit test untuk ContactForm dan ContactSection
    - Test submit form kosong → verifikasi pesan error muncul
    - Test submit form valid → verifikasi pesan sukses muncul
    - Test loading state saat submitting
    - Buat file `src/__tests__/unit/ContactForm.test.tsx` dan `src/__tests__/unit/ContactSection.test.tsx`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 11. Implementasi Footer dan integrasi App.tsx
  - [x] 11.1 Buat komponen `src/components/Footer.tsx`
    - Tampilkan informasi hak cipta atau pesan singkat
    - Gunakan elemen HTML semantik `<footer>`
    - _Requirements: 8.3_
  - [x] 11.2 Rakit semua komponen di `src/App.tsx`
    - Import dan render semua section: `Navbar`, `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`, `Footer`
    - Gunakan elemen HTML semantik: `<header>`, `<main>`, `<section>`, `<footer>`
    - Tambahkan `id` pada setiap section untuk anchor link navigasi
    - Import data dari `src/data/portfolio.ts` dan teruskan sebagai props ke komponen
    - _Requirements: 1.2, 8.3_
  - [ ]* 11.3 Tulis unit test untuk struktur semantik App
    - Verifikasi elemen `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` ada di DOM
    - Buat file `src/__tests__/unit/App.test.tsx`
    - _Requirements: 8.3_

- [x] 12. Checkpoint akhir — Pastikan semua test lulus
  - Pastikan semua test lulus, tanyakan kepada user jika ada pertanyaan.

## Notes

- Task bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirement spesifik untuk keterlacakan
- Property test menggunakan library **fast-check** dengan minimum 100 iterasi per property
- Unit test menggunakan **Vitest** + **React Testing Library**
- Jalankan test dengan perintah: `npx vitest --run`
