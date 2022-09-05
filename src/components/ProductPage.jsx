import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <div className=" d-flex justify-content-center align-items-center mt-3">
      <Card style={{ width: "22rem", border: "none" }} className="hove mb-4">
        <Card.Img
          variant="top"
          className="cd"
          src="https://bigkmarketliquor.com/wp-content/uploads/2021/01/Three-Chord-12-Years-Twelve-Bar-Reserve-Bourbon-Whiskey.jpg"
        />

        
      </Card>
    </div>
  );
}

export default BasicExample;
