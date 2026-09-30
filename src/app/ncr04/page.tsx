import type { Metadata } from "next";
import { NcrTopicStub } from "@/components/NcrTopicStub";

export const metadata: Metadata = {
  title: "NCR Photograph Album — nywf64.com",
  description:
    "NCR Photograph Album — NCR at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <NcrTopicStub title="Photograph Album" />;
}
