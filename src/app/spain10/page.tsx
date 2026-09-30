import type { Metadata } from "next";
import { SpainTopicStub } from "@/components/SpainTopicStub";

export const metadata: Metadata = {
  title: "Art Tour — Spain Pavilion — nywf64.com",
  description:
    "Art Tour at the 1964/1965 New York World's Fair — Spain Pavilion on nywf64.com.",
};

export default function Page() {
  return <SpainTopicStub title={"Art Tour"} />;
}
