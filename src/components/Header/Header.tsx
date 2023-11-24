import styles from "@/styles/Header.module.css";
import { Typography } from "antd";
import { Avatar, Badge } from "antd";
import { ShopFilled } from "@ant-design/icons";

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.welcomeTitle}>
        <Typography className={styles.welcomeText}>
          Welcome to My Company!
        </Typography>
        <Typography className={styles.welcomeTextInfo}>
          You have started your 30 day trial
        </Typography>
      </div>
      <div className={styles.headerInfo}>Some Info</div>
      <div className={styles.actionButtons}>
        <Badge count={2} showZero>
          <Avatar size="large" icon={<ShopFilled />} />
        </Badge>
        <Badge count={2} showZero>
          <Avatar size="large" icon={<ShopFilled />} />
        </Badge>
      </div>
    </div>
  );
}
