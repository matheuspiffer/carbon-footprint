import React from "react";
import { Nav } from "react-bootstrap";
const Steps = ({ step, moveTo }) => {
  return (
    <Nav variant="tabs" className="d-flex justify-content-around bg-light">
      <Nav.Item>
        {step >= 1 ? (
          <Nav.Link className="text-success" onClick={() => moveTo(1)}>
            <strong>Welcome</strong>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Welcome</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step >= 2 ? (
          <Nav.Link className="text-success" onClick={() => moveTo(2)}>
            <strong>Housing</strong>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Housing</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step >= 3 ? (
          <Nav.Link className="text-success" onClick={() => moveTo(3)}>
            <strong>Food</strong>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Food</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step >= 4 ? (
          <Nav.Link className="text-success" onClick={() => moveTo(4)}>
            <strong>Review</strong>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Review</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step >= 5 ? (
          <Nav.Link className="text-success" onClick={() => moveTo(5)}>
            <strong>Results</strong>
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Results</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default Steps;
