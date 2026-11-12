import ServicePage from "@/components/service/ServicePage";
import { conferencesContent } from "@/data/services/content";

export default function Conferences() {
  return <ServicePage content={conferencesContent} layout="stage" />;
}
