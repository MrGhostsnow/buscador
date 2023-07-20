"use client";
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
    <SectionBackground />
    <SectionText>
      <TitlePage>Serviços</TitlePage>
    </SectionText>
  </ContainerHeader>
);

export default HeaderServices;
