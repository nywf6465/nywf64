import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — United States Pavilion — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export default function Page() {
  return <UnistaTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
