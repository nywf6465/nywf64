import type { Metadata } from "next";
import { FouconTopicStub } from "@/components/FouconTopicStub";

export const metadata: Metadata = {
  title: "Postcards — Fountain of the Continents — nywf64.com",
  description:
    "Postcards at the Fountain of the Continents — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <FouconTopicStub title={"Postcards"} />;
}
