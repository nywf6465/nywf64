import { redirect } from "next/navigation";

/** Legacy artifacts hub path → Postcard Collection overview. */
export default function ArtifactsPostcardsRedirect() {
  redirect("/pcardsoverview");
}
