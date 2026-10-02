import type { Metadata } from "next";
import { OklahomaTopicStub } from "@/components/OklahomaTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Oklahoma — nywf64.com",
  description:
    "World's Fair Information Manual — Oklahoma at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <OklahomaTopicStub title={"World's Fair Information Manual"} />;
}
