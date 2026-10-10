import { redirect } from "next/navigation";

/** Legacy stub path — See the Fair from the Air lives at `/fair_airoverview`. */
export default function InformationFromTheAirRedirect() {
  redirect("/fair_airoverview");
}
