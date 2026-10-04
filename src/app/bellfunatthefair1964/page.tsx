import { redirect } from "next/navigation";

/** Legacy stub route — Fun at the Fair 1964 brochure lives at /bell11. */
export default function BellFunAtTheFair1964RedirectPage() {
  redirect("/bell11");
}
