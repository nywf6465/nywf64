import type { Metadata } from "next";
import { JohwaxTopicStub } from "@/components/JohwaxTopicStub";

export const metadata: Metadata = {
  title: "Johnson Magazine \u2014 Johnson Wax Pavilion \u2014 nywf64.com",
  description:
    "Johnson Magazine at the 1964/1965 New York World's Fair \u2014 Johnson Wax Pavilion on nywf64.com.",
};

export default function Page() {
  return <JohwaxTopicStub title={"Johnson Magazine"} />;
}
