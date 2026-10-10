import { redirect } from "next/navigation";

/** Legacy Information Booth stub — canonical page is `/fair_airoverview`. */
export default function Page() {
  redirect("/fair_airoverview");
}
