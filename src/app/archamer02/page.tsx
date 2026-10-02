import type { Metadata } from "next";
import { ArchamerTopicStub } from "@/components/ArchamerTopicStub";

export const metadata: Metadata = {
  title: "About the Arch \u2014 Arch of the Americas \u2014 nywf64.com",
  description:
    "About the Arch \u2014 Arch of the Americas at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ArchamerTopicStub title={"About the Arch"} />;
}
