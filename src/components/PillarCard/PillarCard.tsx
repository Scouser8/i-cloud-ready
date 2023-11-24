import { Card, Typography } from "antd";
import { PlusOutlined, ExportOutlined } from "@ant-design/icons";
import { clsx } from "clsx";
import styles from "@/styles/PillarCard.module.css";

const { Text, Title } = Typography;

type Props = {
  src: string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
  dtsu: string;
};

export default function PillarCard(props: Props) {
  const {
    src,
    alt = "pillar-card",
    description,
    title,
    className = "",
    dtsu,
  } = props;
  return (
    <Card
      size="small"
      hoverable
      className={styles.root}
      cover={<img className={styles.cardImage} alt={alt} src={src} />}
    >
      <div className={clsx(styles.cardContent, styles[className])}>
        <Title level={5}>{title}</Title>
        <Text>{description}</Text>
        <div className={styles.cardFooter}>
          <Text>{`${dtsu} DTSU*`}</Text>
          <div className={styles.actionIcons}>
            <PlusOutlined className={styles.icon} />
            <ExportOutlined className={styles.icon} />
          </div>
        </div>
      </div>
    </Card>
  );
}
