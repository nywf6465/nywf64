import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Legacies Locations II — The Fair that Survived — nywf64.com",
  description:
    "Legacies Locations II — The Fair that Survived at nywf64.com.",
};

/** Stub until the Legacies Locations II legacies page is built. */
export default function Legacies03Page() {
  redirect("/legaciesoverview");
}
