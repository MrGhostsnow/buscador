"use client";
import React from "react";
import Link from "next/link";
import { ContainerNavBar, TitleSite, Services } from "./styles";

const NavBar = () => (
  <ContainerNavBar data-testid="navbar">
    <Link href="/">
      <TitleSite>Buscador</TitleSite>
    </Link>
    <Link href="/ourservices">
      <Services>Serviços</Services>
    </Link>
  </ContainerNavBar>
);

export default NavBar;
