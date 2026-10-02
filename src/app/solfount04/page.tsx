import type { Metadata } from "next";
import { SolfountTopicStub } from "@/components/SolfountTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Solar Fountain — nywf64.com",
  description:
    "Gallery of Photographs at the Solar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <SolfountTopicStub title={"Gallery of Photographs"} />;
}
