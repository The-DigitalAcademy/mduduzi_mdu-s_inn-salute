import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, k) => {
        return (
          <Card
            key={k}
            style={{ width: "22rem", border: "none" }}
            className="hove mb-4"
          >
            <Card.Img variant="top" className="cd" src={element.imgdata} />

            <div className="card_body">
              <div className="upper_data d-flex justify-content-between align-items-center">
                <h4 className="mt-2">{element.rname}</h4>
                <span>{element.rating}&nbsp;★</span>
              </div>

              <div className="lower_data d-flex justift-content-between">
                <h5>{element.address}</h5>
                <span>{element.price}</span>
              </div>

              <div className="extra"></div>
            </div>

            <Link
              to="/productpage"
              className="button_div d-flex justify-content-center"
            >
              <div className="links">
                <Button variant=" mt-2 mb-2 ">Buy</Button>{" "}
              </div>
            </Link>
          </Card>
        );
      })}
    </>
  );
};

export default Cards;
