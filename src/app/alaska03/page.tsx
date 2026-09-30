import type { Metadata } from "next";
import { AlaskaTopicStub } from "@/components/AlaskaTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Alaska \u2014 nywf64.com",
  description:
    "Postcards \u2014 Alaska at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AlaskaTopicStub title={"Postcards"} />;
}
