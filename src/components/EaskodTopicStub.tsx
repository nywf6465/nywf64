import Link from "next/link";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for easkod menu topic landings.
 * Stack: nav bar (easkod menu) → placeholder main → nav2.
 */
export function EaskodTopicStub({ title }: { title: string }) {
  return (
    <>
      <EaskodNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/easkod01" style={{ color: "#990000" }}>
            ← Eastman Kodak
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Eastman Kodak Pavilion content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/easkod01"
        nextHref="/easkod01"
      />
    </>
  );
}
