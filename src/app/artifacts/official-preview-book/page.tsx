import { redirect } from "next/navigation";

/** Legacy artifacts path — Official Preview Book lives at `/preview`. */
export default function ArtifactsOfficialPreviewBookRedirect() {
  redirect("/preview");
}
