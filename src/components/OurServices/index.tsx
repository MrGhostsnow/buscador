"use client";
import React from "react";
import {
  ContainerOurServices,
  TitleOurServices,
  ContainerTextServices,
  SectionServices,
  TitleSection,
  TextSection,
} from "./styles";

const OurServices = () => (
  <ContainerOurServices>
    <TitleOurServices>Nossos serviços</TitleOurServices>
    <ContainerTextServices>
      <SectionServices>
        <TitleSection>CEP</TitleSection>
        <TextSection>
          Busque informações sobre o endereço com o CEP.
        </TextSection>
      </SectionServices>
      <SectionServices>
        <TitleSection>CNPJ</TitleSection>
        <TextSection>
          Confira as informações de uma empresa com o CNPJ.
        </TextSection>
      </SectionServices>
      <SectionServices>
        <TitleSection>Corretoras</TitleSection>
        <TextSection>
          Encontre as informações da corrretora com o CNPJ.
        </TextSection>
      </SectionServices>
    </ContainerTextServices>
  </ContainerOurServices>
);

export default OurServices;
