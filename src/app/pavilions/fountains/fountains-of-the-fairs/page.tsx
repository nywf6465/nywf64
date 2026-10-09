import { redirect } from "next/navigation";

/** Legacy Fountains topic path → Fountains of the Fairs overview. */
export default function Page() {
  redirect("/foufaioverview");
}
