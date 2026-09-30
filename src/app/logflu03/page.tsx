import type { Metadata } from "next";
import { LogfluTopicStub } from "@/components/LogfluTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Flume Ride — nywf64.com",
  description:
    "Photograph Album — Flume Ride at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <LogfluTopicStub title="Photograph Album" />;
}
