import { redirect } from "next/navigation";

/** Legacy menu/stub path — Postcards live at /bell03. */
export default function BellPostcardsRedirectPage() {
  redirect("/bell03");
}
