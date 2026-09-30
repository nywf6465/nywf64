import type { Metadata } from "next";
import { OklahomaTopicStub } from "@/components/OklahomaTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Oklahoma — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Oklahoma at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <OklahomaTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
