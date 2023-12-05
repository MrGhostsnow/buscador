"use client";
import React from "react";
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
    <SectionBackground data-testid="section-background" />
    <SectionTextAndButton>
      <TextAboutBranding>
        Conheça agora o Buscador, o site completo para busca de informações
        essenciais! Encontre endereços através de CEPs , consulte CNPJs para
        validar empresas e localize corretoras com agilidade. Tudo isso através
        de seus códigos, de forma rápida e confiável. Simplifique suas pesquisas
        com o Buscador!
      </TextAboutBranding>
      <Link href="/ourservices">
        <ButtonServices>Serviços</ButtonServices>
      </Link>
    </SectionTextAndButton>
  </ContainerHeader>
);

export default Header;
