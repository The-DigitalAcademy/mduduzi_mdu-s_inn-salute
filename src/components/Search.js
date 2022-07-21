import react, { useState } from 'react'
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form'
// import Cards from 'react-bootstrap/Card'
import Cards from './Cards'
import './Style.css'


const Search = () => {

  const [fdata, setFdata] = useState(Fooddata);
  console.log(fdata);

  return (
    <>
      <div className='container d-flex justify-content-between align-item-center'>
        <img src={"https://res.cloudinary.com/teepublic/image/private/s--eRzgxj5U--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1545853242/production/designs/3826975_1.jpg"} style={{ width: "8rem", position: "relative", left: "2%", cursor: "point" }} alt="" />
        <h2 style={{ color: "#1b1464", coursor: "point" }} className="mt-3">Search Filter App</h2>
      </div>

      <Form className='d-flex justify-content-center align-items-center mt-3'>
        <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">

          <Form.Control type="text" placeholder="Search Liquor" />

        </Form.Group>
        <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
      </Form>

      <section className='item_section mt-4 container'>

        <h2 className='px-4' style={{ fontweight: 400 }}>Liquor in Salute open now</h2>

        <div className="row mt-2 d-flex justifty-content-between align-items-center]\
        ">

          <Cards  data={fdata} />

        </div>

      </section>

    </>
  );
}

export default Search;

