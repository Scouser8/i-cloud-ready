import { Pillar, PillarCardMeta } from "@/types";
import PillarCard from "../PillarCard";

const pillarCards: PillarCardMeta[] = [
  {
    src: "customer-engagement.png",
    title: "Mobile Apps",
    description: "Get your own mobile app",
    className: "mobile-card",
    dtsu: "100",
    path: "/mobile-apps",
  },
  {
    src: "actionable-insights.png",
    title: "BI",
    description: "Create Dashboards",
    className: "bi-card",
    dtsu: "100",
    path: "/bi",
  },
  {
    src: "employees-productivity.png",
    title: "HR",
    description: "Talents",
    className: "hr-card",
    dtsu: "50",
    path: "/hr",
  },
  {
    src: "operations-excellence.png",
    title: "Operations",
    description: "ERP Management",
    className: "operations-card",
    dtsu: "100",
    path: "/operations",
  },
];

export default function CompanyPillars() {
  return pillarCards.map((pillar) => <PillarCard pillar={pillar} />);
}
