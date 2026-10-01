import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /ford01. */
export default function FordGuidebookRedirectPage() {
  redirect("/ford01");
}
