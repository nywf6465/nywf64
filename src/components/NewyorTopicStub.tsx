import Link from "next/link";
import { NewyorNavChrome } from "@/components/NewyorNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for newyor menu topic landings.
 * Stack: nav bar (newyor menu) → placeholder main → nav2.
 */
export function NewyorTopicStub({ title }: { title: string }) {
  return (
    <>
      <NewyorNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/newyorguidebook" style={{ color: "#990000" }}>
            ← New York State
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full New York State Pavilion content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/newyorguidebook"
        nextHref="/newyor01"
      />
    </>
  );
}
