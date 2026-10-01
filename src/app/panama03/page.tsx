import type { Metadata } from "next";
import { PanamgTopicStub } from "@/components/PanamgTopicStub";

export const metadata: Metadata = {
  title:
    "Photograph Album — Pan American Highway Gardens — nywf64.com",
  description:
    "Photograph Album — Pan American Highway Gardens at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <PanamgTopicStub title={"Photograph Album"} />;
}
