import type { Metadata } from "next";
import { NewjerTopicStub } from "@/components/NewjerTopicStub";

export const metadata: Metadata = {
  title:
    "New Jersey 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "New Jersey 1964 & 1965 Official Guidebook & Souvenir Map Entries — New Jersey at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <NewjerTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
