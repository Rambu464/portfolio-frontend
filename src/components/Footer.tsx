const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-6 mt-auto" style={{ backgroundColor: '#2C3947', color: '#a0b0be' }}>
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>© {currentYear} Rambu Ilalang. All rights reserved.</p>
      </div>
    </footer>
  );
}
