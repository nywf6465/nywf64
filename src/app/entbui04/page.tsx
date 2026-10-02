import type { Metadata } from "next";
import { EntbuiTopicStub } from "@/components/EntbuiTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Entrance Building — nywf64.com",
  description:
    "Photograph Album — Entrance Building at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <EntbuiTopicStub title="Photograph Album" />;
}
