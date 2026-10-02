import type { Metadata } from "next";
import { PakistTopicStub } from "@/components/PakistTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: Commemorative Postage Stamps & Pavilion Information — Pakistan — nywf64.com",
  description:
    "Brochure: Commemorative Postage Stamps & Pavilion Information — Pakistan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <PakistTopicStub
      title={
        "Brochure: Commemorative Postage Stamps & Pavilion Information"
      }
    />
  );
}
