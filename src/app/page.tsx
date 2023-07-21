"use client";
import CompanyOrigin from "@/components/CompanyOrigin";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import OurServices from "@/components/OurServices";
import Image from "next/image";
import Link from "next/link";

import { ContainerHome } from "./styles";

export default function Home() {
  return (
    <ContainerHome>
      <Header />
      <OurServices />
      <CompanyOrigin />
      <Footer />
    </ContainerHome>
  );
}
