import type { Metadata } from "next";
import { CokeTopicStub } from "@/components/CokeTopicStub";

export const metadata: Metadata = {
  title:
    "Pavilion Guide — Coca-Cola — nywf64.com",
  description:
    "Pavilion Guide — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CokeTopicStub
      title={"Pavilion Guide"}
    />
  );
}
