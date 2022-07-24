import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";
const Housing = ({ onGoBack, onNext, category }) => {
  const [housing, setHousing] = useState(category);

  const addFoodToState = () => {
    onNext({ category: "housing", payload: housing });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setHousing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Row className="d-flex">
      <Row className="my-3">
        <Col xs={12}>
          <Card text="dark">
            <Card.Header className="text-center">
              <strong>Household carbon footprint calculator</strong>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Enter your consumption of each type of energy, and press the
                Next button
              </Card.Text>
              <Card.Text>
                Your individual footprint is calculated by dividing the amount
                of energy by the number of people in your house.
              </Card.Text>
            </Card.Body>
          </Card>{" "}
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6}>
          <Form.Group as={Row} controlId="total_people">
            <Form.Label column xs={9}>
              How many people are in your household?
            </Form.Label>
            <Col xs={3}>
              <Form.Control
                type="number"
                min={1}
                name="total_people"
                value={housing.total_people}
                onChange={onChange}
              />
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6} className="mb-2">
          <Form.Group controlId="electricity">
            <Form.Label>Electricity</Form.Label>
            <Form.Control
              value={housing.electricity}
              type="number"
              min={0}
              placeholder="avarage kWh/monthly"
              name="electricity"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-2">
          <Form.Group controlId="natural_gas">
            <Form.Label>Natural Gas</Form.Label>
            <Form.Control
              value={housing.natural_gas}
              type="number"
              min={0}
              placeholder="avarage therms/monthly"
              name="natural_gas"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-2">
          <Form.Group controlId="fuel_oil">
            <Form.Label>Fuel Oil</Form.Label>
            <Form.Control
              value={housing.fuel_oil}
              type="number"
              min={0}
              placeholder="avarage liters/monthly"
              name="fuel_oil"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lpg">
            <Form.Label>LPG</Form.Label>
            <Form.Control
              value={housing.lpg}
              type="number"
              min={0}
              placeholder="avarage liters/monthly"
              name="lpg"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-4">
        <ButtonGroup>
          <Col className="d-flex justify-content-between">
            <Button variant="success" onClick={onGoBack}>
              Back
            </Button>
            <Button variant="success" onClick={addFoodToState}>
              Next
            </Button>
          </Col>
        </ButtonGroup>
      </Row>
    </Row>
  );
};

export default Housing;
