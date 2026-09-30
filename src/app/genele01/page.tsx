import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "genele01 — General Electric Pavilion — nywf64.com",
  description:
    "genele01 at the 1964/1965 New York World's Fair — General Electric Pavilion on nywf64.com.",
};

export default function Page() {
  return <GeneleTopicStub title={"genele01"} />;
}
