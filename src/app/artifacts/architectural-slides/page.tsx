import { redirect } from "next/navigation";

/** Legacy artifacts path — Architectural Series lives at `/archoverview`. */
export default function ArchitecturalSlidesRedirectPage() {
  redirect("/archoverview");
}
