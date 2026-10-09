import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler07. */
export default function ChryslerPressReleaseRedirectPage() {
  redirect("/chrysler07");
}
