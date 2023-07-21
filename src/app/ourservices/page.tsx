"use client";
import styles from "./page.module.css";
import HeaderServices from "@/components/HeaderServices";
import Footer from "@/components/Footer";
import ServicesBlock from "@/components/ServicesBlock";

import { ContainerServices } from "./styles";

const ServicesPage = () => (
  <ContainerServices>
    <HeaderServices />
    <ServicesBlock />
    <Footer />
  </ContainerServices>
);

export default ServicesPage;
