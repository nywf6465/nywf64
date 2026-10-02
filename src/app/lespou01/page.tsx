import type { Metadata } from "next";
import { LespouTopicStub } from "@/components/LespouTopicStub";

export const metadata: Metadata = {
  title:
    "Les Poupees de Paris 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Les Poupees de Paris 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Les Poupees de Paris at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <LespouTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
