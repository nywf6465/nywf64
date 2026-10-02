import type { Metadata } from "next";
import { SpainTopicStub } from "@/components/SpainTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries — Spain Pavilion — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries at the 1964/1965 New York World's Fair — Spain Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <SpainTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
