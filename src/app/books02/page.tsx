import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Creation and Legacy — Our Books on the Fair — nywf64.com",
  description:
    "Creation and Legacy book page — Our Books on the Fair at nywf64.com.",
};

/** Stub until the Creation and Legacy books page is built. */
export default function Books02Page() {
  redirect("/booksoverview");
}
