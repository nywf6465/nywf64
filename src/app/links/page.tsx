import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Star } from "@/components/Star";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "Links — nywf64.com",
  description:
    "Links to New York World’s Fair websites and related resources curated by nywf64.com.",
};

type LinkItem = {
  href: string;
  title: ReactNode;
  description: string;
};

const SPECIFIC: LinkItem[] = [
  {
    href: "https://queensmuseum.org/exhibition/panorama-of-the-city-of-new-york/",
    title: (
      <>
        Queens Museum: <em>Panorama of the City of New York</em>
      </>
    ),
    description:
      "The amazing scale model of the City of New York built by Lester Associates for the New York City Pavilion at the 1964/1965 New York World's Fair.",
  },
  {
    href: "https://queensmuseum.org/exhibition/worlds-fair-collection/",
    title: (
      <>
        Queens Museum: <em>World's Fair Collections</em>
      </>
    ),
    description:
      "The Queens Museum has a wonderful collection of memorabilia on both the 1939-40 and 1964-65 World's Fair.",
  },
];

const RELATED: LinkItem[] = [
  {
    href: "https://www.worldsfairphotos.com/",
    title: "WorldsFairPhotos.com",
    description:
      "Bill Cotter's wonderful photographic collection from numerous World's Fairs are featured on this spectacular website.",
  },
  {
    href: "https://www.studylove.org/worldsfairs14.html#1964",
    title: "Jon Paul Sank's World's Fairs Page",
    description:
      "A very comprehensive page with links to numerous 1964/1965 related sites and pages.",
  },
  {
    href: "https://wdwnt.com/",
    title: (
      <>
        WDW <em>News Today</em>
      </>
    ),
    description:
      "Keep up with the latest news from the next best thing to the fair -- Walt Disney World(s).",
  },
];

const OTHER: LinkItem[] = [
  {
    href: "http://freedomlandusa.x10host.com/default.htm",
    title: "Freedomland USA",
    description:
      "On a 205 acre site in the Baychester section of the Bronx, the world's largest outdoor, family entertainment center - called Freedomland - whose purpose was to restage 200 years of the American heritage, from pioneering days to the wonders of the space age.",
  },
  {
    href: "https://www.youtube.com/watch?v=FPq9z8xlzw4",
    title:
      "YouTube video of the 1964/1965 New York World's Fair Model at Danland",
    description:
      "Created by model maker Robert Bianco, this huge model of the '64 Fair can be viewed online.",
  },
];

function LinkRow({ item }: { item: LinkItem }) {
  return (
    <li className={styles.row}>
      <a
        className={styles.iconLink}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-hidden="true"
        tabIndex={-1}
      >
        <Image
          src="/images/links/unisphere-button.jpg"
          alt=""
          width={50}
          height={50}
          className={styles.icon}
          unoptimized
        />
      </a>
      <a
        className={styles.titleLink}
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        {item.title}
      </a>
      <p className={styles.description}>{item.description}</p>
    </li>
  );
}

function LinkSection({
  heading,
  items,
}: {
  heading: ReactNode;
  items: LinkItem[];
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{heading}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <LinkRow key={`${item.href}-${index}`} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default function LinksPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article} aria-labelledby="links-title">
        <header className={styles.intro}>
          <p className={styles.kicker}>Links</p>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.rule} />
            <Star color="#26346e" size={13} />
            <span className={styles.rule} />
          </div>
          <h1 id="links-title" className={styles.title}>
            Websites of interest
          </h1>
        </header>

        <div className={styles.body}>
          <LinkSection
            heading={
              <>
                New York World&apos;s Fair <em>Specific</em> Websites
              </>
            }
            items={SPECIFIC}
          />
          <LinkSection
            heading={
              <>
                New York World&apos;s Fair <em>Related</em> Websites
              </>
            }
            items={RELATED}
          />
          <LinkSection heading="Other Websites of Interest" items={OTHER} />
        </div>

        <footer className={styles.signoff}>
          <p className={styles.siteLine}>
            <Link href="/" className={styles.inlineLink}>
              <span className={styles.brand}>
                <span className={styles.brandNavy}>nywf</span>
                <span className={styles.brandBurgundy}>64</span>
                <span className={styles.brandNavy}>.com</span>
              </span>
            </Link>
          </p>
          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com — New York World’s Fair 1964/1965"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </footer>
      </article>
    </main>
  );
}
