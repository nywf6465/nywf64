import { redirect } from "next/navigation";

/** Artifacts card path — View-Masters Reels lives at `/vmoverview`. */
export default function ArtifactsViewMastersRedirect() {
  redirect("/vmoverview");
}
