import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler01. */
export default function ChryslerGuidebookRedirectPage() {
  redirect("/chrysler01");
}
