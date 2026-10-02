import type { Metadata } from "next";
import { DanwatTopicStub } from "@/components/DanwatTopicStub";

export const metadata: Metadata = {
  title:
    "Souvenir Program — Dancing Waters — nywf64.com",
  description:
    "Souvenir Program — Dancing Waters at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <DanwatTopicStub
      title={"Souvenir Program"}
    />
  );
}
