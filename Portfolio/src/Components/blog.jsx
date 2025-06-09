import React from 'react';
import './blog.css'
function Blog() {
  return (
    <section id="blog" className="about">
      <div className="container">
        <div className="content">
          <h1>Blog</h1>
          <article>
            <h3>Getting Started with React in 2025</h3>
            <p>As of 2025, React remains a top choice for building
              dynamic web applications. This article introduces the basics
              of React, including components, hooks, and state management,
              tailored for beginners looking to start their journey in
              modern web development.</p>
          </article>
          <article>
            <h3>Responsive Design Tips</h3>
            <p>With mobile usage surpassing desktops, responsive design is
              crucial. Learn key techniques like media queries, flexible
              grids, and viewport units to ensure your websites look great
              on any device, based on my experience crafting mobile-friendly
              sites in Georgia.</p>
          </article>
          <article>
            <h3>Learning python</h3>
            <p>Learning python in 2025 is great for you make sure to learn basics, build your own projects from scratch and evolve with languages.</p>
          </article>
          <article>
            <h3>My Journey in Georgia</h3>
            <p>Starting as a web developer in Tbilisi, I've faced unique
              challenges and opportunities. This article shares my story,
              from learning HTML to mastering React, and how my Georgian
              roots inspire my work.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
