import type { Metadata } from "next";
import { EntbuiTopicStub } from "@/components/EntbuiTopicStub";

export const metadata: Metadata = {
  title: "Postcards — Entrance Building — nywf64.com",
  description:
    "Postcards — Entrance Building at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <EntbuiTopicStub title="Postcards" />;
}
