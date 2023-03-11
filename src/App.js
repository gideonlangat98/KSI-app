import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Institutions from './components/Institutions'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Institutions />
    </div>
  );
}

export default App;
