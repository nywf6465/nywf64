import type { Metadata } from "next";
import { CokeTopicStub } from "@/components/CokeTopicStub";

export const metadata: Metadata = {
  title:
    "Did you Know? — Coca-Cola — nywf64.com",
  description:
    "Did you Know? — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <CokeTopicStub
      title={"Did you Know?"}
    />
  );
}
