import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../NavBar/index";

describe("NavBar Component", () => {
  test("renders NavBar with links", () => {
    render(<NavBar />);

    const homeLink = screen.getByRole("link", { name: /buscador/i });
    expect(homeLink).toBeInTheDocument();

    const servicesLink = screen.getByRole("link", { name: /serviços/i });
    expect(servicesLink).toBeInTheDocument();
  });
});
