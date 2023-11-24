import { Button, Card, Typography } from "antd";
import { PlusOutlined, ExportOutlined } from "@ant-design/icons";
import { clsx } from "clsx";
import styles from "@/styles/PillarCard.module.css";
import { useStateValue } from "@/store/StateProvider";
import { Pillar, PillarCardMeta } from "@/types";
import { addToCart } from "@/actions";
import Link from "next/link";

const { Text, Title } = Typography;

type Props = {
  pillar: PillarCardMeta;
};

export default function PillarCard(props: Props) {
  const { pillar } = props;
  const { path, src, description, title, className = "", dtsu } = pillar;
  const [{ cartItems, kitchenItems }, dispatch] = useStateValue();
  const pillarAddedToCart = cartItems?.find(
    (pillar: Pillar) => pillar.title === title
  );
  const pillarAddedToCheckout = kitchenItems?.find(
    (pillar: Pillar) => pillar.title === title
  );
  const pillarCanBeAddedToCart = !(pillarAddedToCart || pillarAddedToCheckout);

  const handleAddToCheckout = () => dispatch(addToCart(pillar));

  return (
    <Link href={`${path}?title=${title}`}>
      <Card
        size="small"
        hoverable
        className={styles.root}
        cover={
          <img className={styles.cardImage} alt='"pillar-card"' src={src} />
        }
      >
        <div className={clsx(styles.cardContent, styles[className])}>
          <Title level={5}>{title}</Title>
          <Text>{description}</Text>
          <div className={styles.cardFooter}>
            <Text>{`${dtsu} DTSU*`}</Text>
            <div className={styles.actionIcons}>
              <Button
                disabled={!pillarCanBeAddedToCart}
                size="large"
                shape="circle"
                icon={<PlusOutlined />}
                className={styles.actionButton}
                onClick={handleAddToCheckout}
              />
              <Button
                size="large"
                shape="circle"
                icon={<ExportOutlined />}
                className={styles.actionButton}
              />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
