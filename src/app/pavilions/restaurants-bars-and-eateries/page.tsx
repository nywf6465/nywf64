import { redirect } from "next/navigation";

/** Legacy stub path → Restaurants, Bars & Eateries landing. */
export default function Page() {
  redirect("/pavilions/restaurants");
}
