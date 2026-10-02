import type { Metadata } from "next";
import { SprogfountTopicStub } from "@/components/SprogfountTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of Progress South — nywf64.com",
  description:
    "Photograph Album at the Fountain of Progress South — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <SprogfountTopicStub title={"Photograph Album"} />;
}
