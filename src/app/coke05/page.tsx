import type { Metadata } from "next";
import { CokeTopicStub } from "@/components/CokeTopicStub";

export const metadata: Metadata = {
  title:
    "Photograph Album — Coca-Cola — nywf64.com",
  description:
    "Photograph Album — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CokeTopicStub
      title={"Photograph Album"}
    />
  );
}
