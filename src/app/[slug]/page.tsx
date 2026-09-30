import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryHubs } from "@/lib/legacy";
import styles from "./hub.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categoryHubs.map((hub) => ({ slug: hub.legacyStem }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = categoryHubs.find((h) => h.legacyStem === slug);
  if (!hub) return { title: "nywf64.com" };
  return {
    title: `${hub.title} — nywf64.com`,
    description: `${hub.title} from the 1964/1965 New York World’s Fair archive.`,
  };
}

export default async function HubLandingPage({ params }: Props) {
  const { slug } = await params;
  const hub = categoryHubs.find((h) => h.legacyStem === slug);
  if (!hub) notFound();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.crumb}>
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <span>{hub.title}</span>
        </p>
        <h1 className={styles.title}>{hub.title}</h1>
        <p className={styles.lede}>
          Landing page for this section of the 1964/1965 New York World’s Fair
          archive. Full content will reconnect to the legacy materials.
        </p>
        <p className={styles.back}>
          <Link href="/#explore">← Back to Explore the Fair</Link>
        </p>
      </main>
    </div>
  );
}
