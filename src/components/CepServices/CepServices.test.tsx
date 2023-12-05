import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import CepServices from "../CepServices/index";

global.fetch = jest.fn();

describe("CepServices Component", () => {
  test("renders CepServices component and fetches data on button click", async () => {
    const mockData = {
      state: "Example State",
      city: "Example City",
      neighborhood: "Example Neighborhood",
      street: "Example Street",
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<CepServices />);

    const inputElement = screen.getByPlaceholderText(/Digite o Cep/i);
    const buttonElement = screen.getByText(/Pesquisar/i);

    fireEvent.change(inputElement, { target: { value: "12345678" } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      const stateElement = screen.getByText(/Example State/i);
      const cityElement = screen.getByText(/Example City/i);
      const neighborhoodElement = screen.getByText(/Example Neighborhood/i);
      const streetElement = screen.getByText(/Example Street/i);

      expect(stateElement).toBeInTheDocument();
      expect(cityElement).toBeInTheDocument();
      expect(neighborhoodElement).toBeInTheDocument();
      expect(streetElement).toBeInTheDocument();
    });
  });
});
