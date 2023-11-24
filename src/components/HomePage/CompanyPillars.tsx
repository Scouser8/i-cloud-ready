import { Pillar } from "@/types";
import PillarCard from "../PillarCard";

const pillarCards : Pillar[] = [
  {
    src: "customer-engagement.png",
    title: "Mobile Apps",
    description: "Get your own mobile app",
    className: "mobile-card",
    dtsu: "100",
  },
  {
    src: "actionable-insights.png",
    title: "BI",
    description: "Create Dashboards",
    className: "bi-card",
    dtsu: "100",
  },
  {
    src: "employees-productivity.png",
    title: "HR",
    description: "Talents",
    className: "hr-card",
    dtsu: "50",
  },
  {
    src: "operations-excellence.png",
    title: "Operations",
    description: "ERP Management",
    className: "operations-card",
    dtsu: "100",
  },
];

export default function CompanyPillars() {
  return pillarCards.map((props) => <PillarCard {...props} />);
}
