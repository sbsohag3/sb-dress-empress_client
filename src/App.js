import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Add from './components/Products/Add/Add';
import ManageItems from './components/Products/ManageItems/ManageItems';

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
