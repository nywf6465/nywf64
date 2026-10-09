import Image from "next/image";
import Link from "next/link";
import styles from "./TopTenLinks.module.css";

/**
 * Top Ten links section (below guidebook banner, above footer).
 * Canonical Disney Shows format + rank/attendance line.
 * Pavilion = row image; link indicator = navy circle + white arrow.
 */
type Row = {
  id: string;
  href: string;
  title: string;
  body: string;
  rank: string;
  pavilionSrc: string;
  pavilionWidth: number;
  pavilionHeight: number;
  pavilionAlt: string;
};

const TOP_TEN: Row[] = [
  {
    id: "general-motors",
    href: "/gmguidebook",
    title: "General Motors & The Futurama",
    body: "In the Futurama, Fairgoers are taken on visits to the moon, to a year-round commercial harbor in the Antarctic, to an underwater resort and to a city of tomorrow.",
    rank: "No. 1 with 29,002,186 in attendance",
    pavilionSrc: "/images/top-ten/general-motors-pavilion.png",
    pavilionWidth: 764,
    pavilionHeight: 330,
    pavilionAlt: "General Motors",
  },
  {
    id: "vatican",
    href: "/vaticanguidebook",
    title: "The Vatican & The Pieta",
    body: 'The main exhibit is the Fair\'s most important work of art: the "Pieta," Michelangelo\'s 466-year-old masterpiece in Carrara marble.',
    rank: "No. 2 with 27,020,857 in attendance",
    pavilionSrc: "/images/top-ten/vatican-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Vatican",
  },
  {
    id: "new-york-state",
    href: "/newyorguidebook",
    title: "New York State & The Tent of Tomorrow",
    body: 'Above a huge "Tent of Tomorrow," housing state exhibits and shows, rise three towers, one of them an observation tower 226 feet high.',
    rank: "No. 3 with 24,707,204 in attendance",
    pavilionSrc: "/images/top-ten/new-york-state-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "New York State",
  },
  {
    id: "chrysler",
    href: "/chryslerguidebook",
    title: "Chrysler & The Autofare Islands",
    body: "This exhibit was designed especially for children, with a puppet show, a giant car, and other exhibits set on islands in a large man-made lake.",
    rank: "No. 4 with 24,707,204 in attendance",
    pavilionSrc: "/images/top-ten/chrysler-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Chrysler",
  },
  {
    id: "general-electric",
    href: "/geneleguidebook",
    title: "General Electric & The Carousel of Progress",
    body: "In a one-hour show, the changes electricity has brought in American living are dramatized by life-sized animated figures created by Walt Disney.",
    rank: "No. 5 with 15,697,408 in attendance",
    pavilionSrc: "/images/top-ten/general-electric-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "General Electric",
  },
  {
    id: "ford",
    href: "/ford01",
    title: "Ford & The Magic Skyway",
    body: "Animated displays and scale models depict man's progress from prehistoric times to the Space Age. Viewers ride past some of the exhibits in new Ford cars.",
    rank: "No. 6 with 14,908,983 in attendance",
    pavilionSrc: "/images/top-ten/ford-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Ford",
  },
  {
    id: "florida",
    href: "/floridaguidebook",
    title: "Florida & The Porpoise Show",
    body: "A giant orange on a tower tops displays of sunshine living, space tests at Cape Kennedy and a free, live-porpoise show.",
    rank: "No. 7 with 14,484,971 in attendance",
    pavilionSrc: "/images/top-ten/florida-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Florida",
  },
  {
    id: "bell-system",
    href: "/bell01",
    title: "Bell System & The Ride of Communications",
    body: "The history of communications, from smoke signal to satellites, is shown in a 15-minute ride.",
    rank: "No. 8 with 12,912,037 in attendance",
    pavilionSrc: "/images/top-ten/bell-system-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Bell System",
  },
  {
    id: "united-states",
    href: "/unista01",
    title: "United States & The Challenge to Greatness",
    body: 'The nation\'s past and its progress toward President Johnson\'s "Great Society" are outlined in many dramatic exhibits and a spectacular 15-minute film-ride.',
    rank: "No. 9 with 12,000,000 in attendance",
    pavilionSrc: "/images/top-ten/united-states-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "United States",
  },
  {
    id: "spain",
    href: "/spain01",
    title: "Spain & The Fair's Most Beautiful Pavilion",
    body: "In a striking modern pavilion, the atmosphere of old Spain forms a setting for great art, fine dining and entertainment.",
    rank: "No. 10 with 10,500,000 in attendance",
    pavilionSrc: "/images/top-ten/spain-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Spain",
  },
];

const FOUR_MORE: Row[] = [
  {
    id: "ibm",
    href: "/ibm01",
    title: "IBM & The People Wall",
    body: 'A moving 500-seat "People Wall" lifts visitors into an egg-shaped theater for a captivating multi-screen show.',
    rank: "No. 11 with 10,000,000 in attendance",
    pavilionSrc: "/images/top-ten/ibm-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "International Business Machines",
  },
  {
    id: "eastman-kodak",
    href: "/easkod01",
    title: "Eastman Kodak & The Picture Tower",
    body: 'Atop the pavilion are huge colored prints and a "moondeck" for picture-taking; inside are exhibits and an award-winning film.',
    rank: "No. 12 with 7,850,000 in attendance",
    pavilionSrc: "/images/top-ten/eastman-kodak-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Eastman Kodak",
  },
  {
    id: "du-pont",
    href: "/dupont01",
    title: "Du Pont & The Wonderful World of Chemistry",
    body: "A lively musical revue, new fashions and some startling demonstrations are devoted to progress in chemistry today.",
    rank: "No. 13 with 5,256,799 in attendance",
    pavilionSrc: "/images/top-ten/du-pont-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "DuPont",
  },
  {
    id: "johnsons-wax",
    href: "/johwax01",
    title: "Johnson Wax & To Be Alive!",
    body: '"To Be Alive," an 18-minute film that has been one of the Fair\'s great hits, depicts the joys of living shared by all people.',
    rank: "No. 14 with 5,050,000 in attendance",
    pavilionSrc: "/images/top-ten/johnsons-wax-pavilion.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Johnson Wax",
  },
];

function LinkIndicator() {
  return (
    <span className={styles.linkIndicator} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          d="M9.2 6.4 14.8 12 9.2 17.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function RowLink({ row }: { row: Row }) {
  return (
    <Link href={row.href} className={styles.row}>
      <span className={styles.pavilion}>
        <Image
          src={row.pavilionSrc}
          alt={row.pavilionAlt}
          width={row.pavilionWidth}
          height={row.pavilionHeight}
          className={styles.pavilionArt}
          unoptimized
        />
      </span>
      <span className={styles.body}>{row.body}</span>
      <span className={styles.title}>{row.title}</span>
      <span className={styles.rank}>{row.rank}</span>
      <LinkIndicator />
    </Link>
  );
}

export function TopTenLinks() {
  return (
    <section className={styles.section} aria-label="Top Ten Attractions links">
      <ul className={styles.list}>
        {TOP_TEN.map((row) => (
          <li key={row.id} className={styles.item}>
            <RowLink row={row} />
          </li>
        ))}
        <li className={styles.item} aria-hidden="false">
          <p className={styles.sectionBreak}>
            If your favorite wasn&apos;t in the Top Ten, here&apos;s four more!
          </p>
        </li>
        {FOUR_MORE.map((row) => (
          <li key={row.id} className={styles.item}>
            <RowLink row={row} />
          </li>
        ))}
      </ul>
      <p className={styles.source}>SOURCE: New York Times, October 18, 1965</p>
    </section>
  );
}
