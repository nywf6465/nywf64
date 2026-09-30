import type { Metadata } from "next";
import { FoucaultTopicStub } from "@/components/FoucaultTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Fountains of the Fairs — nywf64.com",
  description:
    "Photograph Album at the Fountains of the Fairs — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <FoucaultTopicStub title={"Photograph Album"} />;
}
