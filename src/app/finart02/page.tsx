import type { Metadata } from "next";
import { FinartTopicStub } from "@/components/FinartTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Fine Arts Pavilion — nywf64.com",
  description:
    "Photograph Album — Fine Arts Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FinartTopicStub title="Photograph Album" />;
}
