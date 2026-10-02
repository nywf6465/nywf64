import type { Metadata } from "next";
import { FoucaultTopicStub } from "@/components/FoucaultTopicStub";

export const metadata: Metadata = {
  title: "Postcards — Fountains of the Fairs — nywf64.com",
  description:
    "Postcards at the Fountains of the Fairs — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FoucaultTopicStub title={"Postcards"} />;
}
