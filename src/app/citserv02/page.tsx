import type { Metadata } from "next";
import { CitservTopicStub } from "@/components/CitservTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Cities Service Band \u2014 nywf64.com",
  description:
    "Postcards \u2014 Cities Service World's Fair Band of America on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <CitservTopicStub title={"Postcards"} />;
}
