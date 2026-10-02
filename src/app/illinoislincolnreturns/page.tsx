import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "Lincoln Returns to Illinois — Illinois Pavilion — nywf64.com",
  description: "Lincoln Returns to Illinois at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IllinoisTopicStub title={"Lincoln Returns to Illinois"} />;
}
