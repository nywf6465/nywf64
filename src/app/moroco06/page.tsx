import type { Metadata } from "next";
import { MorocoTopicStub } from "@/components/MorocoTopicStub";

export const metadata: Metadata = {
  title: "Morocco Pamphlet: Welcome to the Moroccan Pavilion — nywf64.com",
  description:
    "Morocco Pamphlet: Welcome to the Moroccan Pavilion — Morocco at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <MorocoTopicStub title="Pamphlet: Welcome to the Moroccan Pavilion" />
  );
}
