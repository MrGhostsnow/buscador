import styles from "./page.module.css";
import HeaderServices from "@/components/HeaderServices";
import Footer from "@/components/Footer";
import ServicesBlock from "@/components/ServicesBlock";

const ServicesPage = () => (
  <main className={styles.main}>
    <HeaderServices />
    <ServicesBlock />
    <Footer />
  </main>
);

export default ServicesPage;
