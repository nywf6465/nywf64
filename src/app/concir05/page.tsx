import type { Metadata } from "next";
import { ConcirTopicStub } from "@/components/ConcirTopicStub";

export const metadata: Metadata = {
  title:
    "Souvenir Program — Continental Circus — nywf64.com",
  description:
    "Souvenir Program — Continental Circus at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ConcirTopicStub
      title={"Souvenir Program"}
    />
  );
}
