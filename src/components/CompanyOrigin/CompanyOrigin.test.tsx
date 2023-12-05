import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CompanyOrigin from "../CompanyOrigin/index";

describe("CompanyOrigin Component", () => {
  test("renders CompanyOrigin component with correct text", () => {
    render(<CompanyOrigin />);

    const textElement = screen.getByText(/O Buscador teve sua origem em 2010/i);
    expect(textElement).toBeInTheDocument();
  });
});
