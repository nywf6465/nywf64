import type { Metadata } from "next";
import { OregonTopicStub } from "@/components/OregonTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Oregon — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Oregon at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <OregonTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
