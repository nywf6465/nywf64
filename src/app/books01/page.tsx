import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Images of America — Our Books on the Fair — nywf64.com",
  description:
    "Images of America book page — Our Books on the Fair at nywf64.com.",
};

/** Stub until the Images of America books page is built. */
export default function Books01Page() {
  redirect("/booksoverview");
}
