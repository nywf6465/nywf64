import type { Metadata } from "next";
import { FloridaTopicStub } from "@/components/FloridaTopicStub";

export const metadata: Metadata = {
  title: "floridasubexhibitors — Florida Pavilion — nywf64.com",
  description:
    "floridasubexhibitors at the 1964/1965 New York World's Fair — Florida Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FloridaTopicStub title={"floridasubexhibitors"} />;
}
