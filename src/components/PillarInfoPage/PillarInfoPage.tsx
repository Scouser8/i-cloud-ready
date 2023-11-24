import React from "react";
import { useRouter } from "next/router";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function PillarInfoPage() {
  const { query } = useRouter();
  return (
    <div className="pillar-info">
      <Link href="/">
        <Button className="back-btn" icon={<LeftOutlined />} ghost>
          Back To Home
        </Button>
      </Link>
      {`Welcome To ${query?.title}`}
    </div>
  );
}
