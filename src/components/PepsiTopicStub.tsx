import Link from "next/link";
import { PepsiNavChrome } from "@/components/PepsiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for pepsi menu topic landings.
 * Stack: nav bar (pepsi menu) → placeholder main → nav2.
 */
export function PepsiTopicStub({ title }: { title: string }) {
  return (
    <>
      <PepsiNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/pepsioverview" style={{ color: "#990000" }}>
            ← Pepsi overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Pepsi-Cola Pavilion content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/pepsioverview"
        overviewHref="/pepsioverview"
        nextHref="/pepsi01"
      />
    </>
  );
}
