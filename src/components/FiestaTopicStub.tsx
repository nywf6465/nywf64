import Link from "next/link";
import { FiestaNavChrome } from "@/components/FiestaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for fiesta menu topic landings. */
export function FiestaTopicStub({ title }: { title: string }) {
  return (
    <>
      <FiestaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/fiesta01" style={{ color: "#990000" }}>
            ← Fiesta
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Fiesta content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/fiesta01"
        nextHref="/fiesta01"
      />
    </>
  );
}
