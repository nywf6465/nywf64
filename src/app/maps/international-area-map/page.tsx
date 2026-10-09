import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps03`. */
export default function Page() {
  redirect("/maps03");
}
