import { redirect } from "next/navigation";

/** Legacy stub path — The End of the Fair lives at `/farewelloverview`. */
export default function InformationEndRedirect() {
  redirect("/farewelloverview");
}
