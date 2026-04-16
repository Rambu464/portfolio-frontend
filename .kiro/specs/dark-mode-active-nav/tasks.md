# Implementation Plan: Dark Mode & Active Nav Indicator

## Overview

Implementasi dark mode menggunakan Tailwind CSS `dark:` variant dengan ThemeContext/ThemeProvider untuk state management global, dan active nav indicator menggunakan `IntersectionObserver` melalui custom hook `useActiveSection`. Kedua fitur terintegrasi di komponen `Navbar`.

## Tasks

- [x] 1. Konfigurasi Tailwind dark mode
  - Tambahkan `darkMode: 'class'` ke `tailwind.config.js`
  - _Requirements: 6.1_

- [x] 2. Buat ThemeContext dan ThemeProvider
  - [x] 2.1 Implementasi `src/context/ThemeContext.tsx`
    - Buat `ThemeContextValue` interface dengan `isDark: boolean` dan `toggleTheme: () => void`
    - Implementasi `getInitialTheme()` dengan prioritas: localStorage → prefers-color-scheme → 'light'
    - Bungkus `getInitialTheme` dengan try/catch untuk handle localStorage tidak tersedia
    - Implementasi `ThemeProvider` dengan `useEffect` yang sync class `dark` ke `document.documentElement` dan simpan ke localStorage
    - Implementasi `useTheme()` hook yang throw error deskriptif jika dipanggil di luar provider
    - Export `ThemeProvider` dan `useTheme`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ]* 2.2 Write property test untuk `getInitialTheme` (Property 3)
    - **Property 3: `getInitialTheme` selalu mengembalikan nilai yang valid**
    - **Validates: Requirements 1.2, 1.3, 1.4, 1.5**
    - Gunakan `fc.option(fc.constantFrom('light', 'dark', 'invalid', ''))` × `fc.boolean()` sebagai generator
    - File: `src/__tests__/property/ThemeContext.property.test.ts`

  - [ ]* 2.3 Write property test untuk theme persistence (Property 1)
    - **Property 1: Theme persistence konsisten — `isDark` dan `localStorage` selalu sinkron**
    - **Validates: Requirements 2.1, 2.2, 2.5**
    - Gunakan `fc.array(fc.constant('toggle'), { minLength: 1, maxLength: 20 })` untuk simulate N toggles
    - File: `src/__tests__/property/ThemeContext.property.test.ts`

  - [ ]* 2.4 Write property test untuk class sync (Property 2)
    - **Property 2: Class `dark` pada `<html>` selalu sinkron dengan `isDark`**
    - **Validates: Requirements 2.3, 2.4**
    - Gunakan `fc.boolean()` sebagai arbitrary `isDark` value
    - File: `src/__tests__/property/ThemeContext.property.test.ts`

  - [ ]* 2.5 Write unit tests untuk ThemeContext
    - Test `getInitialTheme` dengan berbagai kombinasi localStorage/OS preference
    - Test `toggleTheme` mengubah `isDark` dan memperbarui localStorage
    - Test class `dark` ditambah/dihapus dari `<html>` dengan benar
    - Test `useTheme` di luar provider melempar error
    - File: `src/__tests__/unit/ThemeContext.test.tsx`

