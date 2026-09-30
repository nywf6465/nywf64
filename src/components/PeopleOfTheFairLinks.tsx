import Image from "next/image";
import Link from "next/link";
import styles from "./PeopleOfTheFairLinks.module.css";

/** Exact user artwork — base unchanged. Hover crops swap burgundy↔navy on text/arrows only; portraits untouched. */
const PEOPLE = [
  {
    id: "robert-moses",
    title: "Could there have been a Fair without Robert Moses?",
    href: "/rm01",
    hoverSrc: "/images/people-hover/robert-moses.jpg",
    left: "0.889%",
    top: "1.073%",
    width: "48.697%",
    height: "18.884%",
  },
  {
    id: "greg-dawson",
    title: "Meet the late Greg Dawson",
    href: "/people/greg-dawson",
    hoverSrc: "/images/people-hover/greg-dawson.jpg",
    left: "50.355%",
    top: "1.073%",
    width: "48.756%",
    height: "18.884%",
  },
  {
    id: "albert-fisher",
    title: "Introducing Albert Fisher",
    href: "/fisher01",
    hoverSrc: "/images/people-hover/albert-fisher.jpg",
    left: "0.889%",
    top: "20.708%",
    width: "48.637%",
    height: "19.421%",
  },
  {
    id: "paul-lavalle",
    title: "Paul Lavalle",
    href: "/people/paul-lavalle",
    hoverSrc: "/images/people-hover/paul-lavalle.jpg",
    left: "50.355%",
    top: "20.708%",
    width: "48.756%",
    height: "19.421%",
  },
  {
    id: "david-oats",
    title: "The late David Oats",
    href: "/people/david-oats",
    hoverSrc: "/images/people-hover/david-oats.jpg",
    left: "0.889%",
    top: "40.880%",
    width: "48.637%",
    height: "19.206%",
  },
  {
    id: "rob-bianco",
    title: "Meet the late Rob Bianco",
    href: "/people/rob-bianco",
    hoverSrc: "/images/people-hover/rob-bianco.jpg",
    left: "50.355%",
    top: "40.880%",
    width: "48.697%",
    height: "19.206%",
  },
  {
    id: "bill-cotter",
    title: "Meet Bill Cotter",
    href: "/people/bill-cotter",
    hoverSrc: "/images/people-hover/bill-cotter.jpg",
    left: "0.889%",
    top: "60.730%",
    width: "48.637%",
    height: "18.670%",
  },
  {
    id: "bill-young",
    title: "Meet Bill Young",
    href: "/people/bill-young",
    hoverSrc: "/images/people-hover/bill-young.jpg",
    left: "50.355%",
    top: "60.730%",
    width: "48.697%",
    height: "18.670%",
  },
  {
    id: "greg-buracker",
    title: "Introducing Greg Buracker",
    href: "/people/greg-buracker",
    hoverSrc: "/images/people-hover/greg-buracker.jpg",
    left: "0.889%",
    top: "80.150%",
    width: "48.637%",
    height: "17.704%",
  },
] as const;

export function PeopleOfTheFairLinks() {
  return (
    <section
      className={styles.section}
      aria-label="People of the Fair links"
    >
      <div className={styles.frame}>
        <Image
          src="/images/people-of-the-fair-links.jpg"
          alt="People of the Fair: Could there have been a Fair without Robert Moses?; Meet the late Greg Dawson; Introducing Albert Fisher; Paul Lavalle; The late David Oats; Meet the late Rob Bianco; Meet Bill Cotter; Meet Bill Young; Introducing Greg Buracker."
          width={1688}
          height={932}
          sizes="100vw"
          className={styles.art}
          unoptimized
        />
        {PEOPLE.map((person) => (
          <Link
            key={person.id}
            href={person.href}
            className={styles.hotspot}
            style={{
              left: person.left,
              top: person.top,
              width: person.width,
              height: person.height,
            }}
            aria-label={person.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={person.hoverSrc}
              alt=""
              className={styles.hoverArt}
              draggable={false}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
