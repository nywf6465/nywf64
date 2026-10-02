import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Article: IBM Creates an Information Machine — IBM Pavilion — nywf64.com",
  description:
    "Article: IBM Creates an Information Machine at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IbmTopicStub title={"Article: IBM Creates an Information Machine"} />;
}
