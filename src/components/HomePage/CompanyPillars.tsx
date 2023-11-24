import PillarCard from "../PillarCard";

const pillarCards = [
  {
    src: "customer-engagement.png",
    title: "Mobile Apps",
    description: "Get your own mobile app",
  },
  {
    src: "actionable-insights.png",
    title: "BI",
    description: "Create Dashboards",
  },
  {
    src: "employees-productivity.png",
    title: "HR",
    description: "Talents",
  },
  {
    src: "operations-excellence.png",
    title: "Operations",
    description: "ERP Management",
  },
];

export default function CompanyPillars() {
  return pillarCards.map(({ src, title, description }) => (
    <PillarCard src={src} title={title} description={description} />
  ));
}
