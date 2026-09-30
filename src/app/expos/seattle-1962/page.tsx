import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Century 21 Exposition (Seattle 1962) — Expos — nywf64.com",
  description: "Century 21 Exposition (Seattle 1962) from Other Fairs & Expos at nywf64.com.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.25rem 3rem" }}>
      <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
        <Link href="/expos">← Other Fairs &amp; Expos</Link>
      </p>
      <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>Century 21 Exposition (Seattle 1962)</h1>
      <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
        Placeholder page — full archive content will connect here.
      </p>
    </main>
  );
}
