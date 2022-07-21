import React, { useState, useReducer, useCallback } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import Review from "./components/Review";
import Housing from "./components/Housing";
import Welcome from "./components/Welcome";
import Steps from "./components/Steps";
import Results from "./components/Results";
import api from "./api";
import Transportation from "./components/Transportation";

const options = ["electricity", "natural_gas", "heating_oil", "coal", "miles"];

const defaultState = {
  step: 1,
  categories: {
    housing: {
      total_people: 1,
      electricity: "",
      natural_gas: "",
      heating_oil: "",
      coal: "",
    },
    transportation: {
      total_vehicles: 0,
      miles: "",
    },
  },
  results: [],
  isLoading: false,
};

const stateReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      step: state.step + 1,
      total_people: action.people || state.total_people,
      categories: {
        ...state.categories,
        [action.category]: action.payload,
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

  const onAddNext = useCallback(({ payload, category, people }) => {
    dispatch({ type: "ADD", payload, category, people });
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
      Object.keys(state.categories).forEach((category) => {
        Object.keys(state.categories[category]).forEach((key) => {
          if (!options.includes(key)) return;

          let value = state.categories[category][key];

          if (category === "housing") {
            const total_people = state.categories[category].total_people;
            value = value / total_people;
          }
          if (category === "transportation") {
            const total_vehicle = state.categories[category].total_vehicles;

            value = value * total_vehicle;
            console.log(value)
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
  }, [state.categories]);

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
                    category={state.categories.housing}
                  />
                )}
                {state.step === 3 && (
                  <Transportation
                    onNext={onAddNext}
                    onGoBack={onGoBack}
                    category={state.categories.transportation}
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
