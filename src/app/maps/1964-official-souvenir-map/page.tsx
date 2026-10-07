import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps01`. */
export default function Page() {
  redirect("/maps01");
}
