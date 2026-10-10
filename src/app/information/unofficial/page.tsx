import { redirect } from "next/navigation";

/** Legacy stub path — An Unofficial World’s Fair lives at `/true_fairoverview`. */
export default function InformationUnofficialRedirect() {
  redirect("/true_fairoverview");
}
