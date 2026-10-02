import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Formica — nywf64.com",
  description:
    "Photograph Album — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FormicaTopicStub title="Photograph Album" />;
}
