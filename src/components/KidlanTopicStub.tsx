import Link from "next/link";
import { KidlanNavChrome } from "@/components/KidlanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for kidlan menu topic landings. */
export function KidlanTopicStub({ title }: { title: string }) {
  return (
    <>
      <KidlanNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/kidlanoverview" style={{ color: "#990000" }}>
            ← Kiddyland overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          kidlan {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Kiddyland content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/kidlanoverview"
        overviewHref="/kidlanoverview"
        nextHref="/kidlan01"
      />
    </>
  );
}
