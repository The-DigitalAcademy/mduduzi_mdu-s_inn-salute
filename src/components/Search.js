import react, { useState } from 'react'
import Fooddata from './FoodData'
// import Form from 'react-bootstrap/Form'
// import Cards from 'react-bootstrap/Card'
import Cards from './Cards'
import './Style.css'


const Search = () => {

  const [fdata, setFdata] = useState(Fooddata);
  
  

  return (
    <>
      <div className='container d-flex justify-content-between align-item-center justify-content:"center"'>
        <img src={"https://res.cloudinary.com/teepublic/image/private/s--eRzgxj5U--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1545853242/production/designs/3826975_1.jpg"} style={{ width: "8rem", position: "relative", left: "2%", cursor: "point" }} alt="" />
        <h2 style={{ color: "#FFF", coursor: "point",margin:"0px" }} className="mt-0.5">
          <h2>On Head Office</h2>
          <h2>5648 Sweet Street</h2>
          <h2>Wonder</h2>
          <h2>Johannesburg</h2>
          <h2>2000</h2>
        </h2>
      </div>

      <section className='item_section mt-4 container'>

        <h1 className='px-1' style={{ fontweight: 400, background:"rgb(239, 239, 37)",width:"100%" }}>Liquor in Salute open now</h1>

        <div className="row mt-4 d-flex justifty-content-between">

          <Cards  data={fdata} />

        </div>

      </section>

    </>
  );
}

export default Search;

