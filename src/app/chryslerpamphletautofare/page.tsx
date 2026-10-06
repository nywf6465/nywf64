import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler08. */
export default function ChryslerPamphletAutofareRedirectPage() {
  redirect("/chrysler08");
}
