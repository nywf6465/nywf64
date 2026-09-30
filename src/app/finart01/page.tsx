import type { Metadata } from "next";
import { FinartTopicStub } from "@/components/FinartTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fine Arts Pavilion — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fine Arts Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <FinartTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
