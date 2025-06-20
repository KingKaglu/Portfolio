import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "Getting Started with React in 2025",
      content: "As of 2025, React remains a top choice for building dynamic web applications. This article introduces the basics of React, including components, hooks, and state management, tailored for beginners looking to start their journey in modern web development."
    },
    {
      title: "Responsive Design Tips",
      content: "With mobile usage surpassing desktops, responsive design is crucial. Learn key techniques like media queries, flexible grids, and viewport units to ensure your websites look great on any device, based on my experience crafting mobile-friendly sites in Georgia."
    },
    {
      title: "Learning Python",
      content: "Learning Python in 2025 is great for you! Make sure to learn basics, build your own projects from scratch and evolve with languages."
    },
    {
      title: "My Journey in Georgia",
      content: "Starting as a web developer in Tbilisi, I've faced unique challenges and opportunities. This article shares my story, from learning HTML to mastering React, and how my Georgian roots inspire my work."
    }
  ];

  return (
    <section
      id="blog"
      // blog-section CSS translation
      className="bg-gray-50 dark:bg-gray-800 py-24 px-4 font-['Inter',sans-serif] text-gray-800 dark:text-gray-200
                 md:py-24 sm:py-16" // Responsive padding
    >
      <div
        // blog-section .container CSS translation
        className="max-w-6xl mx-auto px-4" // Use max-w-6xl (1152px) closest to 1200px or use arbitrary max-w-[1200px]
      >
        <div className="text-center">
          <h1
            // section-title CSS translation
            className="text-5xl font-extrabold text-gray-900 dark:text-white mb-16 leading-tight
                       bg-gradient-to-r from-[#0a527c] to-[#007bff] bg-clip-text text-transparent
                       animate-fade-in-down
                       sm:text-4xl md:text-5xl lg:text-7xl" // Responsive font sizes based on clamp
          >
            Blog
          </h1>
        </div>

        <div
          // blog-grid CSS translation
          className="grid grid-cols-1 gap-10
                     md:grid-cols-2 lg:grid-cols-2 // Use lg for 2 columns instead of repeat(auto-fit, minmax(300px, 1fr)) for explicit control
                     sm:gap-8 md:gap-10 lg:gap-10" // Responsive gap adjustments
        >
          {blogPosts.map((post, index) => (
            <article
              key={index}
              // blog-card CSS translation
              className={`bg-white dark:bg-gray-700 rounded-2xl p-10 shadow-lg border border-blue-100 dark:border-gray-600
                         transition-all duration-400 ease-in-out transform flex flex-col justify-between
                         hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-xl hover:border-blue-300
                         dark:hover:border-blue-400 dark:shadow-md dark:hover:shadow-lg
                         animate-fade-in-up`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }} // Staggered animation based on blog-card:nth-child
            >
              <h3
                // blog-title CSS translation
                className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 leading-tight
                           sm:text-xl md:text-2xl lg:text-3xl" // Responsive font sizes
              >
                {post.title}
              </h3>
              <p
                // blog-excerpt CSS translation
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow
                           sm:text-base md:text-lg lg:text-xl" // Responsive font sizes
              >
                {post.content}
              </p>
              <a
                href="#" // Placeholder link
                // read-more-btn CSS translation
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white
                           px-6 py-3 rounded-xl font-semibold text-base no-underline
                           transition-all duration-300 ease-out align-self-start
                           hover:scale-[1.05] hover:shadow-lg
                           hover:from-blue-700 hover:to-blue-900"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;