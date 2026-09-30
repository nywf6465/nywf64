import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Unisphere — Explore the Fair — nywf64.com",
  description: "The Unisphere at the 1964/1965 New York World’s Fair — Explore the Fair on nywf64.com.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.25rem 3rem", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
        <Link href="/explore">← Explore the Fair</Link>
      </p>
      <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>The Unisphere</h1>
      <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
        Placeholder page — full destination content will connect here.
      </p>
    </main>
  );
}
