import type { Metadata } from "next";
import { DenmarkTopicStub } from "@/components/DenmarkTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Denmark — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Denmark at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <DenmarkTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
