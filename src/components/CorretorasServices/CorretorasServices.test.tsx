import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CorretorasServices from "../CorretorasServices/index";

global.fetch = jest.fn();

describe("CorretorasServices Component", () => {
  test("renders CorretorasServices component and fetches data on button click", async () => {
    const mockData = {
      cep: "12345-678",
      cnae_fiscal: "123456",
      bairro: "Example Bairro",
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<CorretorasServices />);
    const inputElement = screen.getByPlaceholderText(
      /Digite o Cnpj da corretora/i
    );
    const buttonElement = screen.getByText(/Pesquisar/i);

    fireEvent.change(inputElement, { target: { value: "12345678901234" } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const cepElement = screen.getByText(/Cep:/i);
      const cnaeElement = screen.getByText(/CNAE fiscal:/i);
      const bairroElement = screen.getByText(/Example Bairro/i);

      expect(cepElement).toBeInTheDocument();
      expect(cnaeElement).toBeInTheDocument();
      expect(bairroElement).toBeInTheDocument();
    });
  });
});
