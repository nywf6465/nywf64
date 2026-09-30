import type { Metadata } from "next";
import { FranceTopicStub } from "@/components/FranceTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guide Book & Souvenir Map — France — nywf64.com",
  description:
    "1964 & 1965 Official Guide Book & Souvenir Map — France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FranceTopicStub title="1964 & 1965 Official Guide Book & Souvenir Map" />;
}
