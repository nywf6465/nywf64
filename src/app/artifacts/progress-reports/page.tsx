import { redirect } from "next/navigation";

/** Legacy artifacts path — World’s Fair Progress Reports lives at `/reportoverview`. */
export default function ArtifactsProgressReportsRedirect() {
  redirect("/reportoverview");
}
