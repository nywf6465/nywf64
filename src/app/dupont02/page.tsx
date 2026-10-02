import type { Metadata } from "next";
import { DupontTopicStub } from "@/components/DupontTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 DuPont Pavilion \u2014 nywf64.com",
  description:
    "Postcards at the 1964/1965 New York World's Fair \u2014 DuPont Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <DupontTopicStub title={"Postcards"} />;
}
