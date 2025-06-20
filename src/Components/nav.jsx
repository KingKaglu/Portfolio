import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold flex gap-[1px]">
  {"Giorgi Gzirishvili".split("").map((char, idx) => (
    <span
      key={idx}
      className="transition duration-300 hover:text-blue-600 hover:scale-125"
    >
      {char}
    </span>
  ))}
</a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700 hover:text-blue-600 transition duration-300"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 font-medium relative group"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-600">
                {name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Let’s Talk
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur px-4 pb-6 pt-2 space-y-2 animate-fade-in-down">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-lg font-medium hover:text-blue-600 transition duration-300"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full text-center py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Let’s Talk
          </a>
        </div>
      )}
    </header>
  );
}
