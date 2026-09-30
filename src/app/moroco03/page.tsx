import type { Metadata } from "next";
import { MorocoTopicStub } from "@/components/MorocoTopicStub";

export const metadata: Metadata = {
  title: "Morocco Postcards — nywf64.com",
  description:
    "Morocco Postcards — Morocco at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MorocoTopicStub title="Postcards" />;
}
