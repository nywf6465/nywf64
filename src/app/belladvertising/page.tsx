import { redirect } from "next/navigation";

/** Legacy stub route — Advertising lives at /bell04. */
export default function BellAdvertisingRedirectPage() {
  redirect("/bell04");
}
