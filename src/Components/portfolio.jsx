import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 sm:text-6xl lg:text-7xl mb-4 animate-fade-in-down">
            Portfolio
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-in-left">
            My Work
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 animate-fade-in delay-200">
            Explore my latest projects showcasing my skills in web development and design.
            I'm passionate about creating responsive, user-friendly, and high-performance applications.
          </p>
          <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 animate-fade-in delay-300">
            You can visit my GitHub for more exciting and amazing projects!
          </p>

          <a
            href="https://github.com/yourusername" // Remember to replace 'yourusername' with Giorgi's actual GitHub username!
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                       text-white text-xl font-semibold rounded-lg shadow-lg
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-xl active:scale-95
                       focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                       animate-scale-fade delay-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-3 text-2xl" /> Visit my GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;