import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import EditProduct from './pages/Product/EditProduct';
import NewProduct from './pages/Product/NewProduct';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <div className='app_content'>
          <SideBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<EditProduct />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
