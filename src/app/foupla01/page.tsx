import type { Metadata } from "next";
import { FouplaTopicStub } from "@/components/FouplaTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of the Planets — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the Fountain of the Planets — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <FouplaTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
