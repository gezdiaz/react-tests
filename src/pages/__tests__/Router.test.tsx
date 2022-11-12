import React from "react";
import { render, screen } from "@testing-library/react";
import Router from "../Router";

describe("Router", () => {
  test("Router", () => {
    render(<Router />);
    screen.getByText("Hello world!");
  });
});
