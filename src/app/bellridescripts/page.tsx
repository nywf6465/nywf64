import { redirect } from "next/navigation";

/** Legacy stub route — Ride of Communications scripts live at /bell09. */
export default function BellRideScriptsRedirectPage() {
  redirect("/bell09");
}
