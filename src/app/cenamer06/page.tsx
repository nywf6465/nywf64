import type { Metadata } from "next";
import { CenamerTopicStub } from "@/components/CenamerTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: Art from Central America and Panama \u2014 Central America \u2014 nywf64.com",
  description:
    "Brochure: Art from Central America and Panama \u2014 Central America at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CenamerTopicStub
      title={"Brochure: Art from Central America and Panama"}
    />
  );
}
