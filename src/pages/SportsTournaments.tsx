import ServicePage from "@/components/service/ServicePage";
import { sportsContent } from "@/data/services/content";

export default function SportsTournaments() {
  return <ServicePage content={sportsContent} layout="proof" />;
}
