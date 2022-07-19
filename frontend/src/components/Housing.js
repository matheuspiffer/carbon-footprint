import React, { useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
const Housing = ({ onGoback, onNext }) => {
  const [housing, setHousing] = useState({
    Electricity: 0,
    naturalGas: 0,
  });

  const addFoodToState = () => {
    onNext({ method: "housing", payload: housing });
  };
  return (
    <Row className="g-4">
      <Col md={6}>
        <Form.Group controlId="name">
          <Form.Label>Electricity</Form.Label>
          <Form.Control type="number" placeholder="month" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="email">
          <Form.Label>Natural Gas</Form.Label>
          <Form.Control type="number" placeholder="month"></Form.Control>
        </Form.Group>
      </Col>

      <ButtonGroup>
        <Col className="d-flex justify-content-between">
          <Button onClick={onGoback}>Go back</Button>
          <Button onClick={addFoodToState}>Next</Button>
        </Col>
      </ButtonGroup>
    </Row>
  );
};

export default Housing;
