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
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {

  const [drawer, setDrawer] = useState(false);
  const username = useSelector(state => state.user.value.username);

  const privatePath = (page) => {
    if(!!username){
      return page;
    }
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="App">
      <HashRouter>
        <NavBar setDrawer={setDrawer} />
        <div className='app_content'>
          <SideBar drawer={drawer}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={privatePath(<Users />)} />
            <Route path='/products' element={privatePath(<Products />)} />
            <Route path='/product/:id' element={privatePath(<EditProduct />)} />
            <Route path='/newproduct' element={privatePath(<NewProduct />)} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
