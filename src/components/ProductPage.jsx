import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import liqourdata from "../components/liqourData";
// import { useParams } from "react-router-dom";

function BasicExample() {

  // const { id } = useParams();

  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   setProduct(() => {
  //     let liq = liqourdata.find((liq) => liq.id === Number(id));
  //   });
  // }, []);

  return (
    <div>
        <div className=" d-flex justify-content-center align-items-center mt-3">
        <Card style={{ width: "20rem", border: "none" }} className="hove mb-4">
          <Card.Img
            variant="top"
            className="cd"
            src="https://bigkmarketliquor.com/wp-content/uploads/2021/01/Three-Chord-12-Years-Twelve-Bar-Reserve-Bourbon-Whiskey.jpg"
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
    </div>
    
  );
}

export default BasicExample;
