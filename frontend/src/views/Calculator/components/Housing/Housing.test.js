import {
  findAllByText,
  findByText,
  getByTestId,
  getByText,
  queryByText,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import Housing from "./Housing";

describe("Component - Housing", () => {
  const category = {
    total_people: 1,
    electricity: 0,
    natural_gas: 0,
    fuel_oil: 0,
    lpg: 0,
  };
  it("Housing should render and header should display", () => {
    const mockBackBtnFn = jest.fn();

    render(<Housing onGoBack={mockBackBtnFn} category={category} />);
    screen.getByText("Household carbon footprint calculator");
    screen.getByText(
      "Enter your consumption of each type of energy, and press the Next button"
    );

    const btn = screen.getByTestId("backBtn");
    fireEvent.click(btn);
    expect(mockBackBtnFn).toBeCalledTimes(1);
  });

  it("OnClick back btn, function should fire", () => {
    const mockBackBtnFn = jest.fn();

    render(<Housing onGoBack={mockBackBtnFn} category={category} />);

    const btn = screen.getByTestId("backBtn");
    fireEvent.click(btn);
    expect(mockBackBtnFn).toBeCalledTimes(1);
  });

  it("OnClick next btn, function should fire", () => {
    const mockNextBtn = jest.fn();

    render(<Housing onNext={mockNextBtn} category={category} />);
    const btn = screen.getByRole("button", { name: "Next" });
    fireEvent.click(btn);
    expect(mockNextBtn).toBeCalledTimes(1);
  });
});
