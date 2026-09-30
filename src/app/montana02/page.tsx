import type { Metadata } from "next";
import { MontanaTopicStub } from "@/components/MontanaTopicStub";

export const metadata: Metadata = {
  title: "Montana World's Fair Information Manual — nywf64.com",
  description:
    "Montana World's Fair Information Manual — Montana at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MontanaTopicStub title="World's Fair Information Manual" />;
}
