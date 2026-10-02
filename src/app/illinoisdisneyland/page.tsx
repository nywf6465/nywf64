import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "Mr. Lincoln Goes to Disneyland — Illinois Pavilion — nywf64.com",
  description: "Mr. Lincoln Goes to Disneyland at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IllinoisTopicStub title={"Mr. Lincoln Goes to Disneyland"} />;
}
