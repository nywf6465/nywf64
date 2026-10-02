import type { Metadata } from "next";
import { TowersTopicStub } from "@/components/TowersTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Entrance Towers \u2014 nywf64.com",
  description: "Photograph Album \u2014 Entrance Towers at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <TowersTopicStub title="Photograph Album" />;
}
