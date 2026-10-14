import { redirect } from "next/navigation";

/** Legacy artifacts path — The “Men at Work” Book lives at `/matwoverview`. */
export default function ArtifactsMenAtWorkRedirect() {
  redirect("/matwoverview");
}
