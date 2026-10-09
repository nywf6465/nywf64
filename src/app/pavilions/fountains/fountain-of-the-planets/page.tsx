import { redirect } from "next/navigation";

/** Legacy Fountains topic path → Fountain of the Planets overview. */
export default function Page() {
  redirect("/fouplaoverview");
}
