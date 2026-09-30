import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /litwaycrooverview. */
export default function Page() {
  redirect("/litwaycrooverview");
}
