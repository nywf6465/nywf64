import type { Metadata } from "next";
import { AmindTopicStub } from "@/components/AmindTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 American Indian Exposition \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 American Indian Exposition at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <AmindTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
