import type { Metadata } from "next";
import { PavamiTopicStub } from "@/components/PavamiTopicStub";

export const metadata: Metadata = {
  title: 'Epilogue — Pavilion of American Interiors — nywf64.com',
  description:
    'Epilogue — Pavilion of American Interiors at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PavamiTopicStub title={'Epilogue'} />;
}
