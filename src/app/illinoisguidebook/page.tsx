import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Illinois Pavilion — nywf64.com",
  description: "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IllinoisTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
