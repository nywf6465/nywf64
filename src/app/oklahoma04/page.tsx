import type { Metadata } from "next";
import { OklahomaTopicStub } from "@/components/OklahomaTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: Commemorative Postage Stamps & Pavilion Information — Oklahoma — nywf64.com",
  description:
    "Brochure: Commemorative Postage Stamps & Pavilion Information — Oklahoma at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <OklahomaTopicStub
      title={
        "Brochure: Commemorative Postage Stamps & Pavilion Information"
      }
    />
  );
}
