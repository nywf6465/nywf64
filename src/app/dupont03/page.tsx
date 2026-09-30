import type { Metadata } from "next";
import { DupontTopicStub } from "@/components/DupontTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 DuPont Pavilion \u2014 nywf64.com",
  description:
    "Photograph Album at the 1964/1965 New York World's Fair \u2014 DuPont Pavilion on nywf64.com.",
};

export default function Page() {
  return <DupontTopicStub title={"Photograph Album"} />;
}
