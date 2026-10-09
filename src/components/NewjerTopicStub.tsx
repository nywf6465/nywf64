import Link from "next/link";
import { NewjerNavChrome } from "@/components/NewjerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for New Jersey menu topic landings. */
export function NewjerTopicStub({ title }: { title: string }) {
  return (
    <>
      <NewjerNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/newjer01" style={{ color: "#990000" }}>
            ← New Jersey
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          New Jersey {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full New Jersey content will connect here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/newjer01"
        nextHref="/newjer01"
      />
    </>
  );
}
