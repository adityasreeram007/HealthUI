// JSX
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";

export default function RecipeReviewCard() {
  return (
    <MDBCard style={{ height: 200, width: 200 }}>
      <MDBCardImage
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardText>Card title</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
