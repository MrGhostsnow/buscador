import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderServices from "../HeaderServices/index";

describe("HeaderServices Component", () => {
  test("renders HeaderServices component", () => {
    render(<HeaderServices />);

    const navBar = screen.getByTestId("navbar");
    expect(navBar).toBeInTheDocument();
    const sectionBackground = screen.getByTestId("section-background");
    expect(sectionBackground).toBeInTheDocument();
  });
});
