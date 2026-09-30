import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Formica — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FormicaTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />;
}
