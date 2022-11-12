import React from "react";
import { render, screen } from "@testing-library/react";
import reactRouter from "react-router-dom";
import ErrorPage from "../ErrorPage";

jest.mock("react-router-dom", () => ({
  useRouteError: jest.fn(),
}));

describe("ErrorPage", () => {
  test("ErrorPage renders error message", () => {
    jest.spyOn(reactRouter, "useRouteError").mockImplementationOnce(() => ({
      statusText: "",
      message: "Test message",
    }));
    render(<ErrorPage />);
    const messageElement = screen.getByText("Test message");
    expect(messageElement).toBeInTheDocument();
  });
  test("ErrorPage renders error statusText", () => {
    jest.spyOn(reactRouter, "useRouteError").mockImplementationOnce(() => ({
      statusText: "Test message",
      message: "Other message",
    }));
    render(<ErrorPage />);
    const messageElement = screen.getByText("Test message");
    expect(messageElement).toBeInTheDocument();
  });
});
