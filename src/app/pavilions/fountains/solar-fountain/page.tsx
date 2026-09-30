import { redirect } from "next/navigation";

/** Legacy Fountains topic path → Solar Fountain overview. */
export default function Page() {
  redirect("/solfountoverview");
}
