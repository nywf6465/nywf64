import type { Metadata } from "next";
import { FunlanTopicStub } from "@/components/FunlanTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Funland — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Funland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <FunlanTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
