import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "The 1965 Season — Formica — nywf64.com",
  description:
    "The 1965 Season — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FormicaTopicStub title="The 1965 Season" />;
}
