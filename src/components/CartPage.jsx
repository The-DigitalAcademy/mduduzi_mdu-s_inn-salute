

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export default function CartPage() {
  return (
    <section className="vh-100">
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">(1 item in your cart)</span>
            </p>

            <MDBCard className="mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  
                  
                  
                  
             
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            

            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

