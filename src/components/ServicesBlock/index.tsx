"use client";
import { useState } from "react";
import CepServices from "../CepServices";
import CnpjServices from "../CnpjServices";
import { ContainerServices, ListOfServices, Service } from "./styles";

export default function ServicesBlock() {
  const [isCep, setIsCep] = useState<Boolean>(true);
  const [isCnpj, setIsCnpj] = useState<Boolean>(false);

  return (
    <ContainerServices>
      <ListOfServices>
        <Service
          onClick={() => {
            setIsCep(true);
            setIsCnpj(false);
          }}
        >
          CEP
        </Service>
        <Service
          onClick={() => {
            setIsCep(false);
            setIsCnpj(true);
          }}
        >
          CNPJ
        </Service>
        <Service>CORRETORAS</Service>
      </ListOfServices>
      {isCep && <CepServices />}
      {isCnpj && <CnpjServices />}
    </ContainerServices>
  );
}
