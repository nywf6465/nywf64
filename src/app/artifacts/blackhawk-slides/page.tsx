import { redirect } from "next/navigation";

/** Artifacts card path — The Blackhawk Films Slide Set lives at `/mainlineroverview`. */
export default function ArtifactsBlackhawkSlidesRedirect() {
  redirect("/mainlineroverview");
}
