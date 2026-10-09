import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./explore.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Explore the Fair — nywf64.com",
  description:
    "Explore the 1964/1965 New York World’s Fair — popular destinations, fair areas, and interactive maps.",
};

/** Transparent hotspots over exact explore-page.jpg — do not rebuild as HTML. */
const HOTSPOTS = [
  // 8 “What do you want to see?” cards
  {
    id: "unisphere",
    label: "THE UNISPHERE",
    href: "/unisph01",
    left: "1.367%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "gms-futurama",
    label: "GM'S FUTURAMA",
    href: "/gmguidebook",
    left: "13.623%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "the-pieta",
    label: "THE PIETÀ",
    href: "/vaticanguidebook",
    left: "25.879%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "ny-state-pavilion",
    label: "NY STATE PAVILION",
    href: "/newyorguidebook",
    left: "38.135%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "carousel-of-progress",
    label: "THE CAROUSEL OF PROGRESS",
    href: "/geneleguidebook",
    left: "50.391%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "bell-system-pavilion",
    label: "THE BELL SYSTEM PAVILION",
    href: "/bell01",
    left: "62.646%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "florida-live-porpoise-show",
    label: "THE FLORIDA LIVE PORPOISE SHOW",
    href: "/floridaguidebook",
    left: "74.902%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  {
    id: "ibm-people-wall",
    label: "THE IBM PEOPLE WALL",
    href: "/ibm01",
    left: "87.158%",
    top: "39.062%",
    width: "11.475%",
    height: "13.672%",
  },
  // 4 area columns → existing pavilion stubs
  {
    id: "american-industries",
    label: "AMERICAN INDUSTRIES",
    href: "/pavilions/exhibits-of-american-industry",
    left: "1.074%",
    top: "54.362%",
    width: "24.023%",
    height: "27.995%",
  },
  {
    id: "international-participants",
    label: "INTERNATIONAL PARTICIPANTS",
    href: "/pavilions/exhibits-of-international-participants",
    left: "25.684%",
    top: "54.362%",
    width: "24.023%",
    height: "27.995%",
  },
  {
    id: "federal-states",
    label: "FEDERAL & STATES",
    href: "/pavilions/federal-and-state-exhibits",
    left: "50.293%",
    top: "54.362%",
    width: "24.023%",
    height: "27.995%",
  },
  {
    id: "amusements",
    label: "AMUSEMENTS",
    href: "/pavilions/entertainment-amusements-and-rides",
    left: "74.902%",
    top: "54.362%",
    width: "24.023%",
    height: "27.995%",
  },
  // START EXPLORING → Interactive Maps
  {
    id: "start-exploring",
    label: "START EXPLORING — Interactive Maps & Photos",
    href: "/maps",
    left: "71.777%",
    top: "94.466%",
    width: "25.098%",
    height: "5.143%",
  },
] as const;

/** Landing: header (layout) → exact full-page explore art → footer (layout). */
export default function ExplorePage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Explore the Fair">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/explore-page.jpg"
            alt="Explore the Fair — What do you want to see? Where would you like to go next? Start exploring on Interactive Maps & Photos."
            width={1024}
            height={1536}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
          {HOTSPOTS.map((spot) => (
            <Link
              key={spot.id}
              href={spot.href}
              className={styles.hotspot}
              style={{
                left: spot.left,
                top: spot.top,
                width: spot.width,
                height: spot.height,
              }}
              aria-label={spot.label}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
