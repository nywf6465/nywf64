import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps05`. */
export default function Page() {
  redirect("/maps05");
}
