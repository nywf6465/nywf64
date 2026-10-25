import { redirect } from "next/navigation";

/** Artifacts card path — Postage Stamps live at `/stampsoverview`. */
export default function ArtifactsPostageStampsRedirect() {
  redirect("/stampsoverview");
}
