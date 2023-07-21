"use client";
import { useState } from "react";
import {
  SectionInput,
  Input,
  Button,
  ContainerInfosCnpj,
  StateInfo,
  CityInfo,
  NeighborhoodInfo,
  StreetInfo,
  Title,
  Info,
} from "./styles";

interface InfosCnpjType {
  razao_social: string;
  nome_fantasia: string;
  descricao_situacao_cadastral: string;
  data_inicio_atividade: string;
}

export default function CnpjServices() {
  const [cnpj, setCnpj] = useState("");
  const [infosCnpj, setInfosCnpj] = useState<InfosCnpjType>();

  const handleChange = (e: any) => {
    setCnpj(e.target.value);
  };

  async function findCnpjInfos() {
    if (cnpj !== "") {
      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
      );
      const infoCnpj = await response.json();
      setInfosCnpj(infoCnpj);
      console.log("cnpj", infosCnpj);
    }
  }

  return (
    <>
      <SectionInput>
        <Input
          type="text"
          value={cnpj}
          onChange={handleChange}
          placeholder="Digite o Cnpj"
        />
        <Button type="submit" onClick={findCnpjInfos}>
          Pesquisar
        </Button>
      </SectionInput>
      {infosCnpj ? (
        <ContainerInfosCnpj>
          <StateInfo>
            <Title>Razão social:</Title>
            <Info>{infosCnpj?.razao_social}</Info>
          </StateInfo>
          <CityInfo>
            <Title>Nome fantasia:</Title>
            <Info>{infosCnpj?.nome_fantasia}</Info>
          </CityInfo>
          <NeighborhoodInfo>
            <Title>Situação cadastral:</Title>
            <Info>{infosCnpj?.descricao_situacao_cadastral}</Info>
          </NeighborhoodInfo>
          <StreetInfo>
            <Title>Inicio de atividade</Title>
            <Info>{infosCnpj?.data_inicio_atividade}</Info>
          </StreetInfo>
        </ContainerInfosCnpj>
      ) : null}
    </>
  );
}
