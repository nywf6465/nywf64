import Link from "next/link";
import { MedphoNavChrome } from "@/components/MedphoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for Medo Photo Supply menu topic landings. */
export function MedphoTopicStub({ title }: { title: string }) {
  return (
    <>
      <MedphoNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/medphooverview" style={{ color: "#990000" }}>
            ← Medo Photo Supply overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          Medo Photo Supply {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Medo Photo Supply content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/medphooverview"
        overviewHref="/medphooverview"
        nextHref="/medpho01"
      />
    </>
  );
}
