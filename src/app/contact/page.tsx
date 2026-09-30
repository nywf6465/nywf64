import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "@/components/Star";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact nywf64.com — 1964/65 New York World’s Fair",
  description:
    "How to contact Bill Young at nywf64.com about the 1964/1965 New York World’s Fair.",
};

function BrandName() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNavy}>nywf</span>
      <span className={styles.brandBurgundy}>64</span>
      <span className={styles.brandNavy}>.com</span>
    </span>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article} aria-labelledby="contact-title">
        <header className={styles.intro}>
          <p className={styles.kicker}>Contact</p>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.rule} />
            <Star color="#26346e" size={13} />
            <span className={styles.rule} />
          </div>
          <h1 id="contact-title" className={styles.title}>
            How to Contact this Website
          </h1>
        </header>

        <div className={styles.body}>
          <p className={styles.emailLabel}>Send emails to:</p>
          <p className={styles.email}>
            <a
              href="mailto:nywf6465@gmail.com?subject=www.nywf64.com%20Website"
            >
              nywf6465@gmail.com
            </a>
          </p>

          <p>
            Your webhost at <BrandName /> is <strong>Bill Young</strong>.
            I&apos;ve had an interest in the New York World&apos;s Fair for over
            50 years now. One would think that a time frame like that would
            make me an expert on the subject. <em>I wish!</em> You would be
            surprised at how much I&apos;ve learned from people who have
            contacted me. So, <em>PLEASE</em>, if you have a question or would
            like to share a bit of knowledge or offer some advice or a
            critique, I <span className={styles.welcome}>welcome</span> your
            communication! However ...
          </p>

          <p>
            <span className={styles.please}>Please</span>,{" "}
            <strong className={styles.warning}>
              DO NOT ask my opinion on the value of any souvenir that you might
              have
            </strong>
            . I am not an appraiser. I&apos;ve found that the best place to find
            an item&apos;s value is at eBay (
            <a href="https://www.ebay.com/" target="_blank" rel="noreferrer">
              www.ebay.com
            </a>
            ) because you will find there what others are truly willing to pay
            for a collectible from the Fair.
          </p>

          <p>
            <span className={styles.please}>Also</span>,{" "}
            <strong className={styles.warning}>
              DO NOT ask if I have information regarding individuals who might
              have performed in amateur groups at the Fair
            </strong>
            . I get many requests for information on siblings who were involved
            in various school groups that performed at the Fair. There were
            many, many school groups and bands that performed at the Fair in the
            two years it was open. I&apos;m sorry to say that I do not have any
            information regarding those performances. You might check the
            archives at the New York Public Library, as they are the repository
            for all of the records of the World&apos;s Fair Corporation and
            those records may contain the information you seek.
          </p>

          <p>
            I try to answer all eMail that I receive. Sometimes it can be a bit
            hectic and I get bogged down but I promise that I will try to get
            back to you as quickly as possible.
          </p>

          <p className={styles.closing}>
            <em>Welcome</em> <span className={styles.spaceAge}>to the Space Age!</span>
          </p>
        </div>

        <footer className={styles.signoff}>
          <p className={styles.signature}>
            <BrandName />
            <span className={styles.slash}> / </span>
            Bill Young
          </p>
          <div className={styles.logoWrap}>
            <Image
              src="/images/contact/logo6465.jpg"
              alt="nywf64.com"
              width={46}
              height={46}
              className={styles.logo}
              unoptimized
            />
          </div>
        </footer>
      </article>
    </main>
  );
}
