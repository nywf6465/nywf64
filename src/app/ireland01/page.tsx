import type { Metadata } from "next";
import { IrelandTopicStub } from "@/components/IrelandTopicStub";

export const metadata: Metadata = {
  title: "Ireland 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Ireland 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Ireland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <IrelandTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />
  );
}
