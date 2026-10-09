import Link from "next/link";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for johwax menu topic landings.
 * Stack: nav bar (johwax menu) → placeholder main → nav2.
 */
export function JohwaxTopicStub({ title }: { title: string }) {
  return (
    <>
      <JohwaxNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/johwax01" style={{ color: "#990000" }}>
            ← Johnson Wax
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Johnson Wax Pavilion content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/johwax01"
        nextHref="/johwax01"
      />
    </>
  );
}
