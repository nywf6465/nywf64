import type { Metadata } from "next";
import { JohwaxTopicStub } from "@/components/JohwaxTopicStub";

export const metadata: Metadata = {
  title: "Souvenir Question & Answer Card \u2014 Johnson Wax Pavilion \u2014 nywf64.com",
  description:
    "Souvenir Question & Answer Card at the 1964/1965 New York World's Fair \u2014 Johnson Wax Pavilion on nywf64.com.",
};

export default function Page() {
  return <JohwaxTopicStub title={"Souvenir Question & Answer Card"} />;
}
