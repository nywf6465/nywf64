import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler04. */
export default function ChryslerAdvertisingRedirectPage() {
  redirect("/chrysler04");
}
