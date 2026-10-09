import Link from "next/link";
import { HertzNavChrome } from "@/components/HertzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

/** Shared stub shell for hertz menu topic landings. */
export function HertzTopicStub({ title }: { title: string }) {
  return (
    <>
      <HertzNavChrome />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/hertz01" style={{ color: "#990000" }}>
            ← Hertz Travel Center
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {title}
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full Hertz Travel Center content will connect
          here.
        </p>
      </main>
      <Nav2Bar
        overviewHref="/hertz01"
        nextHref="/hertz01"
      />
    </>
  );
}
