import Link from "next/link";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for aertow menu topic landings. */
export function AertowTopicStub({ title }: { title: string }) {
  return (
    <>
      <AertowNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/aertow01" style={{ color: "#990000" }}>
            ← Aerial Tower Ride
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Aerial Tower Ride content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/aertow01"
        nextHref="/aertow01"
      />
    </>
  );
}
