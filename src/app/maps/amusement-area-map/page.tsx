import { redirect } from "next/navigation";

/** Legacy stub route — interactive map lives at `/maps06`. */
export default function Page() {
  redirect("/maps06");
}
