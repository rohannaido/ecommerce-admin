import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <div className='app_content'>
          <SideBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
