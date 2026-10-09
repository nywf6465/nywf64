import { redirect } from "next/navigation";

/** Legacy stub route — interactive aerial photograph lives at `/big_picture01`. */
export default function Page() {
  redirect("/big_picture01");
}
