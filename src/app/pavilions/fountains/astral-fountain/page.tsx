import { redirect } from "next/navigation";

/** Fountains list stub → Astral Fountain overview. */
export default function AstralFountainRedirect() {
  redirect("/astfountoverview");
}
