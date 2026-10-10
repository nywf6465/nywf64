import { redirect } from "next/navigation";

/** Legacy stub path — Building the Fair lives at `/buildingoverview`. */
export default function InformationBuildingRedirect() {
  redirect("/buildingoverview");
}
