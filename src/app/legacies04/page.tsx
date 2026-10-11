import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "The Ottilio Building — The Fair that Survived — nywf64.com",
  description:
    "The Ottilio Building — The Fair that Survived at nywf64.com.",
};

/** Stub until the The Ottilio Building legacies page is built. */
export default function Legacies04Page() {
  redirect("/legaciesoverview");
}
