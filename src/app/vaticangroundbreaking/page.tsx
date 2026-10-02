import type { Metadata } from "next";
import { VaticanTopicStub } from "@/components/VaticanTopicStub";

export const metadata: Metadata = {
  title: "vaticangroundbreaking — Vatican Pavilion — nywf64.com",
  description:
    "vaticangroundbreaking at the 1964/1965 New York World's Fair — Vatican Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <VaticanTopicStub title={"vaticangroundbreaking"} />;
}
