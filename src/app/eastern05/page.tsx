import type { Metadata } from "next";
import { EasternTopicStub } from "@/components/EasternTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: World's Fair Handbook \u2014 Eastern Air Lines \u2014 nywf64.com",
  description: "Pamphlet: World's Fair Handbook \u2014 Eastern Air Lines at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <EasternTopicStub
      title={"Pamphlet: World's Fair Handbook"}
    />
  );
}
