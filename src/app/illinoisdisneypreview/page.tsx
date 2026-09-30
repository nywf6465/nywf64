import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "Article: Preview of Disney's World's Fair Shows — Illinois Pavilion — nywf64.com",
  description: "Article: Preview of Disney's World's Fair Shows at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export default function Page() {
  return <IllinoisTopicStub title={"Article: Preview of Disney's World's Fair Shows"} />;
}
