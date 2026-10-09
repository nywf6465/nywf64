import Image from "next/image";
import Link from "next/link";
import styles from "./ReligionsLinks.module.css";

/**
 * Religions links section (below guidebook banner, above footer).
 * Same layout/behavior as Disney Shows: icon left, italic title under icon,
 * description to the right, link indicator. Icons cropped from user links list.
 * Labels are exact guidebook wording — do not rename.
 */
const ROWS = [
  {
    id: "american-israel",
    href: "/amerisr01",
    title: "American-Israel",
    body: "In this spiral-shaped building, the visitor walks through the sights and sounds of 4,000 years of Jewish history.",
    pavilionSrc: "/images/religions/american-israel-icon.png",
    pavilionWidth: 764,
    pavilionHeight: 330,
    pavilionAlt: "American-Israel ",
  },
  {
    id: "billy-graham",
    href: "/bilgra01",
    title: "Billy Graham",
    body: "The famed evangelist's message is presented in a color film, and personal counseling is offered.",
    pavilionSrc: "/images/religions/billy-graham-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Billy Graham",
  },
  {
    id: "christian-science",
    href: "/chrsci01",
    title: "Christian Science",
    body: "Graphic exhibits explain the religion's teachings; there is also a reading room and park.",
    pavilionSrc: "/images/religions/christian-science-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Christian Science",
  },
  {
    id: "lithuanian-wayside-cross",
    href: "/litwaycro01",
    title: "Lithuanian Wayside Cross",
    body: "A carved wooden cross memorializes those who have given their lives in defense of Lithuanian freedom.",
    pavilionSrc: "/images/religions/lithuanian-wayside-cross-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Lithuanian Wayside Cross",
  },
  {
    id: "mormon-church",
    href: "/morchu01",
    title: "Mormon Church",
    body: "A film, dioramas and art works depict the Church's efforts to help man achieve happiness through harmony with God's law.",
    pavilionSrc: "/images/religions/mormon-church-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Mormon Church",
  },
  {
    id: "protestant-and-orthodox-center",
    href: "/proort01",
    title: "Protestant & Orthodox Center",
    body: "An allegorical film and religious exhibits and art works illustrate the theme 'Jesus Christ, the Light of the World.'",
    pavilionSrc: "/images/religions/protestant-and-orthodox-center-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Protestant & Orthodox Center",
  },
  {
    id: "russian-orthodox",
    href: "/rusort01",
    title: "Russian Orthodox Greek-Catholic Church of America",
    body: "A valuable jeweled icon is shown in a replica of a Russian chapel built in California in 1823.",
    pavilionSrc: "/images/religions/russian-orthodox-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Russian Orthodox Church",
  },
  {
    id: "sermons-from-science",
    href: "/sersci01",
    title: "Sermons from Science",
    body: "Demonstrations of scientific marvels and color films on nature illustrate the compatibility of faith with modern-day science.",
    pavilionSrc: "/images/religions/sermons-from-science-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Sermons from Science",
  },
  {
    id: "two-thousand-tribes",
    href: "/twotho01",
    title: "Two Thousand Tribes",
    body: "The ancient artifacts and modern progress of tribal groups around the world are shown in a large stylized aboriginal hut.",
    pavilionSrc: "/images/religions/two-thousand-tribes-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Two Thousand Tribes",
  },
  {
    id: "the-vatican",
    href: "/vaticanguidebook",
    title: "Vatican",
    body: "The main exhibit is the Fair's most important work of art: the 'Pieta,' Michelangelo's 466-year-old masterpiece in Carrara marble.",
    pavilionSrc: "/images/vatican/vatican-icon.png",
    pavilionWidth: 762,
    pavilionHeight: 330,
    pavilionAlt: "Vatican",
  },
] as const;

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

export function ReligionsLinks() {
  return (
    <section className={styles.section} aria-label="Religions links">
      <ul className={styles.list}>
        {ROWS.map((row) => (
          <li key={row.id} className={styles.item}>
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
              <LinkIndicator />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
