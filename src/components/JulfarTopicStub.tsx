import Link from "next/link";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for julfar menu topic landings. */
export function JulfarTopicStub({ title }: { title: string }) {
  return (
    <>
      <JulfarNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/julfar01" style={{ color: "#990000" }}>
            ← Julimar Farm
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          julfar {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Julimar Farm content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/julfar01"
        nextHref="/julfar01"
      />
    </>
  );
}
