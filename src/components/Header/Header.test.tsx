import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header/index";

describe("Header Component", () => {
  test("renders Header component", () => {
    render(<Header />);

    const navBar = screen.getByTestId("navbar");
    expect(navBar).toBeInTheDocument();

    const sectionBackground = screen.getByTestId("section-background");
    expect(sectionBackground).toBeInTheDocument();

    const textAboutBranding = screen.getByText(/conheça agora o buscador/i);
    expect(textAboutBranding).toBeInTheDocument();

    const buttonServicesElements = screen.getAllByText(/serviços/i);
    buttonServicesElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
