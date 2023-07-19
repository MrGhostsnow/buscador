"use client";
import {
  ContainerFooter,
  TitleFooter,
  SectionLinkServices,
  TitleLinksSection,
  LinkServices,
} from "./styles";

const Footer = () => (
  <ContainerFooter>
    <TitleFooter>Buscador</TitleFooter>
    <SectionLinkServices>
      <TitleLinksSection>Serviços</TitleLinksSection>
      <LinkServices>Um</LinkServices>
      <LinkServices>Dois</LinkServices>
      <LinkServices>Três</LinkServices>
    </SectionLinkServices>
  </ContainerFooter>
);

export default Footer;
