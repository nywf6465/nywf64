import Link from "next/link";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for panamg / panama menu topic landings. */
export function PanamgTopicStub({ title }: { title: string }) {
  return (
    <>
      <PanamgNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/panamg01" style={{ color: "#990000" }}>
            ← Pan American Highway Gardens
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Pan American Highway Gardens content will
          connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/panamg01"
        nextHref="/panama01"
      />
    </>
  );
}
