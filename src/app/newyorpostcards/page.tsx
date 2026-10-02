import type { Metadata } from "next";
import { NewyorTopicStub } from "@/components/NewyorTopicStub";

export const metadata: Metadata = {
  title: "newyorpostcards — New York State Pavilion — nywf64.com",
  description:
    "newyorpostcards at the 1964/1965 New York World's Fair — New York State Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NewyorTopicStub title={"newyorpostcards"} />;
}
