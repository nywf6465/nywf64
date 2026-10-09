import Link from "next/link";
import { MainmallNavChrome } from "@/components/MainmallNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Main Mall menu topic landings. */
export function MainmallTopicStub({ title }: { title: string }) {
  return (
    <>
      <MainmallNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/mainmalloverview" style={{ color: "#990000" }}>
            ← Main Mall overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Main Mall {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Main Mall content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/mainmalloverview"
        overviewHref="/mainmalloverview"
        nextHref="/mainmall01"
      />
    </>
  );
}
