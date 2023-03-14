import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Institutions from './components/Institutions';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/institutions' element={<Institutions />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
