import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import UpdateProduct from './components/ProductDetail/UpdateProduct';
import Add from './components/Products/Add/Add';
import AllItems from './components/Products/AllItems/AllItems';
import ManageItems from './components/Products/ManageItems/ManageItems';
import MyItems from './components/Products/MyItems/MyItems';

import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Login from './components/SignUp/Login/Login';
import Register from './components/SignUp/Register/Register';
import RequireAuth from './components/SignUp/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/allItems"
          element={
            <RequireAuth>
              <AllItems />
            </RequireAuth>
          }
        />
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <Add />
            </RequireAuth>
          }
        />
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems/>
            </RequireAuth>
          }
        />
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <Add />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems/>
            </RequireAuth>
          }
        />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
