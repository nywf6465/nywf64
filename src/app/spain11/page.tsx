import type { Metadata } from "next";
import { SpainTopicStub } from "@/components/SpainTopicStub";

export const metadata: Metadata = {
  title: "Shows — Spain Pavilion — nywf64.com",
  description:
    "Shows at the 1964/1965 New York World's Fair — Spain Pavilion on nywf64.com.",
};

export default function Page() {
  return <SpainTopicStub title={"Shows"} />;
}
