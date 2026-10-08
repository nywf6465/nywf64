import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vatican09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Vatican — nywf64.com",
  description:
    "Epilogue — Vatican Pavilion attendance and distinguished visitors at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Vatican09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vatican09-title">
        <header className={styles.titleBar}>
          <h1 id="vatican09-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/vatican09/vat24.jpg"
              alt="Pavilion Guest Register with Pope Paul VI Signature"
              width={279}
              height={296}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              The Vatican Pavilion and its exhibit proved to be the second most
              popular attraction of the entire Fair. More than one out of two
              (52%) of all those who came to the Fair visited the Pavilion of
              the Vatican No other religious-sponsored pavilion or exhibit at
              the Fair attracted even one-fifth that number.
            </p>
            <p>Attendance at the Vatican Pavilion was recorded officially as follows:</p>
            <dl className={styles.attendanceList}>
              <dt>For the 1964 Fair season 13,823,037 guests</dt>
              <dt>For the 1965 Fair season 13,197,820 guests</dt>
            </dl>
            <p>
              TOTAL NUMBER OF VATICAN PAVILION GUEST DURING THE 1964-65 NEW
              YORK WORLD&apos;S FAIR:
            </p>
            <p className={styles.totalGuests}>27,020,857 guests</p>
            <p>
              His Holiness Pope Paul VI, 15 Cardinals, 1 Patriarch, 3 Apostolic
              Delegates, 5 Papal Nuncios, and 127 Archbishops and Bishops were
              among the ecclesiastical visitors to the Pavilion. Civilian guests
              included the Vice President of the United States, the Chief
              Justice and 4 other Justices of the United States Supreme Court, 4
              members of the Presiden&apos;ts Cabinet and the Governors of 17
              states. Foreign guests included the Presidents of 14 countries, 4
              Prime Ministers, 15 Foreign Ministers, and 123 other members of
              the Diplomatic Corps.
            </p>
            <p>
              The attendance peak for any one day at any pavilion or exhibit at
              the Fair was set by the Vatican Pavilion on October 17, 1965 - the
              final day of the Fair - when 183,716 visitors (an average of 225
              guest a minute for the 12-hour exhibit day) crowded its confines.
            </p>
            <p>
              During the last week of the Fair alone, 1,119,869 guest streamed
              through the doors of the Pavilion of the Vatican apparently
              determined not to have to chide themselves later for having
              failed to take advantage of the opportunity to view the exhibit.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/vatican08"
        overviewHref="/vaticanoverview"
        nextHref="/vatican10"
      />
    </>
  );
}
