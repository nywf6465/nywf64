import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "The Lincoln Photo Exhibit — Illinois Pavilion — nywf64.com",
  description: "The Lincoln Photo Exhibit at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IllinoisTopicStub title={"The Lincoln Photo Exhibit"} />;
}
