/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // Keep if you plan to implement dark mode later
  theme: {
    extend: {
      // --- Consolidated Custom Colors ---
      colors: {
        // Colors from previous config (renamed darkText, lightBg, highlight for clarity)
        primary: '#3b82f6', // blue-500
        accent: '#8b5cf6',  // purple-500
        darkText: '#2c3e50', // Renamed from darkText
        lightBg: '#f9fbfd',  // Renamed from lightBg
        highlight: '#007bff', // Renamed from highlight

        // Specific colors for About section (from about.css)
        'about-bg-light-start': '#f9fbfd',
        'about-bg-light-end': '#e0e8f0',
        'about-text-dark': '#2c3e50', // Matches darkText
        'about-text-medium': '#4a5568',
        'heading-primary': '#1a202c',
        'heading-gradient-start': '#0a527c',
        'heading-gradient-end': '#007bff', // Matches highlight
        'link-blue': '#007bff',       // Matches highlight
        'link-gray': '#6c757d',
        'skill-bg-light': '#e6f0ff',
        'section-heading': '#0a527c', // Matches heading-gradient-start

        // Adding shades for primary and accent if you intend to use them (optional, but good practice)
        'primary-50': '#eef6fe',
        'primary-400': '#6aaef9',
        'primary-700': '#1d4ed8',

        'accent-50': '#f7f2fe',
        'accent-400': '#b18afa',
        'accent-700': '#6d28d9',
      },

      // --- Custom Font Sizes to mimic clamp precisely from about.css ---
      fontSize: {
        'h1-clamp': 'clamp(2.8rem, 5vw, 4.2rem)',
        'h2-clamp': 'clamp(1.8rem, 4vw, 3rem)',
        'h3-clamp': 'clamp(1.4rem, 3vw, 2rem)',
        'bio-clamp': 'clamp(1.1rem, 2.5vw, 1.35rem)',
        'contact-item-clamp': 'clamp(1rem, 2vw, 1.15rem)',
      },

      // --- Custom Spacing for Exact Match from about.css ---
      spacing: {
        '0.75rem': '0.75rem', // gap for contact items
        '0.85rem': '0.85rem', // gap for skill items
        '1.2rem': '1.2rem',   // gap for contact-info children
        '1.4rem': '1.4rem',   // px for skill items
        '1.5rem': '1.5rem',   // mb for h3
        '1.8rem': '1.8rem',   // font-size for social-icon
        '2.5rem': '2.5rem',   // padding for contact-info
        '3.5rem': '3.5rem',   // mt for social and h3
        '0.7rem': '0.7rem',   // py for skill items
        '8px': '8px',         // mt for h3::after
        '25px': '25px',       // border-radius for skill items
        '2px': '2px',         // border-radius for h3::after
        '5px': '5px',         // translate-y and translate-x for hovers
      },

      // --- Custom Box Shadows for Exact Match from about.css ---
      boxShadow: {
        'skill-item': '0 4px 10px rgba(0, 123, 255, 0.1)',
        'skill-item-hover': '0 6px 15px rgba(0, 123, 255, 0.3)',
        'contact-info': '0 12px 30px rgba(0, 0, 0, 0.08)',
      },

      // --- Keyframes for ALL defined animations ---
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 0px transparent' },
          '50%': { textShadow: '0 0 10px #3b82f6' }, // Uses primary color for glow
        },
        fadeInRise: { // Note: 'from'/'to' converted to '0%'/'100%' for consistency
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // New keyframes for animations declared but not defined in your previous config:
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '60%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        staggeredFade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      // --- Animations with exact durations, delays, and timing functions ---
      animation: {
        // Original animations from your first config
        'fade-in-down': 'fadeInDown 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'scale-fade': 'scaleFade 0.3s ease-in-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',

        // Animations from about.css (renamed for clarity/disambiguation if needed)
        'content-fadeInRise': 'fadeInRise 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1)', // specific to .about .content
        'h1-slideInLeft': 'slideInLeft 0.8s ease-out', // specific to .about h1
        'h2-slideInRight': 'slideInRight 0.8s ease-out 0.2s', // specific to .about h2
        'h3-fadeIn': 'fadeIn 1s ease-in 0.4s forwards', // specific to .about h3
        'bio-fadeIn': 'fadeIn 1s ease-in 0.6s forwards', // specific to .about .bio
        'contact-fadeIn': 'fadeIn 1s ease-in 0.8s forwards', // specific to .contact-info
        'social-fadeIn': 'fadeIn 1s ease-in 1s forwards', // specific to .social
        'skill-scaleIn': 'scaleIn 0.5s ease-out forwards', // specific to .skill-item

        // New animations (ensure these are used in your components where desired)
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pop-in': 'popIn 0.4s ease-out',
        'staggered-fade': 'staggeredFade 1.5s ease-in-out forwards', // assuming 'forwards' as typical for such fades
      },
      transform: {
    '5px': '5px', // Allows translate-x-5px, translate-y-5px etc.
},
    },
  },
  plugins: [],
};