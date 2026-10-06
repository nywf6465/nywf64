import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler02. */
export default function ChryslerManualRedirectPage() {
  redirect("/chrysler02");
}
