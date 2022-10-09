import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Visor } from "../Visor";

describe("Visor", () => {
  test("Renders empty text input", () => {
    expect.assertions(3);

    render(<Visor expresion="" error={null} />);
    const visorElement = screen.getByTestId("visor-testid");
    const inputElement = within(visorElement).getByRole("textbox");
    expect(visorElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty("value", "");
  });

  test("Renders passed expresion", () => {
    expect.assertions(3);

    render(<Visor expresion="12 + 5" error={null} />);
    const visorElement = screen.getByTestId("visor-testid");
    const inputElement = within(visorElement).getByRole("textbox");
    expect(visorElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty("value", "12 + 5");
  });

  test("Renders passed error", () => {
    expect.assertions(2);

    render(<Visor expresion="" error="Test error" />);
    const visorElement = screen.getByTestId("visor-testid");
    const errorElement = within(visorElement).getByText("Test error");
    expect(visorElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });
});
