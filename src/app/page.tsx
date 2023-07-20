import CompanyOrigin from "@/components/CompanyOrigin";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import OurServices from "@/components/OurServices";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <OurServices />
      <CompanyOrigin />
      <Footer />
    </main>
  );
}
