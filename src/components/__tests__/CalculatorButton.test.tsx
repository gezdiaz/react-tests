import React from "react";
import { render, screen } from "@testing-library/react";
import { CalculatorButton } from "../CalculatorButton";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

describe("CalculatorButton", () => {
  test("CalculatorButton renders properly", () => {
    expect.assertions(2);
    render(<CalculatorButton label="3" action={noop} />);
    const element = screen.getByText("3");
    expect(element).toHaveClass("MuiButton-outlined");
    expect(element).toBeInTheDocument();
  });
  test("CalculatorButton renders correct variant", () => {
    expect.assertions(2);
    render(<CalculatorButton label="3" action={noop} variant={"contained"} />);
    const element = screen.getByText("3");
    expect(element).toHaveClass("MuiButton-contained");
    expect(element).toBeInTheDocument();
  });
  test("CalculatorButton calls action on click", () => {
    expect.assertions(2);
    const action = jest.fn();
    render(<CalculatorButton label="3" action={action} />);
    const element = screen.getByText("3");
    element.click();
    expect(element).toBeInTheDocument();
    expect(action).toHaveBeenCalled();
  });
});
