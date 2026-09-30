import type { Metadata } from "next";
import { NewmexTopicStub } from "@/components/NewmexTopicStub";

export const metadata: Metadata = {
  title: "New Mexico 1964 & 1965 Official Guidebook — nywf64.com",
  description:
    "New Mexico 1964 & 1965 Official Guidebook — New Mexico at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <NewmexTopicStub title="1964 & 1965 Official Guidebook" />;
}
