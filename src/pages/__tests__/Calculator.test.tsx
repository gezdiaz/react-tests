import React from "react";
import { act, render, screen, within } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator", () => {
  test("Calcuator rendes without crashing", () => {
    render(<Calculator />);
    const visorElement = screen.getByTestId("visor-testid");
    const gridElement = screen.getByTestId("grid-testid");
    const deleteButton = screen.getByText("Borrar");
    expect(visorElement).toBeInTheDocument();
    expect(gridElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
  test("Calculator renders", () => {
    render(<Calculator />);
    const visorElement = screen.getByTestId("visor-testid");
    const inputElement = within(visorElement).getByRole("textbox");
    const deleteButton = screen.getByText("Borrar");
    const numberButton = screen.getByText("8");
    act(() => {
      numberButton.click();
    });
    expect(inputElement).toHaveValue("8");
    act(() => {
      deleteButton.click();
    });
    expect(inputElement).toHaveValue("");
  });
});
