import type { Metadata } from "next";
import { BellTopicStub } from "@/components/BellTopicStub";

export const metadata: Metadata = {
  title: "bellfunatthefair1964 — Bell System Pavilion — nywf64.com",
  description:
    "bellfunatthefair1964 at the 1964/1965 New York World's Fair — Bell System Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BellTopicStub title={"bellfunatthefair1964"} />;
}
