import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Welcome = ({ onNext }) => {
  return (
    <Col xs={12}>
      <Card text="dark">
        <Card.Header className="text-center">
          <strong>Welcome to the carbon footprint calculator</strong>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Carbon footprint calculations are typically based on annual
            emissions from the previous 12 months.
          </Card.Text>
          <Col className="d-flex justify-content-center">
            <Button variant="success" size="lg" onClick={onNext}>
              START
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Welcome;
