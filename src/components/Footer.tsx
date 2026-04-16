const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>© {currentYear} Rambu Ilalang. All rights reserved.</p>
      </div>
    </footer>
  );
}
