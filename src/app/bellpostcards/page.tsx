import { redirect } from "next/navigation";

/** Legacy stub route — Postcards live at /bell03. */
export default function BellPostcardsRedirectPage() {
  redirect("/bell03");
}
