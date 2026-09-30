import type { Metadata } from "next";
import { ClairTopicStub } from "@/components/ClairTopicStub";

export const metadata: Metadata = {
  title:
    "Photograph Album — Clairol — nywf64.com",
  description:
    "Photograph Album — Clairol at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ClairTopicStub
      title={"Photograph Album"}
    />
  );
}
