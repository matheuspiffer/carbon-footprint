import React, { useState, useReducer, useCallback } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./App.css";
import Food from "./components/Food";
import Review from "./components/Review";
import Housing from "./components/Housing";

const defaultState = {
  step: 2,
  housing: {
    electricity: 0,
    naturalGas: 0,
  },
  food: {
    redMeat: 0,
    whiteMeat: 0,
    diary: 0,
    cereals: 0,
  },
};

const stateReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      step: state.step + 1,
      [action.method]: action.payload,
    };
  }
  if (action.type === "GO_BACK") {
    return {
      ...state,
      step: state.step - 1,
    };
  }

  return defaultState;
};

function App() {
  const [state, dispatch] = useReducer(stateReducer, defaultState);
  console.log("App");
  const onNext = useCallback(({ payload, method }) => {
    dispatch({ type: "ADD", payload, method });
  }, []);

  const onGoBack = useCallback(() => {
    dispatch({ type: "GO_BACK" });
  }, []);

  return (
    <div className="container">
      <Col xs={12}>
        <Card className="p-3">
          <Form>
            {state.step === 2 && (
              <Housing onNext={onNext} onGoBack={onGoBack} />
            )}
            {state.step === 3 && <Food onNext={onNext} onGoBack={onGoBack} />}
            {state.step === 4 && <Review state={state} onGoBack={onGoBack} />}
          </Form>
        </Card>
      </Col>
    </div>
  );
}

export default App;
