import type { Metadata } from "next";
import { ConinsTopicStub } from "@/components/ConinsTopicStub";

export const metadata: Metadata = {
  title:
    "Order Form: Cinema '76 Record Album — Continental Insurance — nywf64.com",
  description:
    "Order Form: Cinema '76 Record Album — Continental Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ConinsTopicStub
      title={"Order Form: Cinema '76 Record Album"}
    />
  );
}
