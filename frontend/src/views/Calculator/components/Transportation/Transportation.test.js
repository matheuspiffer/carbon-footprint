import { render, screen, fireEvent } from "@testing-library/react";
import Transportation from "./Transportation";

describe("Component - Transportation", () => {
  const category = {
    total_vehicles: 0,
    gasoline: 0,
  };
  it("Transportation should render and header should display", () => {
    const mockBackBtnFn = jest.fn();

    render(<Transportation onGoBack={mockBackBtnFn} category={category} />);
    screen.getByText("Transportation carbon footprint calculator");

    const btn = screen.getByTestId("backBtn");
    fireEvent.click(btn);
    expect(mockBackBtnFn).toBeCalledTimes(1);
  });

  it("OnClick back btn, function should fire", () => {
    const mockBackBtnFn = jest.fn();

    render(<Transportation onGoBack={mockBackBtnFn} category={category} />);

    const btn = screen.getByTestId("backBtn");
    fireEvent.click(btn);
    expect(mockBackBtnFn).toBeCalledTimes(1);
  });

  it("OnClick next btn, function should fire", () => {
    const mockNextBtn = jest.fn();

    render(<Transportation onNext={mockNextBtn} category={category} />);
    const btn = screen.getByTestId("transportationNextBtn");
    fireEvent.click(btn);
    expect(mockNextBtn).toBeCalledTimes(1);
  });
});
