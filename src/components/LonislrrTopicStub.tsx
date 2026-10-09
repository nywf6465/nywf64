import Link from "next/link";
import { LonislrrNavChrome } from "@/components/LonislrrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Long Island Rail Road menu topic landings. */
export function LonislrrTopicStub({ title }: { title: string }) {
  return (
    <>
      <LonislrrNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/lonislrroverview" style={{ color: "#990000" }}>
            ← Long Island Rail Road overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Long Island Rail Road {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Long Island Rail Road content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/lonislrroverview"
        overviewHref="/lonislrroverview"
        nextHref="/lonislrr01"
      />
    </>
  );
}
