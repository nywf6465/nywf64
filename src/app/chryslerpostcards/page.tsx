import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler03. */
export default function ChryslerPostcardsRedirectPage() {
  redirect("/chrysler03");
}
