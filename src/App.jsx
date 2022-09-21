import { Routes, Route, Navigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';
import CartPage from './components/CartPage'
import ProductPage from "./components/ProductPage";




 

function App() {

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
            <h2 style={{ color: "#ffff", cursor: "pointer" }} className="mt-3"><i class="bi bi-bag"></i></h2>
          </div>
          
        </Link>
        
      </div>
    <Routes>
    <Route path="/" element={ <Search/>} />
    <Route path="/cartpage" element={ <CartPage />} />
    <Route path="/productpage/:id" element={ <ProductPage/>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
   </>
   

  );
  
}

export default App;
