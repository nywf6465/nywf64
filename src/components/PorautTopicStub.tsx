import Link from "next/link";
import { PorautNavChrome } from "@/components/PorautNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for poraut menu topic landings. */
export function PorautTopicStub({ title }: { title: string }) {
  return (
    <>
      <PorautNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/porautoverview" style={{ color: "#990000" }}>
            ← Port Authority Heliport overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Port Authority Heliport content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/porautoverview"
        overviewHref="/porautoverview"
        nextHref="/poraut01"
      />
    </>
  );
}
