import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler11. */
export default function ChryslerShowGoAroundRedirectPage() {
  redirect("/chrysler11");
}
