import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Model Unveiling — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland model unveiling pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — Pamphlet: Model Unveiling.
 * Body from legacy sinclair07.html.
 */
export default function Sinclair07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sinclair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sinclairoverview/hero-banner.jpg"
            alt="Sinclair Dinoland at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SinclairNavChrome />

      <article className={styles.article} aria-labelledby="sinclair07-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair07-title" className={styles.titleBarMain}>
            Pamphlet: Model Unveiling
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 276 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair07/sincla14.jpg"
                alt="Pamphlet: Model Unveiling"
                width={276}
                height={253}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>MODEL UNVEILING AT THE</h2>
            <h2 className={styles.heading}>NEW YORK WORLD'S FAIR 1964-1965</h2>
            <p><em>Robert Moses, president of the Fair, Dr. Barnum Brown, Curator Emeritus of the American Museum of Natural History, and Edward L. Steiniger, president and chief executive officer of Sinclair Oil Corporation, at a luncheon given to commemorate the public unveiling of Sinclair's Dinoland exhibit model.</em></p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 291 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair07/sincla13.jpg"
                alt="Sinclair Dinoland"
                width={291}
                height={213}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Remarks by Reynolds Girdler, vice president Sinclair Oil Corporation, on the occasion of the public unveiling of the company's Dinoland exhibit model, New York World's Fair site, Tuesday, August 14, 1962.</p>
            <p>REYNOLDS GIRDLER: There will be no formal speeches. We would like to call your attention at this moment to our scientific display, including a dinosaur egg found in the Gobi desert and part of a claw from a Tyrannosaurus Rex -- each of them good for at least an hour-and-a-half lecture by Dr. Brown. Of course none of you needs to be introduced to Mr. Moses, the president of the Fair. Next to him are Mr. Edward L. Steiniger, president of Sinclair Oil Corporation, Mr. Louis Paul Jonas, the sculptor who is actually re-creating these monsters, and Dr. Barnum Brown, Curator Emeritus of the American Museum of Natural History. If there are any questions that any of you want to ask, we are all here to answer. Mr. Moses, you have been asked to make a general statement about this exhibit.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 495 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair07/sincla15.jpg"
                alt="Sinclair Dinoland"
                width={495}
                height={287}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>ROBERT MOSES: We are very glad that you are here. I don't profess to have any great knowledge of geology and the other sciences represented here. I was, for my sins, a member of the Board of the American Museum representing the City of New York, not freely chosen by the Board but there perforce, for -- I don't know -- it seems to me something like twenty-seven years, and in that long time even the dullest mind learns something. So I have picked up a little information along these lines.</p>
            <p>In contrast to your exhibit portraying the origins of oil and earth's denizens eons ago, General Motors and Ford, and I understand, will delve into the future and transportation's part in it. These things make a tremendous impression not only on adults but, I don't need to tell you, on children. As proof, we got hold of some of these green rubber dinosaur characters here but we ran out of them very quickly. There has been a great demand for them at the</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 285 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair07/sincla16.jpg"
                alt="Sinclair Dinoland"
                width={285}
                height={325}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>beaches here and all over the United States. Well, it is a wonderful symbol.</p>
            <p>As you probably know, when you talk to some of us, you are talking to people who have spent a large part of their lives on transportation and all that goes with it. Perhaps we are rubber rather than rail people. We make no apology for that either, but certainly companies like Sinclair are the ones we have had to look to, to solve the transportation problems of the United States. For a long time the people who made automobile parts, the people who supplied the wheels and the rubber, and the people who supplied the gasoline and oil were not particularly interested in road problems. The manufacturers of cars, for certainly 25 or 30 years, took the view that they did not much care what happened to a car after it came off the assembly line. They were interested in manufacturing cars and somehow it was somebody else's job to see that there were roads for them to run on. Some of us spent a considerable time and effort getting them in a mood to do something to help us build roads. Now, since then, that has been done and the people who use the roads are paying for them. They are the people who are taxed. They are the people who pay for gas taxes and license plates and all that sort of thing.</p>
            <p>We are hopeful that everything will be done here in this Fair, not only to promote the interest of the companies that are doing this work, but to promote transportation mobility. To achieve these ends, exhibits must be graphic, they must be interesting, they must be ingenious, they must be imaginative; otherwise they are no good. I think you have a wonderful exhibit here which will accomplish precisely these results.</p>
            <p><em>Life-sized reproduction of the biggest land animal that ever lived, the 20-ton, 75-foot long Brontosaurus, now under construction for the Sinclair Refining Company exhibit at the Fair.</em></p>
            <p><em>The 25-foot Stegosaurus, near completion, will be a part of the Dinoland exhibit at the New York World's Fair.</em></p>
            <p className={styles.source}>SOURCE: NY World's Fair Corporation, Model Unveiling brochure</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair06"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair08"
      />
    </>
  );
}
