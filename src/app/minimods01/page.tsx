import type { Metadata } from "next";
import Image from "next/image";
import { MinimodNavChrome } from "@/components/MinimodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./minimods01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Miniature Models of the Fair … by Bill Young — nywf64.com",
  description:
    "The Miniature Models of the Fair by Bill Young — rare miniature pavilion models from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const GALLERY: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/minimods01/minimod01.jpg",
    alt: "Protestant & Orthodox Center model",
    caption: "Protestant & Orthodox Center",
  },
  {
    src: "/images/minimods01/minimod02.jpg",
    alt: "Travelers Insurance and RCA models",
    caption: "Travelers Insurance, RCA",
  },
  {
    src: "/images/minimods01/minimod03.jpg",
    alt: "GM Rotunda, Uniroyal, and Heliport models",
    caption: "GM Rotunda (left), Uniroyal (center), Heliport",
  },
  {
    src: "/images/minimods01/minimod04.jpg",
    alt: "NCR, Continental Insurance, and World's Fair Pavilion models",
    caption:
      "NCR (upside-down left), Continental Insurance (center), World's Fair Pavilion",
  },
  {
    src: "/images/minimods01/minimod05.jpg",
    alt: "Ford, GM Main Pavilion, and Ford Rotunda models",
    caption:
      "Ford (left), GM Main Pavilion & duplicate Ford Rotunda — note the miniature tubes to be attached to the sides of Ford's Rotunda!",
  },
  {
    src: "/images/minimods01/minimod06.jpg",
    alt: "Gas Companies Pavilion model",
    caption: "Gas Companies Pavilion",
  },
  {
    src: "/images/minimods01/minimod07.jpg",
    alt: "Rheingold pavilion models with carousel",
    caption: "Rheingold (painted & unpainted) with Rheingold's Carousel",
  },
  {
    src: "/images/minimods01/minimod08.jpg",
    alt: "Johnson Wax Pavilion and Golden Rondelle models",
    caption: "Johnson Wax Pavilion (left) and Golden Rondelle",
  },
  {
    src: "/images/minimods01/minimod09.jpg",
    alt: "Formica and Seven-up models",
    caption: "Formica, Seven-up",
  },
  {
    src: "/images/minimods01/minimod10.jpg",
    alt: "Coca-Cola pavilion models",
    caption: "Coca-Cola (2 castings)",
  },
];

