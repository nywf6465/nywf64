import type { Metadata } from "next";
import { ChryslerTopicStub } from "@/components/ChryslerTopicStub";

export const metadata: Metadata = {
  title: "chrysleradvertising — Chrysler Pavilion — nywf64.com",
  description:
    "chrysleradvertising at the 1964/1965 New York World's Fair — Chrysler Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ChryslerTopicStub title={"chrysleradvertising"} />;
}
