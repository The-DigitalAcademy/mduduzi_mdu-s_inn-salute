import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import liqourdata from "../components/liqourData";
import { useParams } from "react-router-dom";

function ProductPage({addToCart}) {

  const { id } = useParams();
 

  const [product, setProduct] = useState(null);

  const [count, setCount] = useState(1)

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
   
    let p = liqourdata.find((liq) => liq.id == id)

    setProduct(p)
  }, [id]);

const addNewProduct = () => {
    if(count > 0) {
        addToCart({ count, product });
    }
  }
 

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
          <Card.Title>{product.rname}</Card.Title>
          <Card.Title>{product.price}</Card.Title>

          <Button variant="" onClick={addNewProduct}>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  </div>
    
  );
}

export default ProductPage;
