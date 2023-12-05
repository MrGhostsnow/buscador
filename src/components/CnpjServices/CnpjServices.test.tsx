import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CnpjServices from "../CnpjServices/index";

global.fetch = jest.fn();

describe("CnpjServices Component", () => {
  test("renders CnpjServices component and fetches data on button click", async () => {
    const mockData = {
      razao_social: "Example Razao Social",
      nome_fantasia: "Example Nome Fantasia",
      descricao_situacao_cadastral: "Ativo",
      data_inicio_atividade: "2022-01-01",
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<CnpjServices />);

    const inputElement = screen.getByPlaceholderText(/Digite o Cnpj/i);
    const buttonElement = screen.getByText(/Pesquisar/i);

    fireEvent.change(inputElement, { target: { value: "12345678901234" } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const razaoSocialElement = screen.getByText(/Example Razao Social/i);
      const nomeFantasiaElement = screen.getByText(/Example Nome Fantasia/i);
      const situacaoCadastralElement = screen.getByText(/Ativo/i);
      const inicioAtividadeElement = screen.getByText(/2022-01-01/i);

      expect(razaoSocialElement).toBeInTheDocument();
      expect(nomeFantasiaElement).toBeInTheDocument();
      expect(situacaoCadastralElement).toBeInTheDocument();
      expect(inicioAtividadeElement).toBeInTheDocument();
    });
  });
});
