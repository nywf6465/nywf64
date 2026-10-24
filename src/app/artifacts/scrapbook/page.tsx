import { redirect } from "next/navigation";

/** Artifacts card path — Scrapbook lives at `/scrapbookoverview`. */
export default function ArtifactsScrapbookRedirect() {
  redirect("/scrapbookoverview");
}
