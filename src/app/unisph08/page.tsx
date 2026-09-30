import type { Metadata } from "next";
import { UnisphTopicStub } from "@/components/UnisphTopicStub";

export const metadata: Metadata = {
  title: "Filmstrip: UNISPHERE Biggest World on Earth — Unisphere — nywf64.com",
  description:
    "Filmstrip: UNISPHERE Biggest World on Earth at the 1964/1965 New York World's Fair — Unisphere on nywf64.com.",
};

export default function Page() {
  return <UnisphTopicStub title={"Filmstrip: UNISPHERE Biggest World on Earth"} />;
}
