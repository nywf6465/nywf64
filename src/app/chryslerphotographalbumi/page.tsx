import { redirect } from "next/navigation";

/** Legacy slug — canonical route is /chrysler05. */
export default function ChryslerPhotographAlbumIRedirectPage() {
  redirect("/chrysler05");
}
