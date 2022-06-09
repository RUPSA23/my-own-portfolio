import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';

function App() {
  return (
    <div className="App" >
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/contact-me" element={<Contact></Contact>}></Route>
    </Routes>


    </div>
  );
}

export default App;
