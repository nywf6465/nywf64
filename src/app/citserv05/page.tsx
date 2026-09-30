import type { Metadata } from "next";
import { CitservTopicStub } from "@/components/CitservTopicStub";

export const metadata: Metadata = {
  title:
    "About the World's Fair Band of America \u2014 Cities Service Band \u2014 nywf64.com",
  description:
    "About the World's Fair Band of America \u2014 Cities Service Pavilion on nywf64.com.",
};

export default function Page() {
  return (
    <CitservTopicStub title={"About the World's Fair Band of America"} />
  );
}
