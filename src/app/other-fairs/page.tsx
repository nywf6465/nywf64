import { redirect } from "next/navigation";

/** Legacy homepage hub path → Expos landing. */
export default function Page() {
  redirect("/expos");
}
