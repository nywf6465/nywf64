import { redirect } from "next/navigation";

/** Legacy stub route — The Exhibit Hall lives at /bell10. */
export default function BellExhibitHallRedirectPage() {
  redirect("/bell10");
}
