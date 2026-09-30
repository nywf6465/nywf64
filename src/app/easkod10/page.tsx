import type { Metadata } from "next";
import { EaskodTopicStub } from "@/components/EaskodTopicStub";

export const metadata: Metadata = {
  title: "Article: The Kodak Pavilion — Eastman Kodak Pavilion — nywf64.com",
  description:
    "Article: The Kodak Pavilion at the 1964/1965 New York World's Fair — Eastman Kodak Pavilion on nywf64.com.",
};

export default function Page() {
  return <EaskodTopicStub title={"Article: The Kodak Pavilion"} />;
}
