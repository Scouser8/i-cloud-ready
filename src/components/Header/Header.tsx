import { useMemo } from "react";
import styles from "@/styles/Header.module.css";
import { Dropdown, Button, Badge, Typography } from "antd";
import { ShoppingCartOutlined, ShopFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useStateValue } from "@/store/StateProvider";
import { checkout } from "@/actions";
import Link from "next/link";

export default function Header() {
  const [{ cartItems, kitchenItems }, dispatch] = useStateValue();

  const handleCheckout = () => dispatch(checkout());

  const cartMenuItems: MenuProps["items"] = useMemo(
    () => [
      {
        key: "checkout-btn",
        label: "Checkout",
        onClick: handleCheckout,
        disabled: cartItems.length === 0,
      },
    ],
    [cartItems]
  );
  const kitchenMenuItems: MenuProps["items"] = useMemo(
    () => [
      {
        key: "kitchen-menu-btn-1",
        label: "Action 1",
        onClick: () => {},
      },
    ],
    []
  );
  return (
    <div className={styles.root}>
      <Link href="/">
        <div className={styles.welcomeTitle}>
          <Typography className={styles.welcomeText}>
            Welcome to My Company!
          </Typography>
          <Typography className={styles.welcomeTextInfo}>
            You have started your 30 day trial
          </Typography>
        </div>
      </Link>
      <div className={styles.headerInfo}>
        <Typography style={{ fontSize: 20 }}>
          Our architects are here to help
        </Typography>
        <Typography style={{ fontSize: 16 }}>Book a free session</Typography>
      </div>
      <div className={styles.actionButtons}>
        <Dropdown menu={{ items: cartMenuItems }} trigger={["click"]}>
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
        </Dropdown>
        <Dropdown menu={{ items: kitchenMenuItems }} trigger={["click"]}>
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
        </Dropdown>
      </div>
    </div>
  );
}
