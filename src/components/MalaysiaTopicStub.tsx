import Link from "next/link";
import { MalaysiaNavChrome } from "@/components/MalaysiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Malaysia menu topic landings. */
export function MalaysiaTopicStub({ title }: { title: string }) {
  return (
    <>
      <MalaysiaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/malaysia01" style={{ color: "#990000" }}>
            ← Malaysia
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Malaysia {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Malaysia content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/malaysia01"
        nextHref="/malaysia01"
      />
    </>
  );
}
