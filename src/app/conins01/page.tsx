import type { Metadata } from "next";
import { ConinsTopicStub } from "@/components/ConinsTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Insurance — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ConinsTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
