import type { Metadata } from "next";
import { FouconTopicStub } from "@/components/FouconTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of the Continents — nywf64.com",
  description:
    "Photograph Album at the Fountain of the Continents — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FouconTopicStub title={"Photograph Album"} />;
}
