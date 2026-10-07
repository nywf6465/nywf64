import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps02`. */
export default function Page() {
  redirect("/maps02");
}
