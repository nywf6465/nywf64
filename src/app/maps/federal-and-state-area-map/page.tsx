import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps04`. */
export default function Page() {
  redirect("/maps04");
}
