import './App.css';
import './index.css';

import Nav from './Components/Nav.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Blog from './Components/Blog.jsx';
import TodoList from './Components/Todo.jsx';
import BookManager from './Components/BookManager.jsx';

function App() {
  return (
    <>
      <Nav />

      <main className="pt-24 px-4 md:px-8 space-y-20">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section>
          <TodoList />
        </section>

        <section>
          <BookManager />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
