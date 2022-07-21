import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Row } from "react-bootstrap";
const Housing = ({ onGoback, onNext, category, totalPeople }) => {
  const [housing, setHousing] = useState(category);
  const [people, setPeople] = useState(totalPeople);

  const addFoodToState = () => {
    onNext({ category: "housing", payload: housing, people });
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
                Calculate button
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
                value={people}
                onChange={(e) => setPeople(e.target.value)}
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
              type="text"
              placeholder="KWh/annual"
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
              placeholder="KWh/annual"
              name="natural_gas"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-2">
          <Form.Group controlId="heating_oil">
            <Form.Label>Heating Oil</Form.Label>
            <Form.Control
              value={housing.heating_oil}
              type="number"
              placeholder="KWh/annual"
              name="heating_oil"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="coal">
            <Form.Label>Coal</Form.Label>
            <Form.Control
              value={housing.coal}
              type="number"
              placeholder="KWh/annual"
              name="coal"
              onChange={onChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-4">
        <ButtonGroup>
          <Col className="d-flex justify-content-between">
            <Button variant="success" onClick={onGoback}>
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
