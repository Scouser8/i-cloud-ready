import { Card } from "antd";
import Image from "next/image";

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
      style={{ width: 270, height: 360 }}
      cover={<img style={{ height: 135 }} alt={alt} src={src} />}
    >
      <Meta title={title} description={description} />
    </Card>
  );
}
