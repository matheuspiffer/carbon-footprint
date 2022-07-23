import React from "react";
import { Col, Container } from "react-bootstrap";
import "./App.css";
import Calculator from "./views/Calculator/Calculator";

function App() {
  return (
    <Container>
      <Col md={8} xs={12}>
        <Calculator />
      </Col>
    </Container>
  );
}

export default App;
