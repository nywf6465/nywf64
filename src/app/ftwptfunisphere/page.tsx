import { redirect } from "next/navigation";

/** Legacy path — Unisphere Photo lives at `/ftwptf02`. */
export default function Stub() {
  redirect("/ftwptf02");
}
