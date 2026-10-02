import type { Metadata } from "next";
import { JohwaxTopicStub } from "@/components/JohwaxTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Johnson Wax Pavilion \u2014 nywf64.com",
  description:
    "Photograph Album at the 1964/1965 New York World's Fair \u2014 Johnson Wax Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JohwaxTopicStub title={"Photograph Album"} />;
}
