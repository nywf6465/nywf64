import type { Metadata } from "next";
import { CarparTopicStub } from "@/components/CarparTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Carousel Park \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Carousel Park at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <CarparTopicStub title={"World's Fair Information Manual"} />;
}
