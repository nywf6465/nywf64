import Link from "next/link";
import { MissouriNavChrome } from "@/components/MissouriNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Missouri menu topic landings. */
export function MissouriTopicStub({ title }: { title: string }) {
  return (
    <>
      <MissouriNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/missourioverview" style={{ color: "#990000" }}>
            ← Missouri overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Missouri {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Missouri content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/missourioverview"
        overviewHref="/missourioverview"
        nextHref="/missouri01"
      />
    </>
  );
}
