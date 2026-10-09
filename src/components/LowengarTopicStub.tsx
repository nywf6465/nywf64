import Link from "next/link";
import { LowengarNavChrome } from "@/components/LowengarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Lowenbrau Gardens menu topic landings. */
export function LowengarTopicStub({ title }: { title: string }) {
  return (
    <>
      <LowengarNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/lowengar01" style={{ color: "#990000" }}>
            ← Lowenbrau Gardens
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Lowenbrau Gardens {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Lowenbrau Gardens content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/lowengar01"
        nextHref="/lowengar01"
      />
    </>
  );
}
