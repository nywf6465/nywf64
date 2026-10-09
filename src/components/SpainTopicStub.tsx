import Link from "next/link";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for Spain menu topic landings.
 * Stack: nav bar (Spain menu) → placeholder main → nav2.
 */
export function SpainTopicStub({ title }: { title: string }) {
  return (
    <>
      <SpainNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/spain01" style={{ color: "#990000" }}>
            ← Spain
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Spain Pavilion content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/spain01"
        nextHref="/spain01"
      />
    </>
  );
}
