import { redirect } from "next/navigation";

/** Legacy stub route — Information Manual lives at /bell02. */
export default function BellManualRedirectPage() {
  redirect("/bell02");
}
