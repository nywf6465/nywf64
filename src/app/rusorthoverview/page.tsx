import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /rusortoverview. */
export default function Page() {
  redirect("/rusortoverview");
}
