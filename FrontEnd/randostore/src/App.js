import React from 'react';
import './App.css';
import Navber from './Component/Navber/Navber.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListItems from './Pages/ListItems';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Products from "./Pages/Products.jsx";
import Footer from './Component/Footer/Footer';
import SignUp from './Pages/SignUp';
import AddNewProduct from './Pages/AddNewProduct';
import EditProduct from './Pages/EditProduct';
import ProductDisplay from "./Component/ProductDisplay/ProductDisplay"
import NewCollection from "./Component/NewColection/NewCollection"



function App() {
  return (
    <div className="App">
     
        <Navber />
        <Routes>
          <Route path="/" element={<ListItems />} />
      
          <Route path="/product" element={<Products />}>
          <Route path=":productId" element={<Products />}/>
          </Route>
          {/* <Route path="/product/:productId" element={<ProductDisplay />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/NewCollection" element={<NewCollection/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route  path="/signup" element={<SignUp/>}></Route>
          <Route path="/AddnewPrduct" element={<AddNewProduct/>}/>
           <Route path="/edit/:productId"  element={<EditProduct/>}/>
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
