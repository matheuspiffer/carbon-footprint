import React, { useState, useReducer, useCallback } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import Food from "./components/Food";
import Review from "./components/Review";
import Housing from "./components/Housing";
import Welcome from "./components/Welcome";
import Steps from "./components/Steps";
import Results from "./components/Results";
import api from "./api";

const defaultState = {
  step: 1,
  total_people: 1,
  options: {
    housing: {
      electricity: "",
      natural_gas: "",
      heating_oil: "",
      coal: "",
    },
    food: {
      red_meat: "",
      white_meat: "",
      diary: "",
      cereals: "",
    },
  },
  results: [],
  isLoading: false,
};

const stateReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action);
    return {
      step: state.step + 1,
      total_people: action.people || state.total_people,
      options: {
        ...state.options,
        [action.option]: action.payload,
      },
    };
  }
  if (action.type === "GO_BACK") {
    return {
      ...state,
      step: state.step - 1,
    };
  }

  if (action.type === "NEXT") {
    return {
      ...state,
      step: state.step + 1,
    };
  }

  if (action.type === "MOVE_TO") {
    return {
      ...state,
      step: action.payload,
    };
  }
  if (action.type === "RESULTS") {
    return {
      ...state,
      step: state.step + 1,
      results: action.payload,
    };
  }

  return defaultState;
};

function App() {
  const [state, dispatch] = useReducer(stateReducer, defaultState);

  const onAddNext = useCallback(({ payload, option, people }) => {
    dispatch({ type: "ADD", payload, option, people });
  }, []);

  const onGoBack = useCallback(() => {
    dispatch({ type: "GO_BACK" });
  }, []);

  const onNext = useCallback(() => {
    dispatch({ type: "NEXT" });
  }, []);

  const moveTo = useCallback((step) => {
    dispatch({ type: "MOVE_TO", payload: step });
  }, []);

  const onCalculate = useCallback(async () => {
    try {
      let query = [];
      Object.keys(state.options).forEach((option) => {
        Object.keys(state.options[option]).forEach((key) => {
          let value = state.options[option][key];
          if (option === "housing" && !isNaN(value)) {
            value = value / state.total_people;
          }
          query.push(`&${key}=${value}`);
        });
      });
      const { data } = await api.get(`/calculate?${query.join("")}`);
      dispatch({ type: "RESULTS", payload: data });
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  }, [state.options]);

  return (
    <Container>
      <Col md={8} xs={12}>
        <Row className="d-flex flex-column g-4 mt-4">
          <Col xs={12}>
            <Steps step={state.step} moveTo={moveTo} />
          </Col>
          <Col xs={12}>
            <Row>
              {state.step === 1 && <Welcome onNext={onNext} />}
              <Form>
                {state.step === 2 && (
                  <Housing
                    onNext={onAddNext}
                    onGoBack={onGoBack}
                    option={state.options.housing}
                    totalPeople={state.total_people}
                  />
                )}
                {state.step === 3 && (
                  <Food
                    onNext={onAddNext}
                    onGoBack={onGoBack}
                    option={state.options.food}
                  />
                )}
                {state.step === 4 && (
                  <Review
                    state={state}
                    onGoBack={onGoBack}
                    onCalculate={onCalculate}
                  />
                )}
                {state.step === 5 && (
                  <Results results={state.results} onGoBack={onGoBack} />
                )}
              </Form>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default App;
