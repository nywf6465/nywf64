import type { Metadata } from "next";
import { NewyorcitTopicStub } from "@/components/NewyorcitTopicStub";

export const metadata: Metadata = {
  title:
    "New York City 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "New York City 1964 & 1965 Official Guidebook & Souvenir Map Entries — New York City at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <NewyorcitTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
