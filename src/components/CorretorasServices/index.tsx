"use client";
import React, { useState } from "react";
import {
  SectionInput,
  Input,
  Button,
  ContainerInfosCorretoras,
  StateInfo,
  CityInfo,
  NeighborhoodInfo,
  StreetInfo,
  Title,
  Info,
} from "./styles";

interface InfosCorretorasType {
  cep: string;
  cnae_fiscal: string;
  bairro: string;
  logradouro: string;
  municipio: string;
  complemento: string;
  email: string;
  nome_fantasia: string;
  descricao_situacao_cadastral: string;
  ddd_telefone_1: string;
}

export default function CorretorasServices() {
  const [corretoras, setCorretoras] = useState("");
  const [infosCorretoras, setInfosCorretoras] = useState<InfosCorretorasType>();

  const handleChange = (e: any) => {
    setCorretoras(e.target.value);
  };

  async function findCorretorasInfos() {
    if (corretoras !== "") {
      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${corretoras}`
      );
      const infoCorretoras = await response.json();
      setInfosCorretoras(infoCorretoras);
      console.log("corretoras", infosCorretoras);
    }
  }

  return (
    <>
      <SectionInput>
        <Input
          type="text"
          value={corretoras}
          onChange={handleChange}
          placeholder="Digite o Cnpj da corretora"
        />
        <Button type="submit" onClick={findCorretorasInfos}>
          Pesquisar
        </Button>
      </SectionInput>
      {infosCorretoras ? (
        <ContainerInfosCorretoras>
          <StateInfo>
            <Title>Cep:</Title>
            <Info>
              {infosCorretoras.cep ? infosCorretoras?.cep : <p>N/A</p>}
            </Info>
          </StateInfo>
          <CityInfo>
            <Title>CNAE fiscal:</Title>
            <Info>
              {infosCorretoras.cnae_fiscal ? (
                infosCorretoras?.cnae_fiscal
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </CityInfo>
          <NeighborhoodInfo>
            <Title>Bairro:</Title>
            <Info>
              {infosCorretoras.bairro ? infosCorretoras?.bairro : <p>N/A</p>}
            </Info>
          </NeighborhoodInfo>
          <StreetInfo>
            <Title>Logradouro:</Title>
            <Info>
              {infosCorretoras.logradouro ? (
                infosCorretoras?.logradouro
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Município:</Title>
            <Info>
              {infosCorretoras.municipio ? (
                infosCorretoras?.municipio
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Complemento:</Title>
            <Info>
              {infosCorretoras.complemento ? (
                infosCorretoras?.complemento
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Email:</Title>
            <Info>
              {infosCorretoras.email ? infosCorretoras?.email : <p>N/A</p>}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Nome fantasia:</Title>
            <Info>
              {infosCorretoras.nome_fantasia ? (
                infosCorretoras?.nome_fantasia
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Status:</Title>
            <Info>
              {infosCorretoras.descricao_situacao_cadastral ? (
                infosCorretoras?.descricao_situacao_cadastral
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
          <StreetInfo>
            <Title>Telefone:</Title>
            <Info>
              {infosCorretoras.ddd_telefone_1 ? (
                infosCorretoras?.ddd_telefone_1
              ) : (
                <p>N/A</p>
              )}
            </Info>
          </StreetInfo>
        </ContainerInfosCorretoras>
      ) : null}
    </>
  );
}
