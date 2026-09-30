import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — United States Pavilion — nywf64.com",
  description:
    "Photograph Album at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export default function Page() {
  return <UnistaTopicStub title={"Photograph Album"} />;
}
