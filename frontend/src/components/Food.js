import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";

const Food = ({ onNext, onGoBack, option }) => {
  const [food, setFood] = useState(option);

  const addFoodToState = () => {
    onNext({ option: "food", payload: food });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFood((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Row className="g-4">
      <Col md={6}>
        <Form.Group controlId="red_meat">
          <Form.Label>Red meat</Form.Label>
          <Form.Control
            type="number"
            placeholder="kilometers/month"
            name="red_meat"
            onChange={onChange}
            value={food.red_meat}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="white_meat">
          <Form.Label>White meat</Form.Label>
          <Form.Control
            type="number"
            placeholder="kilometers/month"
            name="white_meat"
            value={food.white_meat}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <ButtonGroup>
        <Col className="d-flex justify-content-between">
          <Button variant="success" rounded onClick={onGoBack}>
            Back
          </Button>
          <Button variant="success" rounded onClick={addFoodToState}>
            Next
          </Button>
        </Col>
      </ButtonGroup>
    </Row>
  );
};

export default Food;
