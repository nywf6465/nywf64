import type { Metadata } from "next";
import { DupontTopicStub } from "@/components/DupontTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 DuPont Pavilion \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair \u2014 DuPont Pavilion on nywf64.com.",
};

export default function Page() {
  return <DupontTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
