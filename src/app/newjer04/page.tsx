import type { Metadata } from "next";
import { NewjerTopicStub } from "@/components/NewjerTopicStub";

export const metadata: Metadata = {
  title: "New Jersey Photograph Album — nywf64.com",
  description:
    "New Jersey Photograph Album — New Jersey at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <NewjerTopicStub title="Photograph Album" />;
}
