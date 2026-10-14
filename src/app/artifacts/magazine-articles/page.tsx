import { redirect } from "next/navigation";

/** Legacy artifacts path — Magazine Articles of the Fair lives at `/periodicalsoverview`. */
export default function ArtifactsMagazineArticlesRedirect() {
  redirect("/periodicalsoverview");
}
