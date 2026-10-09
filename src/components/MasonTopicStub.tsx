import Link from "next/link";
import { MasonNavChrome } from "@/components/MasonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Masonic Center menu topic landings. */
export function MasonTopicStub({ title }: { title: string }) {
  return (
    <>
      <MasonNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/mason01" style={{ color: "#990000" }}>
            ← Masonic Center
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Masonic Center {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Masonic Center content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/mason01"
        nextHref="/mason01"
      />
    </>
  );
}
