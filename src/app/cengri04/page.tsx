import type { Metadata } from "next";
import { CengriTopicStub } from "@/components/CengriTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking \u2014 Century Grill \u2014 nywf64.com",
  description:
    "Pamphlet: Groundbreaking \u2014 Century Grill at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <CengriTopicStub title={"Pamphlet: Groundbreaking"} />;
}
