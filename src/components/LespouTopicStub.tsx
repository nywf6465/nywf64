import Link from "next/link";
import { LespouNavChrome } from "@/components/LespouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Les Poupees de Paris menu topic landings. */
export function LespouTopicStub({ title }: { title: string }) {
  return (
    <>
      <LespouNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/lespou01" style={{ color: "#990000" }}>
            ← Les Poupees de Paris
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Les Poupees de Paris {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Les Poupees de Paris content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/lespou01"
        nextHref="/lespou01"
      />
    </>
  );
}
