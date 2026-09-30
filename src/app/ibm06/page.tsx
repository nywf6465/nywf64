import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Press Release: From IBM (1965) — IBM Pavilion — nywf64.com",
  description:
    "Press Release: From IBM (1965) at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"Press Release: From IBM (1965)"} />;
}
