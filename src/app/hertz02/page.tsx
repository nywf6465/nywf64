import type { Metadata } from "next";
import { HertzTopicStub } from "@/components/HertzTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs \u2014 Hertz Travel Center \u2014 nywf64.com",
  description:
    "Gallery of Photographs \u2014 Hertz Travel Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HertzTopicStub title="Gallery of Photographs" />;
}
