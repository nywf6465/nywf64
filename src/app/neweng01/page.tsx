import type { Metadata } from "next";
import { NewengTopicStub } from "@/components/NewengTopicStub";

export const metadata: Metadata = {
  title:
    "New England 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "New England 1964 & 1965 Official Guidebook & Souvenir Map Entries — New England at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <NewengTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
