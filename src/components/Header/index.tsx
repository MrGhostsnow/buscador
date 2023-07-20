"use client";
import Link from "next/link";
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
      <Link href="/ourservices">
        <ButtonServices>Serviços</ButtonServices>
      </Link>
    </SectionTextAndButton>
  </ContainerHeader>
);

export default Header;
