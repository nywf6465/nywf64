import type { Metadata } from "next";
import { GenfooTopicStub } from "@/components/GenfooTopicStub";

export const metadata: Metadata = {
  title: "Article: Archways to Understanding \u2014 General Foods Arches \u2014 nywf64.com",
  description: "Article: Archways to Understanding \u2014 General Foods Arches at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GenfooTopicStub title={"Article: Archways to Understanding"} />;
}
