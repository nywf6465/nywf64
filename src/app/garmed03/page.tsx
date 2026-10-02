import type { Metadata } from "next";
import { GarmedTopicStub } from "@/components/GarmedTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Garden of Meditation — nywf64.com",
  description:
    "Photograph Album — Garden of Meditation at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GarmedTopicStub title="Photograph Album" />;
}
