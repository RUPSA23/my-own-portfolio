import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';

function App() {
  return (
    <div className="App" >
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="/contact-me" element={<Contact></Contact>}></Route>
      <Route path="/about-me" element={<About></About>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
    </Routes>


    </div>
  );
}

export default App;
