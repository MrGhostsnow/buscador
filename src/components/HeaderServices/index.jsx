"use client";
import React from "react";
import NavBar from "../NavBar";
import {
  ContainerHeader,
  SectionBackground,
  SectionText,
  TitlePage,
  ButtonServices,
} from "./styles";

const HeaderServices = () => (
  <ContainerHeader>
    <NavBar />
    <SectionBackground data-testid="section-background" />
    <SectionText>
      <TitlePage>Serviços</TitlePage>
    </SectionText>
  </ContainerHeader>
);

export default HeaderServices;
