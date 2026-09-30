import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing Greg Buracker — nywf64.com",
  description: "Introducing Greg Buracker from People of the Fair at nywf64.com.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.25rem 3rem" }}>
      <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
        <Link href="/people">← People of the Fair</Link>
      </p>
      <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>Introducing Greg Buracker</h1>
      <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
        Placeholder page — full archive content will connect here.
      </p>
    </main>
  );
}
