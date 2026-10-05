import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler06. */
export default function ChryslerPhotographAlbumIIRedirectPage() {
  redirect("/chrysler06");
}
