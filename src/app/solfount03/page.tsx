import type { Metadata } from "next";
import { SolfountTopicStub } from "@/components/SolfountTopicStub";

export const metadata: Metadata = {
  title: "Postcards — Solar Fountain — nywf64.com",
  description:
    "Postcards at the Solar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <SolfountTopicStub title={"Postcards"} />;
}
