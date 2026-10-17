import { redirect } from "next/navigation";

/** Artifacts card path — The Photo Lab Slide Set lives at `/photolaboverview`. */
export default function ArtifactsPhotoLabSlidesRedirect() {
  redirect("/photolaboverview");
}
