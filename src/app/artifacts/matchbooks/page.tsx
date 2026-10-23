import { redirect } from "next/navigation";

/** Artifacts card path — Matchbook Collection lives at `/matchbooksoverview`. */
export default function ArtifactsMatchbooksRedirect() {
  redirect("/matchbooksoverview");
}
