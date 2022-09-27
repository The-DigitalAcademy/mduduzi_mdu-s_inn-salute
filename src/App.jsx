import React, { useState, useEffect} from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';
import CartPage from './components/CartPage'
import ProductPage from "./components/ProductPage";
import './styles/App.scss';


function App() {

  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const Salute =
  "https://res.cloudinary.com/teepublic/image/private/s--eRzgxj5U--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1545853242/production/designs/3826975_1.jpg";

  return (

   <>
   <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
        <img
          src={Salute}
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
        </Link>

        <Link to="/cartpage">
          <div className="links">
            {/* <h2 style={{ color: "#ffff", cursor: "pointer" }} me="mt-3"><i className="bi bi-bag" ></i></h2> */}
            <span class="fa-stack fa-2x has-badge" data-count="5">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
          </div>
          
        </Link>
        
      </div>
    <Routes>
    <Route path="/" element={ <Search/>} />
    <Route path="/cartpage" element={ <CartPage />} />
    <Route path="/productpage/:id" element={ <ProductPage addToCart={addToCart}/>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
   </>
   

  );
  
}

export default App;
