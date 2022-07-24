import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Component - Calculator ", () => {
  it("Should check step 1", () => {
    render(<Calculator />);
    const startbtn = screen.getByTestId("startBtn");
    fireEvent.click(startbtn);
    screen.getByText("Household carbon footprint calculator");
  });
  it("Should check step 2", () => {
    render(<Calculator />);
    const startbtn = screen.getByTestId("startBtn");
    fireEvent.click(startbtn);
    screen.getByText("Household carbon footprint calculator");
    const housingNextBtn = screen.getByTestId("housingNextBtn");
    fireEvent.click(housingNextBtn);
    screen.getByText("Transportation carbon footprint calculator");
  });
  it("Should check step 3", () => {
    render(<Calculator />);
    const startbtn = screen.getByTestId("startBtn");
    fireEvent.click(startbtn);
    screen.getByText("Household carbon footprint calculator");
    const housingNextBtn = screen.getByTestId("housingNextBtn");
    fireEvent.click(housingNextBtn);
    screen.getByText("Transportation carbon footprint calculator");
    const transportationNextBtn = screen.getByTestId("transportationNextBtn");
    fireEvent.click(transportationNextBtn);
    screen.getByText("HOUSING");
    screen.getByText("TRANSPORTATION");
  });
});
