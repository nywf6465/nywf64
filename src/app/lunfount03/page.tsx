import type { Metadata } from "next";
import { LunfountTopicStub } from "@/components/LunfountTopicStub";

export const metadata: Metadata = {
  title: "Postcards — Lunar Fountain — nywf64.com",
  description:
    "Postcards at the Lunar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <LunfountTopicStub title={"Postcards"} />;
}
