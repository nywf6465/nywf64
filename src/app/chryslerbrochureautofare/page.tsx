import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler09. */
export default function ChryslerBrochureAutofareRedirectPage() {
  redirect("/chrysler09");
}
