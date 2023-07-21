"use client";
import Link from "next/link";
import {
  ContainerFooter,
  TitleFooter,
  SectionLinkServices,
  TitleLinksSection,
  LinkServices,
} from "./styles";

const Footer = () => (
  <ContainerFooter>
    <Link href="/">
      <TitleFooter>Buscador</TitleFooter>
    </Link>
    <SectionLinkServices>
      <Link href="/ourservices">
        <TitleLinksSection>Serviços</TitleLinksSection>
      </Link>
    </SectionLinkServices>
  </ContainerFooter>
);

export default Footer;
