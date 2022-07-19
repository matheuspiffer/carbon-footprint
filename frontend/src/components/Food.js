import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";

const Food = ({ onNext, onGoback }) => {
  const [food, setFood] = useState({
    redMeat: 0,
    whiteMeat: 0,
  });

  const addFoodToState = () => {
    onNext({ method: "food", payload: food });
  };

  return (
    <>
      <Form.Group controlId="redMeat">
        <Form.Label>Red meat</Form.Label>
        <Form.Control type="text" placeholder="kilometers/month" />
      </Form.Group>
      <Form.Group controlId="whiteMeat">
        <Form.Label>White meat</Form.Label>
        <Form.Control type="email" placeholder="kilometers/month" />
      </Form.Group>
      <ButtonGroup>
        <Button onClick={onGoback}>Go back</Button>
        <Button onClick={addFoodToState}>Next</Button>
      </ButtonGroup>
    </>
  );
};

export default Food;
