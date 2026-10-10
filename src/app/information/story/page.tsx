import { redirect } from "next/navigation";

/** Legacy stub path — The Story of the Fair lives at `/fair_story01`. */
export default function InformationStoryRedirect() {
  redirect("/fair_story01");
}
