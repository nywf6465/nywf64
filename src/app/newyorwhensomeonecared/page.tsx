import type { Metadata } from "next";
import { NewyorTopicStub } from "@/components/NewyorTopicStub";

export const metadata: Metadata = {
  title: "newyorwhensomeonecared — New York State Pavilion — nywf64.com",
  description:
    "newyorwhensomeonecared at the 1964/1965 New York World's Fair — New York State Pavilion on nywf64.com.",
};

export default function Page() {
  return <NewyorTopicStub title={"newyorwhensomeonecared"} />;
}
