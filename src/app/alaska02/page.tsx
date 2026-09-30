import type { Metadata } from "next";
import { AlaskaTopicStub } from "@/components/AlaskaTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Alaska \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Alaska at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AlaskaTopicStub title={"World's Fair Information Manual"} />;
}
