import type { Metadata } from "next";
import { MontanaTopicStub } from "@/components/MontanaTopicStub";

export const metadata: Metadata = {
  title: "Montana Postcards — nywf64.com",
  description:
    "Montana Postcards — Montana at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MontanaTopicStub title="Postcards" />;
}
