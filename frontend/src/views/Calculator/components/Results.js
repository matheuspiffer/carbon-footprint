import React, { useMemo } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

const Results = ({ results }) => {
  const total = useMemo(() => {
    return results.reduce((total, curr) => (total += curr.total), 0);
  }, [results]);

  return (
    <Row>
      <Col>
        <Row>
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Monthly</th>
                <th>Annualy</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.category}>
                  <td>{result.category.split("_").join(" ").toUpperCase()}</td>
                  <td>{result.total.toFixed(2)}</td>
                  <td>{(result.total * 12).toFixed(2)}</td>
                  <td>{`${
                    total ? ((result.total / total) * 100).toFixed() : 0
                  }%`}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <strong>TOTAL kg/CO2</strong>
                </td>
                <td>
                  <strong>{`${total.toFixed(2)}`}</strong>
                </td>
                <td colSpan={2}>
                  <strong>{`${(total * 12).toFixed(2)}`}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button onClick={() => window.location.reload()}>
              START OVER
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Results;
