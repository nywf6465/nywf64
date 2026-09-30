import type { Metadata } from "next";
import { NewmexTopicStub } from "@/components/NewmexTopicStub";

export const metadata: Metadata = {
  title: "New Mexico World's Fair Information Manual — nywf64.com",
  description:
    "New Mexico World's Fair Information Manual — New Mexico at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <NewmexTopicStub title="World's Fair Information Manual" />;
}
