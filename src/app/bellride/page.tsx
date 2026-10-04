import { redirect } from "next/navigation";

/** Legacy stub route — The Ride of Communications lives at /bell08. */
export default function BellRideRedirectPage() {
  redirect("/bell08");
}
