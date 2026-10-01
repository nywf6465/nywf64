import type { Metadata } from "next";
import { PakistTopicStub } from "@/components/PakistTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Pakistan — nywf64.com",
  description:
    "Gallery of Photographs — Pakistan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <PakistTopicStub title={"Gallery of Photographs"} />;
}
