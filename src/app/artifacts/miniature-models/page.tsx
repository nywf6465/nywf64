import { redirect } from "next/navigation";

/** Legacy artifacts path — Miniature Models of the Fair lives at `/minimodsoverview`. */
export default function ArtifactsMiniatureModelsRedirect() {
  redirect("/minimodsoverview");
}
