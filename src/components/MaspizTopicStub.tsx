import Link from "next/link";
import { MaspizNavChrome } from "@/components/MaspizNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Mastro Pizza menu topic landings. */
export function MaspizTopicStub({ title }: { title: string }) {
  return (
    <>
      <MaspizNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/maspiz01" style={{ color: "#990000" }}>
            ← Mastro Pizza
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Mastro Pizza {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Mastro Pizza content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/maspiz01"
        nextHref="/maspiz01"
      />
    </>
  );
}
