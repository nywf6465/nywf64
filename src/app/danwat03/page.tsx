import type { Metadata } from "next";
import { DanwatTopicStub } from "@/components/DanwatTopicStub";

export const metadata: Metadata = {
  title:
    "Photograph Album — Dancing Waters — nywf64.com",
  description:
    "Photograph Album — Dancing Waters at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <DanwatTopicStub
      title={"Photograph Album"}
    />
  );
}
