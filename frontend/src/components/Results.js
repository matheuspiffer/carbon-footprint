import React, { useMemo } from "react";
import { Col, Row, Table } from "react-bootstrap";

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
                <th>Total</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.category}>
                  <td>{result.category.split("_").join(" ").toUpperCase()}</td>
                  <td>{result.total}</td>
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
                  <strong>{total}</strong>
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
