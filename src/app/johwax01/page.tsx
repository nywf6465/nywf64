import type { Metadata } from "next";
import { JohwaxTopicStub } from "@/components/JohwaxTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Johnson Wax Pavilion \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries at the 1964/1965 New York World's Fair \u2014 Johnson Wax Pavilion on nywf64.com.",
};

export default function Page() {
  return <JohwaxTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
