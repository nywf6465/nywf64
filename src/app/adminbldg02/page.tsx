import type { Metadata } from "next";
import { AdminbldgTopicStub } from "@/components/AdminbldgTopicStub";

export const metadata: Metadata = {
  title: "At the Fair \u2014 Administration Building \u2014 nywf64.com",
  description:
    "At the Fair \u2014 Administration Building at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AdminbldgTopicStub title={"At the Fair"} />;
}
