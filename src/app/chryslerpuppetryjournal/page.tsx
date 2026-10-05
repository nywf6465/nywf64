import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler12. */
export default function ChryslerPuppetryJournalRedirectPage() {
  redirect("/chrysler12");
}
