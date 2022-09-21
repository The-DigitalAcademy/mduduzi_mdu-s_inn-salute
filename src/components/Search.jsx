import React, { useEffect, useState } from "react";
import liqourdata from "./liqourData";
import "./Style.css";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Set from "./Set";

const Search = () => {
  const [ldata, setFdata] = useState(liqourdata);
  // console.log(fdata);

  const [copydata, setCopyData] = useState([]);

  // console.log(copydata);

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata == "") {
      setCopyData(ldata);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  useEffect(() => {
    setCopyData(liqourdata);
  }, []);

  return (
    <>
      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => chanegData(e.target.value)}
            placeholder="Search Liqour"
          />
        </Form.Group>
        {/* <button className='btn text-light col-lg-1' style={{ background: "  " }}>Submit</button> */}
      </Form>

      <section className="iteam_section mt-4 container ">
        <h2 className="px-4" style={{ color: "#ffff", textfontWeight: 400 }}>
          Liquor in Salute Open now
        </h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {copydata && copydata.length ? (
            <Cards data={copydata} />
          ) : (
            <Set sdata={ldata} />
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
