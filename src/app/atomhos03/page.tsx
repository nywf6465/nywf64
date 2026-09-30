import type { Metadata } from "next";
import { AtomhosTopicStub } from "@/components/AtomhosTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Atomedic Hospital \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Atomedic Hospital at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AtomhosTopicStub title={"Photograph Album"} />;
}
