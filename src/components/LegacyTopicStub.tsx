import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import { LegacyStubNav } from "@/components/LegacyStubNav";
import type { LegacyStubRoute } from "@/data/legacyStubRoutes";

/** Shared placeholder shell for collapsed legacy topic stub routes. */
export function LegacyTopicStub({ route }: { route: LegacyStubRoute }) {
  return (
    <>
      <LegacyStubNav name={route.nav} />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href={route.overviewHref} style={{ color: "#990000" }}>
            ← {route.overviewLabel}
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {route.title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full {route.placeholder} will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref={route.previousHref}
        overviewHref={route.overviewHref}
        nextHref={route.nextHref}
      />
    </>
  );
}
