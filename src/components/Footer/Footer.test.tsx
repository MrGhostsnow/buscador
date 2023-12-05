import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer/index";

describe("Footer Component", () => {
  test("renders Footer component", () => {
    render(<Footer />);

    const titleFooter = screen.getByText(/buscador/i);
    expect(titleFooter).toBeInTheDocument();

    const titleLinksSection = screen.getAllByText(/serviços/i);
    titleLinksSection.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
