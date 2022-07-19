import React from "react";
import { Form } from "react-bootstrap";
const Review = ({state}) => {

    
  return (
    <>
      <Form.Group controlId="name">
        <Form.Label>Vehicle</Form.Label>
        <Form.Control type="text" placeholder="kilometers/month"></Form.Control>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Bus</Form.Label>
        <Form.Control
          type="email"
          placeholder="kilometers/month"
        ></Form.Control>
      </Form.Group>
      
    </>
  );
};

export default Review;
