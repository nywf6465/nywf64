import type { Metadata } from "next";
import { CitservTopicStub } from "@/components/CitservTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Cities Service Band \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Cities Service World's Fair Band of America on nywf64.com.",
};

export default function Page() {
  return <CitservTopicStub title={"Photograph Album"} />;
}
