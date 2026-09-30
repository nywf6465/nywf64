import type { Metadata } from "next";
import { GarmedTopicStub } from "@/components/GarmedTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Garden of Meditation — nywf64.com",
  description:
    "World's Fair Information Manual — Garden of Meditation at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <GarmedTopicStub title="World's Fair Information Manual" />;
}
