import type { Metadata } from "next";
import { MissouriTopicStub } from "@/components/MissouriTopicStub";

export const metadata: Metadata = {
  title: 'Missouri Magazine: Missouri Business 3/64 — nywf64.com',
  description: "Missouri Magazine: Missouri Business 3/64 — Missouri at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MissouriTopicStub title='Magazine: Missouri Business 3/64' />;
}
