import ServicePage from "@/components/service/ServicePage";
import { exhibitionsContent } from "@/data/services/content";

export default function Exhibitions() {
  return <ServicePage content={exhibitionsContent} layout="split" />;
}
