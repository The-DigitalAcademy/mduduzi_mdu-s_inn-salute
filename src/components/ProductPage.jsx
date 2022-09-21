import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import liqourdata from "../components/liqourData";
import { useParams } from "react-router-dom";

function BasicExample() {

  const { id } = useParams();
 

  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    let p = liqourdata.find((liq) => liq.id == id)

    setProduct(p)
  }, []);

 

  return (
    product &&  <div className=" d-flex justify-content-center align-items-center mt-3">
    <Card style={{ width: "20rem", border: "none" }} className="hove mb-4">
      <Card.Img
        variant="top"
        className="cd"
        src={product.imgdata}
      />




      <Card.Body>
        <div className="colours">
          <Card.Title>Three Chord 750ml</Card.Title>
          <Card.Title>R 600</Card.Title>

          <Button variant="">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  </div>
    
  );
}

export default BasicExample;
