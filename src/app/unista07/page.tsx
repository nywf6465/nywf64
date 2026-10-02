import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "The United States Goes to the Fair — United States Pavilion — nywf64.com",
  description:
    "The United States Goes to the Fair at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <UnistaTopicStub title={"The United States Goes to the Fair"} />;
}
