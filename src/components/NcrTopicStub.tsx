import Link from "next/link";
import { NcrNavChrome } from "@/components/NcrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for NCR menu topic landings. */
export function NcrTopicStub({ title }: { title: string }) {
  return (
    <>
      <NcrNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/ncroverview" style={{ color: "#990000" }}>
            ← NCR overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          NCR {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full NCR content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/ncroverview"
        overviewHref="/ncroverview"
        nextHref="/ncr01"
      />
    </>
  );
}
