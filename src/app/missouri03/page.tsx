import type { Metadata } from "next";
import { MissouriTopicStub } from "@/components/MissouriTopicStub";

export const metadata: Metadata = {
  title: 'Missouri Gallery of Photographs — nywf64.com',
  description: "Missouri Gallery of Photographs — Missouri at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MissouriTopicStub title='Gallery of Photographs' />;
}
