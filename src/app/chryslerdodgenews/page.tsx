import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler10. */
export default function ChryslerDodgeNewsRedirectPage() {
  redirect("/chrysler10");
}
