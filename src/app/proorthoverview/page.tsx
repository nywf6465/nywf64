import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /proortoverview. */
export default function Page() {
  redirect("/proortoverview");
}
