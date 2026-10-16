import { redirect } from "next/navigation";

/** Artifacts card path — Wolfe Worldwide Films lives at `/wolfeoverview`. */
export default function ArtifactsWolfeSlidesRedirect() {
  redirect("/wolfeoverview");
}
