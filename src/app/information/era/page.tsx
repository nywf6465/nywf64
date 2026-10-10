import { redirect } from "next/navigation";

/** Legacy stub path — 1964/1965 The Era of the Fair lives at `/fair_eraoverview`. */
export default function InformationEraRedirect() {
  redirect("/fair_eraoverview");
}
