import Link from "next/link";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for ireland menu topic landings. */
export function IrelandTopicStub({ title }: { title: string }) {
  return (
    <>
      <IrelandNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/ireland01" style={{ color: "#990000" }}>
            ← Ireland
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Ireland {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Ireland content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/ireland01"
        nextHref="/ireland01"
      />
    </>
  );
}
