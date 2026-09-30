import type { Metadata } from "next";
import { DanwatTopicStub } from "@/components/DanwatTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dancing Waters — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dancing Waters at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <DanwatTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
