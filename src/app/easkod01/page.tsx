import type { Metadata } from "next";
import { EaskodTopicStub } from "@/components/EaskodTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Eastman Kodak Pavilion — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair — Eastman Kodak Pavilion on nywf64.com.",
};

export default function Page() {
  return <EaskodTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
