import { Card } from "antd";
import styles from "@/styles/PillarCard.module.css";

const { Meta } = Card;

type Props = {
  src: string;
  alt?: string;
  title: string;
  description: string;
};

export default function PillarCard(props: Props) {
  const { src, alt = "pillar-card", description, title } = props;
  return (
    <Card
      hoverable
      className={styles.root}
      cover={<img className={styles.cardImage} alt={alt} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}
