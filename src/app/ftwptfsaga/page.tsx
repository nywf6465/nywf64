import { redirect } from "next/navigation";

/** Legacy path — The Saga of Flushing Meadow cover lives at `/ftwptf03`. */
export default function Stub() {
  redirect("/ftwptf03");
}
