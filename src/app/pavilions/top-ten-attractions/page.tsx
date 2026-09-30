import { redirect } from "next/navigation";

/** Legacy Pavilions hub stub — use the approved `/top-ten` landing. */
export default function Page() {
  redirect("/top-ten");
}
