import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ServicesBlock from "../ServicesBlock/index";

jest.mock("../CepServices", () => {
  return {
    __esModule: true,
    default: () => null,
    displayName: "CepServices",
  };
});

jest.mock("../CnpjServices", () => {
  return {
    __esModule: true,
    default: () => null,
    displayName: "CnpjServices",
  };
});

jest.mock("../CorretorasServices", () => {
  return {
    __esModule: true,
    default: () => null,
    displayName: "CorretorasServices",
  };
});

describe("ServicesBlock Component", () => {
  it("renders the component with CEP service selected by default", () => {
    const { getByText } = render(<ServicesBlock />);

    expect(getByText(/CEP/i)).toHaveStyle({
      borderTop: "1px solid #000",
      borderRight: "1px solid #000",
      borderLeft: "1px solid #000",
    });

    expect(getByText(/Cep/i)).toBeInTheDocument();
  });

  it("switches to CNPJ service when clicked", () => {
    const { getByText } = render(<ServicesBlock />);

    fireEvent.click(getByText(/CNPJ/i));

    expect(getByText(/CNPJ/i)).toHaveStyle({
      borderTop: "1px solid #000",
      borderRight: "1px solid #000",
      borderLeft: "1px solid #000",
    });

    expect(getByText(/Cnpj/i)).toBeInTheDocument();
  });

  it("switches to CORRETORAS service when clicked", () => {
    const { getByText } = render(<ServicesBlock />);

    fireEvent.click(getByText(/CORRETORAS/i));

    expect(getByText(/CORRETORAS/i)).toHaveStyle({
      borderTop: "1px solid #000",
      borderRight: "1px solid #000",
      borderLeft: "1px solid #000",
    });

    expect(getByText(/Corretoras/i)).toBeInTheDocument();
  });
});
