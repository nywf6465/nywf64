import { redirect } from "next/navigation";

/** Legacy path — canonical route is /atoz. */
export default function Page() {
  redirect("/atoz");
}
