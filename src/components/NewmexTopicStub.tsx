import Link from "next/link";
import { NewmexNavChrome } from "@/components/NewmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for New Mexico menu topic landings. */
export function NewmexTopicStub({ title }: { title: string }) {
  return (
    <>
      <NewmexNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/newmexoverview" style={{ color: "#990000" }}>
            ← New Mexico overview
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          New Mexico {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full New Mexico content will connect here.
        </p>
      </main>
      <Nav2Bar
        previousHref="/newmexoverview"
        overviewHref="/newmexoverview"
        nextHref="/newmex01"
      />
    </>
  );
}
