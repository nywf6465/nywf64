import Link from "next/link";
import { LouisiaNavChrome } from "@/components/LouisiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Louisiana menu topic landings. */
export function LouisiaTopicStub({ title }: { title: string }) {
  return (
    <>
      <LouisiaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/louisia01" style={{ color: "#990000" }}>
            ← Louisiana
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Louisiana {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Louisiana content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/louisia01"
        nextHref="/louisia01"
      />
    </>
  );
}
