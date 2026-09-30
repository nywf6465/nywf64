import type { Metadata } from "next";
import { ChryslerTopicStub } from "@/components/ChryslerTopicStub";

export const metadata: Metadata = {
  title: "chryslerguidebook — Chrysler Pavilion — nywf64.com",
  description:
    "chryslerguidebook at the 1964/1965 New York World's Fair — Chrysler Pavilion on nywf64.com.",
};

export default function Page() {
  return <ChryslerTopicStub title={"chryslerguidebook"} />;
}
