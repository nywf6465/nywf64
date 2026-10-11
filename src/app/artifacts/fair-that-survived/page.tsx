import { redirect } from "next/navigation";

/** Legacy artifacts path — The Fair that Survived lives at `/legaciesoverview`. */
export default function ArtifactsFairThatSurvivedRedirect() {
  redirect("/legaciesoverview");
}
