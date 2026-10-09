import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /morchuoverview. */
export default function Page() {
  redirect("/morchuoverview");
}
