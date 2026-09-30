import type { Metadata } from "next";
import { NprogfountTopicStub } from "@/components/NprogfountTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of Progress North — nywf64.com",
  description:
    "Photograph Album at the Fountain of Progress North — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <NprogfountTopicStub title={"Photograph Album"} />;
}
