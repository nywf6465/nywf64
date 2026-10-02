import type { Metadata } from "next";
import { BarbufTopicStub } from "@/components/BarbufTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Bar, Buffet and Cafeteria \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Bar, Buffet and Cafeteria at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BarbufTopicStub title={"Photograph Album"} />;
}
