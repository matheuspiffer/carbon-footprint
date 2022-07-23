import React, { useMemo } from "react";
import { Col, Row, Table } from "react-bootstrap";

const Results = ({ results }) => {
  
  const total = useMemo(() => {
    console.log("useMemo Results");
    return results.reduce((total, curr) => (total += curr.total), 0);
  }, [results]);

  console.log("Results");

  return (
    <Row>
      <Col>
        <Row>
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Total kg/CO2</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.category}>
                  <td>{result.category.split("_").join(" ").toUpperCase()}</td>
                  <td>{result.total.toFixed(2)}</td>
                  <td>{`${
                    total ? ((result.total / total) * 100).toFixed() : 0
                  }%`}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td colSpan={2}>
                  <strong>{total.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Col>
    </Row>
  );
};
export default Results;
