import { redirect } from "next/navigation";

/** Legacy Fountains topic path → Lighting & Effects overview. */
export default function Page() {
  redirect("/lightingoverview");
}
