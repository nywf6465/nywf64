import type { Metadata } from "next";
import { OklahomaTopicStub } from "@/components/OklahomaTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Oklahoma — nywf64.com",
  description:
    "Gallery of Photographs — Oklahoma at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <OklahomaTopicStub title={"Gallery of Photographs"} />;
}
