

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  
  MDBRow,
} from "mdb-react-ui-kit";

export default function CartPage() {
  return (
    <section >
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Liquor in Salute cart </span>
              
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
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">Three Chord 750ml</p>
                    </div>
                  </MDBCol>
                  
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">R600</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">R600</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">R600</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end">
            
              <MDBBtn size="lg ">Add to cart</MDBBtn>

            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

