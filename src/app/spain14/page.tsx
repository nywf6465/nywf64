import type { Metadata } from "next";
import { SpainTopicStub } from "@/components/SpainTopicStub";

export const metadata: Metadata = {
  title: "A Visit to the Spanish Pavilion in Saint Louis — Spain Pavilion — nywf64.com",
  description:
    "A Visit to the Spanish Pavilion in Saint Louis at the 1964/1965 New York World's Fair — Spain Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <SpainTopicStub title={"A Visit to the Spanish Pavilion in Saint Louis"} />;
}
