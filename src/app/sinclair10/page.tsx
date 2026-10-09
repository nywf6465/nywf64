import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dealer Details — Sinclair — nywf64.com",
  description:
    "Sinclair dealer materials for the World’s Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — Dealer Details.
 * Body from legacy sinclair10.html.
 */
export default function Sinclair10Page() {
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

      <article className={styles.article} aria-labelledby="sinclair10-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair10-title" className={styles.titleBarMain}>
            Dealer Details
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 360 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla101.jpg"
                alt="Dealer Details"
                width={360}
                height={500}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>SINCLAIR GOES TO THE FAIR</h2>
            <p>The vital role that Sinclair and its 25,000 independent Dealers play in serving America's growing need for petroleum products is the story that Sinclair is telling visitors to the New York World's Fair.</p>
            <p>This story is being told in many ways. Visitors to Sinclair Dinoland step back in time to a prehistoric world when dinosaurs roamed the earth. Here they see mighty Brontosaurus - symbol of Sinclair - and eight other dinosaurs which dramatize the age and quality of crude oils from which Sinclair Petroleum Products are made. These crudes were mellowing in the earth millions of years ago when dinosaurs lived.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla102.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={224}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>An interior exhibit relates another important phase of the Sinclair story. It includes three dioramas. One depicts the evolution of the earth from earliest forms of life up to the time of the dinosaurs. Another dramatizes</p>
            <p>how Sinclair products are used to provide power and energy for our complex transportation system; and a third describes the contributions that Sinclair will make to the "World of Tomorrow."</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla103.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={211}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair Dealers will appreciate the value of the two modern Sinclair Stations at the Fair, and the favorable impression they create for Sinclair Dealers everywhere. The World's Fair Marina is equally impressive. It's one of the largest marinas in the world, and supplies Sinclair Products to Fair visitors who come by boat.</p>
            <p>These are some of the impressions millions of motorists will get of Sinclair when they visit the Fair. You'll benefit, too, because these people will have greater confidence in the Sinclair Products and services available at their local Sinclair station.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla104.jpg"
                alt="Sinclair Dinoland"
                width={200}
                height={205}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>In the months to come, millions of visitors to the New York World's Fair will see Sinclair Dinoland. The unique exhibit is conveniently located in the Fair's Transportation Area. It overlooks Grand Central Parkway in Queens.</p>
            <p>Each of the nine different types of dinosaurs at Sinclair Dinoland are shown in their natural prehistoric environment. Pictured above is the Trachodon, a duck-billed, web-footed dinosaur with about 1500 teeth.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla105.jpg"
                alt="Sinclair Dinoland"
                width={400}
                height={126}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>HERE'S YOUR</h2>
            <p>GO TO THE FAIR WITH <em>Sinclair</em></p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 489 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla106.jpg"
                alt="Sinclair Dinoland"
                width={489}
                height={243}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Win A Luxury Trip to the New York World's Fair 1,964 Prizes in All!</p>
            <p>The purpose of your Trip 'n Travel Prize-O-Rama is to bring more new customers into <em>your station</em> at the peak of the spring and summer travel season - which promises to be the biggest on record. Just think - over 40 million people are expected to visit the World's Fair this year - and most will travel by car!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla107.jpg"
                alt="Sinclair Dinoland"
                width={500}
                height={302}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>To bring more motorists into your station there'll be hundreds of prizes - <em>1,964 in all</em>. Grand Prize will be a trip for 2 to the Fair . . . plus a '64 Cadillac, $5,000 cash, and 500 gallons of Sinclair Dino Supreme Gasoline. Second prize will be a trip for 2 to the Fair plus a '64 Falcon, $500 cash, and 500 gallons of Dino Gasoline. And there'll be 80 trips for 2 to the Fair offered as Third Prizes.</p>
            <p>Hundreds of other prizes are planned to build business for you. These include Sinclair Products that can be won by motorists. To collect these prizes, winners must come to Sinclair Stations. This is planned to give Dealers an opportunity to meet new customers, and convert them into Sinclair regulars.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 189 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla108.jpg"
                alt="Sinclair Dinoland"
                width={189}
                height={282}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p><em>You can win a valuable prize too</em>. There'll be 1,964 Dealer prizes, including the Grand Prize of a <em>trip for 2 to the Fair plus $1,000 cash</em>. Many of the other prizes include specially selected items you can use at your station.</p>
            <p>The only way your customers and prospects can enter this contest is by depositing an entry blank at your station. You'll have an ample supply of entry blanks, and if your imprint appears on the winning entry, you'll win a prize too. Talk up the Trip 'n Travel Prize-O-Rama, and get your station ready for the big event. You'll have everything you'll need to be a winner!</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla109.jpg"
                alt="Sinclair Dinoland"
                width={600}
                height={264}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Here's The Big National Advertising</p>
            <p>That Will Pull Customers Into Your Station</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla110.jpg"
                alt="Sinclair Dinoland"
                width={300}
                height={315}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Here's The Free Display Material</p>
            <p>You'll Get For Your Station</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair10/sincla111.jpg"
                alt="Sinclair Dinoland"
                width={300}
                height={289}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>[[BRING 'EM IN THE EASY WAY WITH THESE]]</h2>
            <h2 className={styles.heading}>2 EXCLUSIVE PREMIUMS</h2>
            <h2 className={styles.heading}>DINO PLAYMATE &gt;</h2>
            <p>Look who's back ... by popular demand! More than a million of these inflatables have been sold. And this year, they'll sell faster than ever because of national publicity the Sinclair Dinosaur is getting from the Sinclair Dinoland exhibit at the World's Fair.</p>
            <p>Besides bringing more traffic into your station, the Dino Playmate will help you make more money. You'll make 14c on each Playmate you sell. They're available for $1.75 each, and retail for $1.89.</p>
            <p>Order enough so you don't run short.</p>
            <h2 className={styles.heading}>ORDER DINO PLAYMATES OR BAG-O-DINOS FROM YOUR SALES REPRESENTATIVE</h2>
            <h2 className={styles.heading}>&lt; BAG-O-DINOS</h2>
            <h2 className={styles.heading}>SCALE MODEL DINOSAURS</h2>
            <p>Here's an ideal premium that will get more traffic into your station for greater sales and profits.</p>
            <p>Also, when you sell each Bag-O-Dinos at the suggested price of 49c each - you'll make 14c profit since your cost is only 35c per bag.</p>
            <p>Tie in with Sinclair Dinoland by offering six plastic scale models which are exact replicas of the dinosaurs displayed at Sinclair's World's Fair exhibit. Each package contains a booklet with full color illustrations and descriptions of all the dinosaurs at Dinoland.</p>
            <p>Order your supply of Bag-O-Dinos soon. And when you order . . . make sure you order enough to satisfy all of your customer's needs.</p>
            <p className={styles.source}>Source: Magazine <em>The Sinclair Dealer</em> Spring-Summer 1964, Presented Courtesy Mike Kraus Collection</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair09"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair11"
      />
    </>
  );
}
