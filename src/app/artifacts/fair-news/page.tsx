import { redirect } from "next/navigation";

/** Legacy artifacts path — Fair News Newsletters lives at `/fairnewsoverview`. */
export default function ArtifactsFairNewsRedirect() {
  redirect("/fairnewsoverview");
}
