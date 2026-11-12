import ServicePage from "@/components/service/ServicePage";
import { eventsContent } from "@/data/services/content";

export default function Events() {
  return <ServicePage content={eventsContent} layout="bands" />;
}
