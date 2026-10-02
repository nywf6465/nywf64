import type { Metadata } from "next";
import { SpainTopicStub } from "@/components/SpainTopicStub";

export const metadata: Metadata = {
  title: "After the Fair - On to Saint Louis! — Spain Pavilion — nywf64.com",
  description:
    "After the Fair - On to Saint Louis! at the 1964/1965 New York World's Fair — Spain Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <SpainTopicStub title={"After the Fair - On to Saint Louis!"} />;
}
