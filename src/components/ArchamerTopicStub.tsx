import Link from "next/link";
import { ArchamerNavChrome } from "@/components/ArchamerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for archamer menu topic landings. */
export function ArchamerTopicStub({ title }: { title: string }) {
  return (
    <>
      <ArchamerNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/archamer01" style={{ color: "#990000" }}>
            ← Arch of the Americas
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Arch of the Americas content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/archamer01"
        nextHref="/archamer01"
      />
    </>
  );
}
