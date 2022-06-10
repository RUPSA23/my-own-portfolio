import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './sections/About/About';
import Blogs from './sections/Blogs/Blogs';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <div className="App" >
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="/contact-me" element={<Contact></Contact>}></Route>
      <Route path="/about-me" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
    </Routes>


    </div>
  );
}

export default App;
