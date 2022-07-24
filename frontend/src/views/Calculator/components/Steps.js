import React from "react";
import { Nav } from "react-bootstrap";
const Steps = ({ step, moveTo }) => {
  return (
    <Nav variant="tabs" className="d-flex justify-content-around bg-light">
      <Nav.Item>
        <Nav.Link
          className={`${step < 1 ? "" : "text-success"}`}
          onClick={() => moveTo(1)}
          disabled={step < 1}
        >
          <strong>Welcome</strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={`${step < 2 ? "" : "text-success"}`}
          onClick={() => moveTo(2)}
          disabled={step < 2}
        >
          <strong>Housing</strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={`${step < 3 ? "" : "text-success"}`}
          onClick={() => moveTo(3)}
          disabled={step < 3}
        >
          <strong>Transportation</strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={`${step < 4 ? "" : "text-success"}`}
          onClick={() => moveTo(4)}
          disabled={step < 4}
        >
          <strong>Review</strong>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={`${step < 5 ? "" : "text-success"}`}
          onClick={() => moveTo(5)}
          disabled={step < 5}
        >
          <strong>Results</strong>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Steps;
