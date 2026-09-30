import Link from "next/link";
import { KoreaNavChrome } from "@/components/KoreaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Korea menu topic landings. */
export function KoreaTopicStub({ title }: { title: string }) {
  return (
    <>
      <KoreaNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/koreaoverview" style={{ color: "#990000" }}>
            ← Korea, Republic of overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Korea {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Korea, Republic of content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/koreaoverview"
        overviewHref="/koreaoverview"
        nextHref="/korea01"
      />
    </>
  );
}
