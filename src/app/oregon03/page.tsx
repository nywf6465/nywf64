import type { Metadata } from "next";
import { OregonTopicStub } from "@/components/OregonTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Oregon — nywf64.com",
  description:
    "Photograph Album — Oregon at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <OregonTopicStub title={"Photograph Album"} />;
}
