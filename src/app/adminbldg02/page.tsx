import { redirect } from "next/navigation";

/** Legacy At the Fair URL — content remapped to /adminbldg01. */
export default function Adminbldg02RedirectPage() {
  redirect("/adminbldg01");
}
