import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "A Tribute to Rob Bianco — American Express — nywf64.com",
  description:
    "A tribute to Rob Bianco, master model builder of the 1964/1965 New York World’s Fair — American Express pavilion story on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * American Express — A Tribute to Rob Bianco feature page.
 * Body from legacy amex11.html.
 * Stack: hero → AmexNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Amex11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <article className={styles.article} aria-labelledby="amex11-title">
        <header className={styles.titleBar}>
          <h1 id="amex11-title" className={styles.titleBarMain}>
            A Tribute to Rob Bianco
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.ledePortrait}>
            <Image
              src="/images/amex11/amex57.jpg"
              alt="Rob Bianco"
              width={299}
              height={400}
              unoptimized
            />
          </div>

          <div className={styles.body}>
            <p className={styles.openQuestion}>
              How does one begin to pay tribute to a remarkable man?
            </p>
            <p>
              Rob Bianco was, without question, a remarkable man. I knew him as a
              fellow New York World&apos;s Fair historian. Yet he wasn&apos;t a
              historian in the conventional sense. A historian is someone who
              interprets historical evidence and constructs a narrative that helps
              others understand the past. Rob certainly did that but the narrative
              he created was physical rather than written. Rob was a master model
              builder whose specialty was recreating the pavilions of the
              1964–1965 New York World&apos;s Fair.
            </p>
            <p>
              Rob was an artist, and his models stand as lasting proof of that
              fact. He created six models for me: the Unisphere, the Johnson Wax
              Pavilion, the Bell System Pavilion, the Ford Pavilion, the New York
              State Pavilion, and a modified U.S. Royal Toy Ferris Wheel. Every
              one of them is extraordinary. His attention to detail was unmatched,
              and each model is a genuine work of art.
            </p>
          </div>

          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex61.jpg"
              alt="U.S. Royal Toy Ferris Wheel model"
              width={228}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex62.jpg"
              alt="Johnson Wax Pavilion model"
              width={266}
              height={200}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            My US Royal Toy Ferris Wheel and Johnson Wax Pavilion model
          </p>

          <div className={styles.body}>
            <p>
              It saddens me to know that the IBM Pavilion and the Tower of the
              Four Winds from the Pepsi-Cola Pavilion, which I had on order with
              him (Rob always had a waiting list), will never be completed. The
              World&apos;s Fair community has lost someone truly special—a man
              with the rare ability to bring the Fair back to life in miniature.
            </p>
            <p>
              Rob&apos;s story began in 1950 in the Long Island community of
              Elmont. In an interview, he recalled living only about fifteen
              minutes from the Fairgrounds and estimated that he visited the Fair
              some thirty times. He was about fourteen years old at the time. His
              favorite pavilion was the New York State Pavilion, where he loved
              riding the Sky Streak elevator to the observation deck to look out
              over the Fair.
            </p>
            <p>
              Then came a chance visit that would shape the course of his life.
              One day, Rob wandered into the American Express Pavilion, where the
              Fair&apos;s official scale model was on display. He later said he
              was awestruck. It was unlike anything he had ever seen. He left the
              Fair that day determined to create his own model of the World&apos;s
              Fair.
            </p>
            <p>
              As Rob explained, &quot;Several thoughts about this project
              fascinated me. First, I would build something that no one else had
              or could buy. Second, I loved the World&apos;s Fair, and this would
              be an opportunity to bring the Fair home, to relive my memories many
              times over.&quot;
            </p>
          </div>

          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex53.jpg"
              alt="14-year-old Rob with his World's Fair Model"
              width={209}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex54.jpg"
              alt="American Express magazine article photos"
              width={392}
              height={200}
              unoptimized
            />
          </div>
          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex55.jpg"
              alt="American Express magazine article photos"
              width={392}
              height={200}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            Top: 14-year-old Rob with his World&apos;s Fair Model. Bottom: Photos
            from the American Express magazine article.
          </p>

          <div className={styles.body}>
            <p>
              His earliest models were built from wood, clay, and paper, but he
              soon realized those materials were poorly suited for the
              illumination he envisioned. After discovering styrene plastic and
              cardstock, he found the perfect medium for his craft. From that
              point forward, those materials became the foundation of the
              remarkable models for which he would become known.
            </p>
            <p>
              The Fair closed, and life moved on for Rob. He began a career in
              nursing home administration, a profession that he remained in until
              his retirement. In 1975, he married his soulmate, Shelley, and
              together they shared more than fifty years of happiness, raising two
              children. Faith was an important part of their lives. One thing that
              never changed, however, was Rob&apos;s love of model building. As
              the years passed, he continually refined his skills, becoming one of
              the finest model builders in the World&apos;s Fair community.
            </p>
            <p>
              I had known of Rob since 1972, when I began collecting memorabilia
              from the Fair. I came across an issue of Going Places, the magazine
              published by American Express, which featured an article about him.
              After American Express learned of Rob&apos;s passion for the Fair
              and his ambitious modeling project, they published the story in
              their magazine. The article was later picked up by the Associated
              Press and distributed nationwide. It even caught the attention of
              Robert Moses, who sent Rob a personal letter of congratulations.
            </p>
          </div>

          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex52.jpg"
              alt="Rob's letter from Robert Moses"
              width={230}
              height={300}
              unoptimized
            />
          </div>
          <p className={styles.caption}>Rob&apos;s letter from Robert Moses</p>

          <div className={styles.body}>
            <p>
              I finally connected with Rob in 2001 after a fellow World&apos;s
              Fair enthusiast sent me a copy of the article and explained how I
              could reach him. That was when I learned he was still building
              models. I offered him the opportunity to showcase his work on the{" "}
              <BrandMark /> website, and what followed was a steady stream of
              requests for his custom-built models that kept him busy for many
              years.
            </p>
          </div>

          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex56.jpg"
              alt="Rob's nationally syndicated news story"
              width={271}
              height={300}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            Rob&apos;s nationally syndicated news story
          </p>

          <div className={styles.body}>
            <p>
              Recently, I became acquainted with a new World&apos;s Fair
              historian, Greg Buracker. Like me, Greg never attended the Fair—he
              is only thirty-two years old—yet he finds the exposition every bit
              as fascinating. Through this website, Greg reached out to Rob and
              commissioned models of the General Electric Pavilion and
              Sinclair&apos;s Dinoland.
            </p>
          </div>

          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex59.jpg"
              alt="Greg Buracker with his General Electric Pavilion model by Rob"
              width={205}
              height={250}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            Greg Buracker with his General Electric Pavilion model by Rob.
          </p>

          <div className={styles.body}>
            <p>
              A film editor and filmmaker by profession, Greg found Rob&apos;s
              passion for the World&apos;s Fair and his extraordinary
              model-making skills to be the perfect subject for a documentary
              exploring the passions that inspire people. He is currently
              producing the film, and Rob and his remarkable work will be
              prominently featured.
            </p>
            <p>
              There is something especially fitting about that. Rob devoted
              decades to preserving the memory of the 1964–1965 New York
              World&apos;s Fair in miniature. Now, through Greg&apos;s
              documentary, Rob&apos;s own story—and the passion that drove
              him—will itself be preserved for future generations. It is
              comforting to know that, just as his models will endure, so too will
              the story of the remarkable man who created them.
            </p>
            <p>
              For Rob, model building was never simply about constructing
              miniature buildings. It was about preserving memories, capturing
              history, and allowing others to experience the wonder of the
              1964–1965 New York World&apos;s Fair long after the gates had
              closed. Through his artistry, he ensured that a small piece of that
              remarkable event would continue to inspire generations of
              World&apos;s Fair enthusiasts.
            </p>
          </div>

          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex60.jpg"
              alt="Rob with models of the Unisphere and the Trylon & Perisphere"
              width={368}
              height={300}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            Rob with models of the Unisphere and the Trylon &amp; Perisphere
          </p>

          <div className={styles.body}>
            <p>
              That is Rob Bianco&apos;s legacy. His models will continue to tell
              the story of the Fair, just as he intended, and those of us
              fortunate enough to own his work will treasure not only the models
              themselves, but also the remarkable man who created them.
            </p>
          </div>

          <div className={styles.signoff}>
            <p>Bill Young</p>
            <p>Greg Buracker</p>
            <p>July 2026</p>
          </div>

          <p className={styles.storyLink}>
            <Link href="/amex10">CLICK HERE</Link> to read Rob&apos;s Full Story
            on the <BrandMark /> website,
          </p>

          <div className={`${styles.singleFigure} ${styles.photoRowBorderless}`}>
            <Image
              src="/images/amex11/amex49.jpg"
              alt=""
              width={301}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>Unisphere</p>
          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex63.jpg"
              alt="Unisphere model"
              width={268}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>
            The Bell System and Travelers Insurance Pavilions
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex64.jpg"
              alt="Bell System Pavilion model"
              width={384}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex65.jpg"
              alt="Travelers Insurance Pavilion model"
              width={322}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>
            The Vatican Pavilion, the Tower of Light and the Port Authority
            Heliport
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex66.jpg"
              alt="Vatican Pavilion model"
              width={265}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex68.jpg"
              alt="Tower of Light model"
              width={246}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex67.jpg"
              alt="Port Authority Heliport model"
              width={267}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>
            The General Electric and New York City Pavilions
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex69.jpg"
              alt="General Electric Pavilion model"
              width={283}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex70.jpg"
              alt="New York City Pavilion model"
              width={515}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>
            The Wisconsin, Pepsi-Cola and New York State Pavilions
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex71.jpg"
              alt="Wisconsin Pavilion model"
              width={304}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex72.jpg"
              alt="Pepsi-Cola Pavilion model"
              width={173}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex73.jpg"
              alt="New York State Pavilion model"
              width={267}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>
            The General Motors and Ford Pavilions
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex74.jpg"
              alt="General Motors Pavilion model"
              width={307}
              height={200}
              unoptimized
            />
            <Image
              src="/images/amex11/amex75.jpg"
              alt="Ford Pavilion model"
              width={532}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.galleryHeading}>Chrysler&apos;s autofare Island</p>
          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex76.jpg"
              alt="Chrysler's Autofare Island model"
              width={269}
              height={200}
              unoptimized
            />
          </div>

          <p className={styles.youtubeNote}>
            Several years ago Rob took on his most ambitious project when a client
            commissioned him to do an entire model of the Fair.{" "}
            <a
              href="https://www.youtube.com/watch?v=FPq9z8xlzw4&t=310s"
              target="_blank"
              rel="noopener noreferrer"
            >
              You can view the entire model on YouTube
            </a>
            . Below are photographs that Rob sent to me while he was building the
            Fair model.
          </p>

          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex79.jpg"
              alt="Rob building the Fair model"
              width={339}
              height={300}
              unoptimized
            />
            <Image
              src="/images/amex11/amex82.jpg"
              alt="Fair model in progress"
              width={580}
              height={300}
              unoptimized
            />
          </div>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex77.jpg"
              alt="Fair model in progress"
              width={557}
              height={300}
              unoptimized
            />
            <Image
              src="/images/amex11/amex78.jpg"
              alt="Fair model in progress"
              width={374}
              height={300}
              unoptimized
            />
          </div>
          <div className={styles.photoRow}>
            <Image
              src="/images/amex11/amex80.jpg"
              alt="Fair model in progress"
              width={311}
              height={300}
              unoptimized
            />
            <Image
              src="/images/amex11/amex81.jpg"
              alt="Fair model in progress"
              width={397}
              height={300}
              unoptimized
            />
          </div>
          <div className={styles.singleFigure}>
            <Image
              src="/images/amex11/amex83.jpg"
              alt="Fair model in progress"
              width={472}
              height={300}
              unoptimized
            />
          </div>
          <div className={styles.wideFigure}>
            <Image
              src="/images/amex11/amex84.jpg"
              alt="Completed Fair model"
              width={902}
              height={300}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex10"
        explicitPrevious
        overviewHref="/amex01"
        nextHref="/amex12"
      />
    </>
  );
}
