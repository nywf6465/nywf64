import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Welcome to the IBM Pavilion (Version 2) — IBM Pavilion — nywf64.com",
  description:
    "Brochure: Welcome to the IBM Pavilion (Version 2) at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IbmTopicStub title={"Brochure: Welcome to the IBM Pavilion (Version 2)"} />;
}
