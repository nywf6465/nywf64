import Link from "next/link";
import { LebanoNavChrome } from "@/components/LebanoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Lebanon menu topic landings. */
export function LebanoTopicStub({ title }: { title: string }) {
  return (
    <>
      <LebanoNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/lebanooverview" style={{ color: "#990000" }}>
            ← Lebanon overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Lebanon {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Lebanon content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/lebanooverview"
        overviewHref="/lebanooverview"
        nextHref="/lebano01"
      />
    </>
  );
}
