import Link from "next/link";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for sprogfount menu topic landings.
 * Stack: nav bar (sprogfount menu) → placeholder main → nav2.
 */
export function SprogfountTopicStub({ title }: { title: string }) {
  return (
    <>
      <SprogfountNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/sprogfount01" style={{ color: "#990000" }}>
            ← Fountain of Progress South
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Fountain of Progress South content will
          connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/sprogfount01"
        nextHref="/sprogfount01"
      />
    </>
  );
}
