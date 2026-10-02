import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Essay: My IBM at the Fair — IBM Pavilion — nywf64.com",
  description:
    "Essay: My IBM at the Fair at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IbmTopicStub title={"Essay: My IBM at the Fair"} />;
}
