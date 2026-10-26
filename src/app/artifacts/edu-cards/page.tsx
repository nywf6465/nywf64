import { redirect } from "next/navigation";

/** Artifacts card path — Edu-Cards live at `/educardsoverview`. */
export default function ArtifactsEduCardsRedirect() {
  redirect("/educardsoverview");
}
