import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Glide-a-Rides — The Fair that Survived — nywf64.com",
  description:
    "Glide-a-Rides — The Fair that Survived at nywf64.com.",
};

/** Stub until the Glide-a-Rides legacies page is built. */
export default function Legacies05Page() {
  redirect("/legaciesoverview");
}
