import Link from "next/link";
import { LakcruNavChrome } from "@/components/LakcruNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Lake Cruise menu topic landings. */
export function LakcruTopicStub({ title }: { title: string }) {
  return (
    <>
      <LakcruNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/lakcru01" style={{ color: "#990000" }}>
            ← Lake Cruise
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Lake Cruise {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Lake Cruise content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/lakcru01"
        nextHref="/lakcru01"
      />
    </>
  );
}
