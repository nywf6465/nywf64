import Link from "next/link";
import { IndiaNavChrome } from "@/components/IndiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for india menu topic landings. */
export function IndiaTopicStub({ title }: { title: string }) {
  return (
    <>
      <IndiaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/india01" style={{ color: "#990000" }}>
            ← India
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          India {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full India content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/india01"
        nextHref="/india01"
      />
    </>
  );
}
