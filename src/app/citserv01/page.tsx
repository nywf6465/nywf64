import type { Metadata } from "next";
import { CitservTopicStub } from "@/components/CitservTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Cities Service Band \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Cities Service World's Fair Band of America on nywf64.com.",
};

export default function Page() {
  return (
    <CitservTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
