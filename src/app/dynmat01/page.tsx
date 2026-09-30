import type { Metadata } from "next";
import { DynmatTopicStub } from "@/components/DynmatTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dynamic Maturity — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Dynamic Maturity at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <DynmatTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
