import { redirect } from "next/navigation";

/**
 * Foucault menu hub — overview removed; land on first topic page.
 * Path segment is exactly `/Foucault` (capital F) per site naming.
 */
export default function FoucaultPage() {
  redirect("/Foucault01");
}
