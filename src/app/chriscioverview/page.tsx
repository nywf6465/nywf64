import { redirect } from "next/navigation";

/** Legacy misspelling — canonical route is /chrscioverview. */
export default function Page() {
  redirect("/chrscioverview");
}
