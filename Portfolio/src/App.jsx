import './App.css';
import Nav from './Components/nav.jsx';
import Hero from './Components/hero.jsx';
import About from './Components/About'; // Capital A!
import Contact from './Components/contact.jsx';
import Portfolio from './Components/portfolio.jsx';
import Blog from './Components/blog.jsx';
import TodoList from './Components/todo.jsx';

import BookManager from './Components/BookManager.jsx';



function App() {
  return (
    <>
    <title>Giorgi Gzirishvili</title>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <TodoList/>
      <BookManager/>
      <Blog />
      <Contact/>
    </>
  );
}

export default App;
