/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonGrid } from "../ButtonGrid";
import mexp from "math-expression-evaluator";

jest.mock("math-expression-evaluator");

describe("ButtonGrid", () => {
  test("ButtonGrid renders all butons", () => {
    render(
      <ButtonGrid
        currentExpresion=""
        setExpresion={(exp: string) => {}}
        setError={() => {}}
      />
    );
    const element = screen.getByTestId("grid-testid");
    const children = element.childNodes;
    expect(children.length).toBe(16);
  });
  test("ButtonGrid number button sets expresion", () => {
    const setExpresion = jest.fn();
    render(
      <ButtonGrid
        currentExpresion=""
        setExpresion={setExpresion}
        setError={() => {}}
      />
    );
    const buttonElement = screen.getByText("5");
    buttonElement.click();

    expect(setExpresion).toHaveBeenCalledWith("5");
  });
  test("ButtonGrid operarion button sets expresion", () => {
    const setExpresion = jest.fn();
    render(
      <ButtonGrid
        currentExpresion="5"
        setExpresion={setExpresion}
        setError={() => {}}
      />
    );
    const buttonElement = screen.getByText("+");
    buttonElement.click();

    expect(setExpresion).toHaveBeenCalledWith("5 + ");
  });
  test("ButtonGrid comma button sets expresion", () => {
    const setExpresion = jest.fn();
    render(
      <ButtonGrid
        currentExpresion="5"
        setExpresion={setExpresion}
        setError={() => {}}
      />
    );
    const buttonElement = screen.getByText(",");
    buttonElement.click();

    expect(setExpresion).toHaveBeenCalledWith("5,");
  });
  test("ButtonGrid equals button evaluates expresion", () => {
    const setExpresion = jest.fn();
    const setError = jest.fn();
    const evalSpyOn = jest.spyOn(mexp, "eval").mockReturnValueOnce("10");
    render(
      <ButtonGrid
        currentExpresion="5 + 5"
        setExpresion={setExpresion}
        setError={setError}
      />
    );
    const buttonElement = screen.getByText("=");
    buttonElement.click();

    expect(evalSpyOn).toHaveBeenCalledWith("5 + 5");
    expect(setExpresion).toHaveBeenCalledWith("10");
  });
  test("ButtonGrid equals button sets error if result is Infinity", () => {
    const setExpresion = jest.fn();
    const setError = jest.fn();
    const evalSpyOn = jest.spyOn(mexp, "eval").mockReturnValueOnce("Infinity");
    render(
      <ButtonGrid
        currentExpresion="5 / 0"
        setExpresion={setExpresion}
        setError={setError}
      />
    );
    const buttonElement = screen.getByText("=");
    buttonElement.click();

    expect(evalSpyOn).toHaveBeenCalledWith("5 / 0");
    expect(setExpresion).toHaveBeenCalledWith("");
    expect(setError).toHaveBeenCalledWith("Resultado indefinido");
  });
  test("ButtonGrid equals button sets error if result is NaN", () => {
    const setExpresion = jest.fn();
    const setError = jest.fn();
    const evalSpyOn = jest.spyOn(mexp, "eval").mockReturnValueOnce("NaN");
    render(
      <ButtonGrid
        currentExpresion="0 / 0"
        setExpresion={setExpresion}
        setError={setError}
      />
    );
    const buttonElement = screen.getByText("=");
    buttonElement.click();

    expect(evalSpyOn).toHaveBeenCalledWith("0 / 0");
    expect(setExpresion).toHaveBeenCalledWith("");
    expect(setError).toHaveBeenCalledWith("Resultado indefinido");
  });
  test("ButtonGrid equals button set error expresion in invalid", () => {
    const setExpresion = jest.fn();
    const setError = jest.fn();
    const evalSpyOn = jest.spyOn(mexp, "eval").mockImplementationOnce(() => {
      throw new Error("Test error");
    });
    render(
      <ButtonGrid
        currentExpresion="5 / "
        setExpresion={setExpresion}
        setError={setError}
      />
    );
    const buttonElement = screen.getByText("=");
    buttonElement.click();

    expect(evalSpyOn).toHaveBeenCalledWith("5 / ");
    expect(setError).toHaveBeenCalledWith("Test error");
  });
});
