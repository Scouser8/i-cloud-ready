import styles from "@/styles/Header.module.css";
import { Typography } from "antd";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined, ShopFilled } from "@ant-design/icons";
import { useStateValue } from "@/store/StateProvider";

export default function Header() {
  const [{ cartItems, kitchenItems }] = useStateValue();
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
        <Badge
          count={cartItems.length}
          showZero
          offset={[-35, 10]}
          className={styles.bagde}
        >
          <Button
            size="large"
            shape="circle"
            icon={<ShoppingCartOutlined />}
            className={styles.actionButton}
          />
        </Badge>
        <Badge
          count={kitchenItems.length}
          showZero
          offset={[-35, 10]}
          className={styles.bagde}
        >
          <Button
            size="large"
            shape="circle"
            icon={<ShopFilled />}
            className={styles.actionButton}
          />
        </Badge>
      </div>
    </div>
  );
}
