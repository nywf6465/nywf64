import { redirect } from "next/navigation";

/** Legacy After the Fair URL — content remapped to /adminbldg02. */
export default function Adminbldg03RedirectPage() {
  redirect("/adminbldg02");
}
