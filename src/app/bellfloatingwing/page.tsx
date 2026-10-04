import { redirect } from "next/navigation";

/** Legacy stub route — A Colossal Floating Wing lives at /bell13. */
export default function BellFloatingWingRedirectPage() {
  redirect("/bell13");
}
