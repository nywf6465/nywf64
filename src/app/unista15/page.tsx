import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "After the Fair — United States Pavilion — nywf64.com",
  description:
    "After the Fair at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export default function Page() {
  return <UnistaTopicStub title={"After the Fair"} />;
}
