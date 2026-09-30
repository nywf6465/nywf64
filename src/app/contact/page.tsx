import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "@/components/Star";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — nywf64.com",
  description:
    "Contact Bill Young at nywf64.com with questions or comments about the 1964/1965 New York World’s Fair.",
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
            Get in touch
          </h1>
        </header>

        <div className={styles.body}>
          <p>
            I&apos;m Bill Young, the curator of{" "}
            <Link href="/" className={styles.inlineLink}>
              <BrandName />
            </Link>
            . For questions or comments about the site, please email{" "}
            <a
              className={styles.inlineLink}
              href="mailto:nywf6465@gmail.com?subject=nywf64.com"
            >
              nywf6465@gmail.com
            </a>
            . I welcome information or corrections that could improve the site.
          </p>

          <p>
            Please note that I cannot provide appraisals or estimates of the
            value of World&apos;s Fair memorabilia. For an indication of current
            market value, you may find it helpful to review recent sales of
            comparable items on{" "}
            <a
              className={styles.inlineLink}
              href="https://www.ebay.com/"
              target="_blank"
              rel="noreferrer"
            >
              eBay
            </a>
            .
          </p>

          <p>
            I read every message and will respond as soon as I can. Thank you
            for your interest in{" "}
            <Link href="/" className={styles.inlineLink}>
              <BrandName />
            </Link>
            .
          </p>
        </div>

        <footer className={styles.signoff}>
          <p className={styles.signature}>Bill Young</p>
          <p className={styles.siteLine}>
            <Link href="/" className={styles.inlineLink}>
              <BrandName />
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
