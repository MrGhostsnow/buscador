"use client";
import React, { useState } from "react";
import CepServices from "../CepServices";
import CnpjServices from "../CnpjServices";
import CorretorasServices from "../CorretorasServices";
import { ContainerServices, ListOfServices, Service } from "./styles";

export default function ServicesBlock() {
  const [isCep, setIsCep] = useState<Boolean>(true);
  const [isCnpj, setIsCnpj] = useState<Boolean>(false);
  const [isCorretora, setIsCorretora] = useState<Boolean>(false);

  return (
    <ContainerServices>
      <ListOfServices>
        <Service
          onClick={() => {
            setIsCep(true);
            setIsCnpj(false);
            setIsCorretora(false);
          }}
          style={
            isCep
              ? {
                  borderTop: "1px solid #000",
                  borderRight: "1px solid #000",
                  borderLeft: "1px solid #000",
                }
              : undefined
          }
        >
          CEP
        </Service>
        <Service
          onClick={() => {
            setIsCep(false);
            setIsCnpj(true);
            setIsCorretora(false);
          }}
          style={
            isCnpj
              ? {
                  borderTop: "1px solid #000",
                  borderRight: "1px solid #000",
                  borderLeft: "1px solid #000",
                }
              : undefined
          }
        >
          CNPJ
        </Service>
        <Service
          onClick={() => {
            setIsCep(false);
            setIsCnpj(false);
            setIsCorretora(true);
          }}
          style={
            isCorretora
              ? {
                  borderTop: "1px solid #000",
                  borderRight: "1px solid #000",
                  borderLeft: "1px solid #000",
                }
              : undefined
          }
        >
          CORRETORAS
        </Service>
      </ListOfServices>
      {isCep && <CepServices />}
      {isCnpj && <CnpjServices />}
      {isCorretora && <CorretorasServices />}
    </ContainerServices>
  );
}
