import type { Metadata } from "next";
import { AmexTopicStub } from "@/components/AmexTopicStub";

export const metadata: Metadata = {
  title: "ART 1965 \u2014 American Express \u2014 nywf64.com",
  description:
    "ART 1965 \u2014 American Express at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AmexTopicStub title={"ART 1965"} />;
}
