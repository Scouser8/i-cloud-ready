import Image from "next/image";
import { Typography } from "antd";
import styles from "@/styles/HomePage.module.css";
import CompanyPillars from "./CompanyPillars";

const { Title } = Typography;

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeader}>
        <Title level={3}>Get Support</Title>
        <Image
          src="/diamond.svg"
          alt="Diamond Logo"
          width={50}
          height={30}
          priority
        />
      </div>
      <div className={styles.pillarsCards}>
        <CompanyPillars />
      </div>
    </div>
  );
}
