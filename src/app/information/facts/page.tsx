import { redirect } from "next/navigation";

/** Legacy stub path — Fair Facts & Figures lives at `/info_booth01`. */
export default function InformationFactsRedirect() {
  redirect("/info_booth01");
}
