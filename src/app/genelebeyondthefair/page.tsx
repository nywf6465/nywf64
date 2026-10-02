import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GeneleTopicStub title={"Beyond the Fair: the Carousel of Progress' Beautiful Tomorrow"} />;
}
