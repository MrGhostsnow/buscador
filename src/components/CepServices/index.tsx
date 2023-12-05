"use client";
import React from "react";
import { useState } from "react";
import {
  SectionInput,
  Input,
  Button,
  ContainerInfosCep,
  StateInfo,
  CityInfo,
  NeighborhoodInfo,
  StreetInfo,
  Title,
  Info,
} from "./styles";

interface InfosCepType {
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

export default function CepServices() {
  const [cep, setCep] = useState("");
  const [infosCep, setInfosCep] = useState<InfosCepType>();

  const handleChange = (e: any) => {
    setCep(e.target.value);
  };

  async function findCepInfos() {
    if (cep !== "") {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      const infoCep = await response.json();
      setInfosCep(infoCep);
      console.log("cep", infosCep);
    }
  }

  return (
    <>
      <SectionInput>
        <Input
          type="text"
          value={cep}
          onChange={handleChange}
          placeholder="Digite o Cep"
        />
        <Button type="submit" onClick={findCepInfos}>
          Pesquisar
        </Button>
      </SectionInput>
      {infosCep ? (
        <ContainerInfosCep>
          <StateInfo>
            <Title>Estado:</Title>
            <Info>{infosCep?.state}</Info>
          </StateInfo>
          <CityInfo>
            <Title>Cidade:</Title>
            <Info>{infosCep?.city}</Info>
          </CityInfo>
          <NeighborhoodInfo>
            <Title>Bairro:</Title>
            <Info>{infosCep?.neighborhood}</Info>
          </NeighborhoodInfo>
          <StreetInfo>
            <Title>Rua:</Title>
            <Info>{infosCep?.street}</Info>
          </StreetInfo>
        </ContainerInfosCep>
      ) : null}
    </>
  );
}

CepServices.displayName = "CepServices";
