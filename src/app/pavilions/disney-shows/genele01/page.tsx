import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'General Electric — "Carousel of Progress" — The Disney Shows — nywf64.com',
  description:
    'General Electric — "Carousel of Progress" at the 1964/1965 New York World’s Fair — The Disney Shows on nywf64.com.',
};

export default function Page() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "2.5rem 1.25rem 3rem",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
        <Link href="/pavilions/disney-shows" style={{ color: "#990000" }}>
          ← The Disney Shows
        </Link>
      </p>
      <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
        General Electric — &ldquo;Carousel of Progress&rdquo;
      </h1>
      <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
        Placeholder page — full pavilion content will connect here.
      </p>
    </main>
  );
}
