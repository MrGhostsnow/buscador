import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import OurServices from "../OurServices/index";

describe("OurServices Component", () => {
  it("renders the component with correct titles and text", () => {
    const { getByText } = render(<OurServices />);

    expect(getByText("Nossos serviços")).toBeInTheDocument();
    expect(getByText("CEP")).toBeInTheDocument();
    expect(getByText("CNPJ")).toBeInTheDocument();
    expect(getByText("Corretoras")).toBeInTheDocument();

    expect(
      getByText("Busque informações sobre o endereço com o CEP.")
    ).toBeInTheDocument();
    expect(
      getByText("Confira as informações de uma empresa com o CNPJ.")
    ).toBeInTheDocument();
    expect(
      getByText("Encontre as informações da corrretora com o CNPJ.")
    ).toBeInTheDocument();
  });
});
