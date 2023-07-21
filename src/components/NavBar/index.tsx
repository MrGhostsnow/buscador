"use client";
import Link from "next/link";
import { ContainerNavBar, TitleSite, Services } from "./styles";

const NavBar = () => (
  <ContainerNavBar>
    <Link href="/">
      <TitleSite>Buscador</TitleSite>
    </Link>
    <Link href="/ourservices">
      <Services>Serviços</Services>
    </Link>
  </ContainerNavBar>
);

export default NavBar;