- [x] 3. Buat DarkModeToggle component
  - [x] 3.1 Implementasi `src/components/DarkModeToggle.tsx`
    - Gunakan `useTheme()` untuk mengakses `isDark` dan `toggleTheme`
    - Tampilkan moon SVG icon saat `isDark === false`, sun SVG icon saat `isDark === true`
    - Set `aria-label` dinamis: `'Aktifkan dark mode'` saat light, `'Aktifkan light mode'` saat dark
    - Terapkan styling: `p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 3.2 Write property test untuk DarkModeToggle aria-label (Property 6)
    - **Property 6: `aria-label` selalu deskriptif dan berbeda antara state `isDark === true` dan `false`**
    - **Validates: Requirements 3.4, 3.5, 3.6**
    - Gunakan `fc.boolean()` sebagai arbitrary `isDark` value
    - File: `src/__tests__/property/DarkModeToggle.property.test.tsx`

  - [ ]* 3.3 Write unit tests untuk DarkModeToggle
    - Test render ikon yang benar sesuai `isDark`
    - Test `aria-label` berubah sesuai state
    - Test klik memanggil `toggleTheme`
    - File: `src/__tests__/unit/DarkModeToggle.test.tsx`

- [x] 4. Checkpoint — Pastikan semua tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Buat useActiveSection hook
  - [x] 5.1 Implementasi `src/hooks/useActiveSection.ts`
    - Definisikan `UseActiveSectionOptions` interface dengan `sectionIds`, `rootMargin`, `threshold`
    - Inisialisasi state `activeSection` dengan `sectionIds[0]` sebagai default
    - Buat `IntersectionObserver` dengan `rootMargin = '-20% 0px -70% 0px'` dan `threshold = 0`
    - Observe semua elemen berdasarkan `sectionIds` dengan null-check sebelum `observer.observe()`
    - Feature detection: jika `IntersectionObserver` tidak tersedia, return `sectionIds[0]`
    - Cleanup dengan `observer.disconnect()` di return function `useEffect`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [ ]* 5.2 Write property test untuk useActiveSection (Property 4)
    - **Property 4: `useActiveSection` selalu mengembalikan ID yang valid dari `sectionIds`**
    - **Validates: Requirements 4.1, 4.2**
    - Gunakan `fc.array(fc.string({ minLength: 1 }), { minLength: 1 })` sebagai arbitrary `sectionIds`
    - File: `src/__tests__/property/useActiveSection.property.test.ts`

  - [ ]* 5.3 Write unit tests untuk useActiveSection
    - Test dengan mock `IntersectionObserver`
    - Test cleanup saat unmount
    - Test fallback saat elemen tidak ditemukan di DOM
    - File: `src/__tests__/unit/useActiveSection.test.ts`

- [x] 6. Update Navbar dengan dark mode dan active nav indicator
  - [x] 6.1 Modifikasi `src/components/Navbar.tsx`
    - Import dan gunakan `useTheme()` untuk dark mode styling
    - Import dan gunakan `useActiveSection({ sectionIds: SECTION_IDS })` untuk active state
    - Implementasi `getLinkClass(href)` helper yang mengembalikan class aktif vs non-aktif
    - Active desktop: `text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400`
    - Active mobile: `bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded`
    - Tambahkan `DarkModeToggle` di sebelah hamburger button
    - Terapkan dark mode classes: `bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.2_

  - [ ]* 6.2 Write property test untuk active nav (Property 5)
    - **Property 5: Tepat satu nav link aktif pada satu waktu**
    - **Validates: Requirements 5.1, 5.2, 5.3**
    - Gunakan `fc.constantFrom('hero', 'about', 'skills', 'projects', 'contact')` sebagai arbitrary `activeSection`
    - File: `src/__tests__/property/Navbar.property.test.tsx`

  - [ ]* 6.3 Write unit tests untuk Navbar
    - Test link aktif mendapat class yang benar
    - Test DarkModeToggle ter-render di navbar
    - File: `src/__tests__/unit/Navbar.test.tsx`

- [x] 7. Wrap App.tsx dengan ThemeProvider
  - Modifikasi `src/App.tsx`: import `ThemeProvider` dari `./context/ThemeContext`
  - Bungkus seluruh JSX dengan `<ThemeProvider>`
  - _Requirements: 6.5_

- [x] 8. Terapkan dark mode classes ke semua section components
  - [x] 8.1 Modifikasi `src/components/HeroSection.tsx`
    - Background: `dark:from-gray-900 dark:to-gray-800`
    - Heading: `dark:text-white`
    - Subtext: `dark:text-gray-300`
    - _Requirements: 6.3, 6.4_

  - [x] 8.2 Modifikasi `src/components/AboutSection.tsx`
    - Background: `dark:bg-gray-900`
    - Heading: `dark:text-white`
    - Body text: `dark:text-gray-400`
    - _Requirements: 6.4_

  - [x] 8.3 Modifikasi `src/components/SkillsSection.tsx`
    - Background: `dark:bg-gray-800`
    - Heading: `dark:text-white`
    - Card/item backgrounds: `dark:bg-gray-700`
    - Text: `dark:text-gray-300`
    - _Requirements: 6.4_

  - [x] 8.4 Modifikasi `src/components/ProjectsSection.tsx`
    - Background: `dark:bg-gray-900`
    - Heading: `dark:text-white`
    - _Requirements: 6.4_

  - [x] 8.5 Modifikasi `src/components/ProjectCard.tsx`
    - Card background: `dark:bg-gray-800`
    - Title: `dark:text-white`
    - Description: `dark:text-gray-400`
    - Border: `dark:border-gray-700`
    - _Requirements: 6.4_

  - [x] 8.6 Modifikasi `src/components/ContactSection.tsx`
    - Background: `dark:bg-gray-800`
    - Heading: `dark:text-white`
    - Text: `dark:text-gray-300`
    - _Requirements: 6.4_

  - [x] 8.7 Modifikasi `src/components/ContactForm.tsx`
    - Input backgrounds: `dark:bg-gray-700`
    - Input text: `dark:text-white`
    - Input border: `dark:border-gray-600`
    - Label: `dark:text-gray-300`
    - _Requirements: 6.4_

  - [x] 8.8 Modifikasi `src/components/SocialLinks.tsx`
    - Icon/link colors: `dark:text-gray-400 dark:hover:text-white`
    - _Requirements: 6.4_

- [x] 9. Final checkpoint — Pastikan semua tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks bertanda `*` bersifat opsional dan dapat dilewati untuk MVP yang lebih cepat
- Setiap task mereferensikan requirements spesifik untuk traceability
- Property tests menggunakan library **fast-check** yang sudah tersedia di project
- Tidak ada dependency npm baru yang perlu diinstall
- Urutan implementasi penting: ThemeContext → DarkModeToggle → useActiveSection → Navbar → App.tsx → Section components
