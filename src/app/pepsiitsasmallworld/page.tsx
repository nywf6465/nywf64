import type { Metadata } from "next";
import { PepsiTopicStub } from "@/components/PepsiTopicStub";

export const metadata: Metadata = {
  title: "It's a Small World After All \u2014 Pepsi-Cola Pavilion \u2014 nywf64.com",
  description: "It's a Small World After All at the 1964/1965 New York World's Fair \u2014 Pepsi-Cola Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PepsiTopicStub title={"It's a Small World After All"} />;
}
