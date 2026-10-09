import Link from "next/link";
import { NewyorcitNavChrome } from "@/components/NewyorcitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for New York City menu topic landings. */
export function NewyorcitTopicStub({ title }: { title: string }) {
  return (
    <>
      <NewyorcitNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/newyorcit01" style={{ color: "#990000" }}>
            ← New York City
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          New York City {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full New York City content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/newyorcit01"
        nextHref="/newyorcit01"
      />
    </>
  );
}
