import type { Metadata } from "next";
import { DenmarkTopicStub } from "@/components/DenmarkTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Denmark — nywf64.com",
  description:
    "Photograph Album — Denmark at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <DenmarkTopicStub title={"Photograph Album"} />;
}
