import { redirect } from "next/navigation";

/** Misspelled slug — canonical route is /proortoverview. */
export default function Page() {
  redirect("/proortoverview");
}