/**
 * Miniature Models of the Fair — continued.
 * Body from legacy minimods02.html (mapped to /minimods01 after overview).
 *
 * Stack: minihero → MinimodNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Minimods01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Miniature Models of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/minimod/minihero.jpg"
            alt="Miniature Models of the Fair — 1964/1965 New York World’s Fair"
            width={2172}
            height={724}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MinimodNavChrome />

      <article className={styles.article} aria-labelledby="minimods01-title">
        <header className={styles.titleBar}>
          <h1 id="minimods01-title" className={styles.titleBarMain}>
            <em>The Miniature Models of the Fair</em>
            {" … by Bill Young"}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.body}>
            I&apos;m a bona fide, die-hard model <em>nut</em>. Sitting in a box
            in my basement is the beginnings of the &apos;64 World&apos;s Fair
            constructed entirely out of paper! Well, not so impressive ...
            there&apos;s only a few pavilions completed. I jokingly refer to it
            as my &quot;retirement project.&quot; Imagine my surprise and
            delight when I was introduced to this World&apos;s Fair legacy find:
          </p>
          <p className={styles.body}>
            &quot;You like these sailor? No! You can&apos;t have them!&quot; So
            began Mike&apos;s email of a few weeks back. Mike is a fellow
            1964/1965 New York World&apos;s Fair collector and he knows of my
            affinity for models. He knew I&apos;d be interested in seeing these.
            There in the attachment to his note were the IBM and Kodak pavilions
            from the Fair in miniature. &quot;What the heck <em>are</em>{" "}
            those?&quot; I wondered aloud. They appeared to be very tiny models
            of those famous pavilions, all in white and quite primitive.
            None-the-less it was unmistakable what they were. A quick email
            exchange followed and I soon learn that these wonderful little gems
            belong to Doug.
          </p>

          <figure className={styles.figure}>
            <div className={styles.photoPair}>
              <Image
                src="/images/minimods01/minimod20.jpg"
                alt="IBM model"
                width={235}
                height={157}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/minimods01/minimod16.jpg"
                alt="Kodak model"
                width={235}
                height={157}
                className={styles.photo}
                unoptimized
              />
            </div>
            <figcaption className={styles.caption}>
              The original model scans Doug sent of the IBM (left) and Kodak
              Pavilions
            </figcaption>
          </figure>

          <p className={styles.body}>
            Meet P. Douglas Siebenaler, the lucky owner of these World&apos;s
            Fair treasures. He&apos;s an architect who can trace his livelihood
            back to a childhood interest in architecture and the Fair. Around
            1973 a friend of his father&apos;s, who knew of Doug&apos;s interest,
            was cleaning house and came across these old models he had saved.
            Doug believes this gentleman worked directly with a firm involved in
            the construction of the Fair. He was a draftsman with a background
            in graphic design. The boxes he presented to Doug contained 100 or
            more models and pieces of models from the 1964/1965 New York
            World&apos;s Fair!
          </p>
          <p className={styles.body}>
            Doug says &quot;The models, I was told, were used to lay-out the
            Fair. They are ivory color, solid and unpainted. To this day I have
            been unable to find out what they were actually used for and if they
            have any value. These models look like plastic castings and are at a
            very small scale -- probably 1/32nd or smaller. Some have very rough
            unfinished edges at the base.&quot; Doug doubts they were used or
            displayed due to their rustic nature.
          </p>
          <p className={styles.body}>
            &quot;Coke and a few others have two types of castings. Johnson Wax
            is marked #516 and 516-1. Most of the other models are also
            numerically marked. Could these markings be possible lot
            designations and/or building locations?&quot;
          </p>
          <p className={styles.body}>
            Doug photographed the models that accompany this story. To give some
            idea of size, he included a ruler in some of the photos. The Bell
            System Pavilion appears to be only four inches in length! With that
            pavilion being one of the largest at the Fair, the small size of the
            remainder of the pavilion models becomes evident.
          </p>
          <p className={styles.body}>
            The big question is naturally &quot;Where did they come from?&quot;
            They are much too small and primitive for the Official Model
            displayed in the American Express Pavilion and they are also too
            small in scale for the Model of the City of New York, hosted at the
            City Pavilion. The only other model that Mike and I know of are the
            small &quot;travelers&quot; that were built to be portable to
            numerous venues that would advertise the Fair. We sent Doug a scan
            of one of the traveling models and asked if he could judge by size
            comparisons if his models look like they might have come from
            something like that. He felt they were too <em>big</em> for the
            travelers.
          </p>
          <p className={styles.body}>
            So we posed the question to the astute members of the{" "}
            <a
              href="https://www.worldsfaircommunity.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.worldsfaircommunity.org
            </a>{" "}
            Bulletin Board and soon found our answer when a detailed photograph
            of the traveler model on display at the Queens Museum at Flushing
            Meadows in New York was posted. It is indeed a match to Doug&apos;s
            mini-models. It is believed that the model at the Queens Museum is
            the only traveling model still in existance, so Doug&apos;s models
            are indeed rarer then hen&apos;s teeth!
          </p>

          <figure className={styles.figureStack}>
            <div className={styles.stackPhotos}>
              <Image
                src="/images/minimods01/minimod39.jpg"
                alt="Placard for traveling Fair models"
                width={400}
                height={300}
                unoptimized
              />
              <Image
                src="/images/minimods01/minimod40.jpg"
                alt="Domed traveling Fair model"
                width={400}
                height={300}
                unoptimized
              />
              <Image
                src="/images/minimods01/minimod38.jpg"
                alt="Long view of traveling Fair model"
                width={400}
                height={300}
                unoptimized
              />
              <Image
                src="/images/minimods01/minimod41.jpg"
                alt="Close-up of traveling Fair model"
                width={400}
                height={300}
                unoptimized
              />
              <Image
                src="/images/minimods01/minimod42.jpg"
                alt="Close-up of traveling Fair model detail"
                width={400}
                height={300}
                unoptimized
              />
            </div>
            <figcaption className={styles.caption}>
              Doug&apos;s models match those of the seven miniature traveling
              models constructed by Lester Associates to advertise the Fair.
            </figcaption>
            <p className={styles.source}>
              © Above Photos Copyright 2002, Rod Smith
            </p>
          </figure>

          <p className={styles.body}>
            I asked Doug the obvious question: &quot;Are they for sale?&quot;
            and I got the obvious answer! He did mention there were duplicates
            of some and he might be willing to part with those. But I&apos;ve
            urged him to hang on to them. Although, with the prices of models
            trading on eBay today, he may be able to finance a small trip around
            the world or a 27 room mansion should he decide to auction them off!
            Let&apos;s hope he saves them for antiquity. What a wonderful legacy
            of the Fair.
          </p>
          <p className={styles.body}>
            Here are Doug&apos;s mini models of the 1964/1965 New York
            World&apos;s Fair...
          </p>

          <div className={styles.photoGrid}>
            {GALLERY.map((item) => (
              <figure key={item.src} className={styles.gridFigure}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={235}
                  height={157}
                  unoptimized
                />
                <figcaption className={styles.gridCaption}>
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/minimodsoverview"
        explicitPrevious
        overviewHref="/minimodsoverview"
        nextHref="/minimods02"
      />
    </>
  );
}
