import Link from "next/link";
import { BarbufNavChrome } from "@/components/BarbufNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for barbuf menu topic landings. */
export function BarbufTopicStub({ title }: { title: string }) {
  return (
    <>
      <BarbufNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/barbufoverview" style={{ color: "#990000" }}>
            ← Bar, Buffet and Cafeteria overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Bar, Buffet and Cafeteria content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/barbufoverview"
        overviewHref="/barbufoverview"
        nextHref="/barbuf01"
      />
    </>
  );
}
