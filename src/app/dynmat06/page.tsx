import type { Metadata } from "next";
import { DynmatTopicStub } from "@/components/DynmatTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Helpful Hints — Dynamic Maturity — nywf64.com",
  description:
    "Pamphlet: Helpful Hints — Dynamic Maturity at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <DynmatTopicStub title={"Pamphlet: Helpful Hints"} />;
}
