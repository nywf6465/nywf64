import Link from "next/link";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for nprogfount menu topic landings.
 * Stack: nav bar (nprogfount menu) → placeholder main → nav2.
 */
export function NprogfountTopicStub({ title }: { title: string }) {
  return (
    <>
      <NprogfountNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/nprogfount01" style={{ color: "#990000" }}>
            ← Fountain of Progress North
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Fountain of Progress North content will
          connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/nprogfount01"
        nextHref="/nprogfount01"
      />
    </>
  );
}
