import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Souvenir Cards from Optical Scanning Exhibit — IBM Pavilion — nywf64.com",
  description:
    "Souvenir Cards from Optical Scanning Exhibit at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"Souvenir Cards from Optical Scanning Exhibit"} />;
}
