import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";

const Review = ({ state, onGoBack, onCalculate }) => {
  return (
    <Row className="g-4">
      <Col xs={12}>
        <ListGroup>
          {Object.keys(state.categories).map((category) => (
            <div key={category} className="my-2">
              <h4 className="text-align-center">{category.toUpperCase()}</h4>
              {Object.entries(state.categories[category]).map(([key, value]) => (
                <ListGroup.Item key={key}>
                  <Row>
                    <Col>{key.split("_").join(" ").toUpperCase()}</Col>
                    <Col xs={2}>{value}</Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </div>
          ))}
        </ListGroup>
      </Col>
      <ButtonGroup>
        <Col className="d-flex justify-content-between">
          <Button variant="success" onClick={onGoBack}>
            Back
          </Button>
          {state.isLoading && <Spinner animation="border" />}
          <Button variant="success" onClick={onCalculate}>
            Calculate
          </Button>
        </Col>
      </ButtonGroup>
    </Row>
  );
};

export default Review;
