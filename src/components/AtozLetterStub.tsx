import Link from "next/link";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

/** Shared stub shell for A-to-Z letter landings (`/A`…`/W`, no Q). */
export function AtozLetterStub({
  letter,
  rangeLabel,
}: {
  letter: string;
  rangeLabel: string;
}) {
  return (
    <>
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/atoz" style={{ color: "#990000" }}>
            ← The Attractions from A to Z
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          {letter}
        </h1>
        <p style={{ margin: "0.65rem 0 0", color: "#990000", fontWeight: 700 }}>
          {rangeLabel}
        </p>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full A-to-Z content for letter {letter} will connect
          here.
        </p>
      </main>
      <LetterPagesNav2 letter={letter} />
    </>
  );
}
