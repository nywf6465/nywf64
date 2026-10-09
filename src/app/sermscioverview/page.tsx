import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /serscioverview. */
export default function Page() {
  redirect("/serscioverview");
}
