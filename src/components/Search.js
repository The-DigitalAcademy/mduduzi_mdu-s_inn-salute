import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./Style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);

    // console.log(copydata);


    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const Salute = "https://res.cloudinary.com/teepublic/image/private/s--eRzgxj5U--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1545853242/production/designs/3826975_1.jpg"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={Salute} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#ffff", cursor: "pointer" }} className="mt-3">Search Liqour brand App</h2>
            </div>


            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Liqour" />
                </Form.Group>
                {/* <button className='btn text-light col-lg-1' style={{ background: "  " }}>Submit</button> */}
            </Form>


            <section className='iteam_section mt-4 container '>
                <h2 className='px-4' style={{color: "#ffff", textfontWeight: 400 }}>Liquor in Salute Open now</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            
        </>
    )
}

export default Search
