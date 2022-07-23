import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";

const Transportation = ({ onNext, onGoBack, category }) => {
  const [transportation, setTransportation] = useState(category);

  const addTransportationToState = () => {
    onNext({ category: "transportation", payload: transportation });
  };

  console.log("TRANSPORTATION")


  const onChange = (e) => {
    const { name, value } = e.target;
    setTransportation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Row className="g-4">
      <Row className="my-3">
        <Col xs={12}>
          <Card text="dark">
            <Card.Header className="text-center">
              <strong>Transportation carbon footprint calculator</strong>
            </Card.Header>
          </Card>{" "}
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={8}>
          <Form.Group as={Row} controlId="total_people">
            <Form.Label column xs={9}>
              How many cars are in your household?
            </Form.Label>
            <Col xs={3}>
              <Form.Control
                type="number"
                min={0}
                value={transportation.total_vehicles}
                name="total_vehicles"
                onChange={onChange}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={8}>
          <Form.Group as={Row} controlId="gasoline">
            <Form.Label column xs={9}>
              How many liters of gasoline do you consume per month?
            </Form.Label>
            <Col xs={3}>
              <Form.Control
                type="number"
                min={0}
                value={transportation.gasoline}
                name="gasoline"
                onChange={onChange}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <ButtonGroup>
        <Col className="d-flex justify-content-between">
          <Button variant="success" onClick={onGoBack}>
            Back
          </Button>
          <Button variant="success" onClick={addTransportationToState}>
            Next
          </Button>
        </Col>
      </ButtonGroup>
    </Row>
  );
};

export default Transportation;
