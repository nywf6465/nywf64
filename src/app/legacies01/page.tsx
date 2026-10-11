import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: '“The List” — The Fair that Survived — nywf64.com',
  description:
    "The List — The Fair that Survived at nywf64.com.",
};

/** Stub until The List legacies page is built. */
export default function Legacies01Page() {
  redirect("/legaciesoverview");
}
