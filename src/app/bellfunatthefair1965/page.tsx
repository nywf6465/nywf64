import { redirect } from "next/navigation";

/** Legacy stub route — Fun at the Fair 1965 brochure lives at /bell12. */
export default function BellFunAtTheFair1965RedirectPage() {
  redirect("/bell12");
}
