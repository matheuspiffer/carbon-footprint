import React, { useReducer } from "react";
import { Col, Form, Row } from "react-bootstrap";
import api from "../../api";
import Steps from "./components/Steps";
import Welcome from "./components/Welcome";
import Housing from "./components/Housing/Housing";
import Transportation from "./components/Transportation/Transportation";
import Review from "./components/Review";
import Results from "./components/Results";

const options = ["electricity", "natural_gas", "fuel_oil", "lpg", "gasoline"];

const defaultState = {
  step: 1,
  categories: {
    housing: {
      total_people: 1,
      electricity: 0,
      natural_gas: 0,
      fuel_oil: 0,
      lpg: 0,
    },
    transportation: {
      total_vehicles: 0,
      gasoline: 0,
    },
  },
  results: [],
  isLoading: false,
};

const stateReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      step: state.step + 1,
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

const Calculator = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultState);

  const onAddNext = ({ payload, category }) => {
    dispatch({ type: "ADD", payload, category });
  };

  const onGoBack = () => {
    dispatch({ type: "GO_BACK" });
  };

  const onNext = () => {
    dispatch({ type: "NEXT" });
  };

  const moveTo = (step) => {
    dispatch({ type: "MOVE_TO", payload: step });
  };

  const onCalculate = async () => {
    //fetch results from server
    try {
      let query = [];
      Object.keys(state.categories).forEach((category) => {
        Object.keys(state.categories[category]).forEach((key) => {
          //considering only options
          if (!options.includes(key)) return;

          let value = state.categories[category][key];

          if (category === "housing") {
            const total_people = state.categories[category].total_people;
            value = value / total_people;
          }
          if (category === "transportation") {
            const total_vehicle = state.categories[category].total_vehicles;

            value = value * total_vehicle;
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
  };
  return (
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
  );
};

export default Calculator;
