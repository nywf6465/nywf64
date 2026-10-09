import Link from "next/link";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for solfount menu topic landings. */
export function SolfountTopicStub({ title }: { title: string }) {
  return (
    <>
      <SolfountNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/solfount01" style={{ color: "#990000" }}>
            ← Solar Fountain
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Solar Fountain content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/solfount01"
        nextHref="/solfount01"
      />
    </>
  );
}
