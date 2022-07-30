import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { HashRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <div className='app_content'>
          <SideBar />
          <Routes>
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
