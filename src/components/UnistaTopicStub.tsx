import Link from "next/link";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/**
 * Shared stub shell for unista menu topic landings.
 * Stack: nav bar (unista menu) → placeholder main → nav2.
 */
export function UnistaTopicStub({ title }: { title: string }) {
  return (
    <>
      <UnistaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/unista01" style={{ color: "#990000" }}>
            ← United States
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full United States Pavilion content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/unista01"
        nextHref="/unista01"
      />
    </>
  );
}
