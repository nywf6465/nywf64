import type { Metadata } from "next";
import { AmexTopicStub } from "@/components/AmexTopicStub";

export const metadata: Metadata = {
  title: "A Tribute to Rob Bianco \u2014 American Express \u2014 nywf64.com",
  description:
    "A Tribute to Rob Bianco \u2014 American Express at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmexTopicStub title={"A Tribute to Rob Bianco"} />;
}
