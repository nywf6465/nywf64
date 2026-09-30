import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — IBM Pavilion — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
