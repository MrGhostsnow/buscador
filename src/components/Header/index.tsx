"use client";
import NavBar from "../NavBar";
import {
  ContainerHeader,
  SectionBackground,
  SectionTextAndButton,
  TextAboutBranding,
  ButtonServices,
} from "./styles";

const Header = () => (
  <ContainerHeader>
    <NavBar />
    <SectionBackground />
    <SectionTextAndButton>
      <TextAboutBranding>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam
        architecto iusto nihil tempore fugit magnam corrupti dolorem. Incidunt,
        eaque neque esse a quia modi et voluptatem consequatur dolorem dicta.
      </TextAboutBranding>
      <ButtonServices>Serviços</ButtonServices>
    </SectionTextAndButton>
  </ContainerHeader>
);

export default Header;
