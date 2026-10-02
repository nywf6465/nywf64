import type { Metadata } from "next";
import { EaskodTopicStub } from "@/components/EaskodTopicStub";

export const metadata: Metadata = {
  title: "Advertising — Eastman Kodak Pavilion — nywf64.com",
  description:
    "Advertising at the 1964/1965 New York World's Fair — Eastman Kodak Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <EaskodTopicStub title={"Advertising"} />;
}
