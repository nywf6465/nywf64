import { redirect } from "next/navigation";

/** Legacy artifacts path — Images of America lives at `/booksoverview`. */
export default function ArtifactsImagesOfAmericaRedirect() {
  redirect("/booksoverview");
}
