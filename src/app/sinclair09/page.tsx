import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/sinclairEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dinoland Guidebook — Sinclair — nywf64.com",
  description:
    "Sinclair Dinoland guidebook — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sinclair — Dinoland Guidebook.
 * Body from legacy sinclair09.html.
 */
export default function Sinclair09Page() {
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

      <article className={styles.article} aria-labelledby="sinclair09-title">
        <header className={styles.titleBar}>
          <h1 id="sinclair09-title" className={styles.titleBarMain}>
            Dinoland Guidebook
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla23.jpg"
                alt="Dinoland Guidebook"
                width={530}
                height={329}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>A Realistic and Authentic Re-creation of Life-size Dinosaurs and the prehistoric world in which they lived</p>
            <p>Dramatic, life-size replicas of nine different types of dinosaurs are shown in their natural prehistoric environment in this fascinating and educational Sinclair Oil Corporation exhibit at the New York World's Fair.</p>
            <p>A reenactment of life on earth as it was some 60-million to 180-million years ago, the Sinclair exhibit displays realistic reproductions of dinosaurs ranging in size from the 6-foot-long Ornitholestes to the giant 70-foot Brontosaurus, one of the largest land creatures that ever lived.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla24.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={226}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The dinosaurs shown in SINCLAIR DINOLAND were constructed by Louis Paul Jonas Studios. Technical consultants were the late Dr. Barnum Brown, Curator Emeritus of the American Museum of Natural History, and Dr. John H. Ostrom, Assistant Curator, Division of Vertebrate Paleontology, Peabody Museum of Natural History, Yale University.</p>
            <p>Brontosaurus</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla25.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={228}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>(Bront-o-sawr-us)</p>
            <p>One of the largest and best-known dinosaurs. Called "Thunder Lizard" because the ground supposedly shook when he walked. He was 70 to 80 feet in length and weighed about 20 tons. His very long neck probably enabled him to feed on underwater plants in marshes and streams. He lived in North America, during the Jurassic Period some 135- to 180-million years ago.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla26.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={291}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>On the following pages are the other dinosaurs featured in the SINCLAIR DINOLAND World's Fair exhibit.</p>
            <p>STRUTHIOMIMUS (Stru-thi-o-mi-mus) looked like an ostrich, with his long hind limbs and small, hard beak. The name means "ostrich mimic." He was approximately 14 feet long, 7 or 8 feet high. His front legs had clasping fingers and curved claws. He had large eyes and a slender neck. He probably ate fruits and vegetation and perhaps the eggs of other dinosaurs. Struthiomimus lived in the Cretaceous Period in North America some 63- to 135-million years ago.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla27.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={291}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>TRACHODON (Trak-o-don) was a plant-eater. He could walk either on his hind legs or on all fours. The name means "rough tooth." Some trachodons had 1,500 teeth, so arranged that, as one row wore out, another row replaced it. But these many teeth were useless as weapons against flesh-eating dinosaurs. Trachodon was a duck-billed, web -footed dinosaur, about 32 feet long and 14 feet high. He lived in North America in the late Cretaceous Period.</p>
            <p>TYRANNOSAURUS (Tye-ran-o-sawr-us) Largest and most terrifying flesh-eater that ever lived. His teeth were 6 inches long, like daggers with sharp, serrated cutting edges. He measured 50 feet from tip to tip, and his head rose 18 to 20 feet above the ground. Known as "Tyrant Lizard," this ferocious giant spelled death and destruction to most other creatures. He existed in Montana in the late Cretaceous Period. Tyrannosaurus reigned supreme for many millions of years.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla28.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={292}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>TRICERATOPS (Tri-ser-a-tops) was a giant horned dinosaur. The name means "three horns on the face." This tough-looking fellow resembled a rhinoceros. He was 20 to 30 feet in length, with a skull 7 feet long. His best defense against meat-eating enemies was an active offense, employing the long brow horns. He was a vegetable-feeder with a beak like a parrot's and sharp teeth for chopping up plant food. Triceratops lived in Montana and Wyoming in Cretaceous times.</p>
            <p>ANKYLOSAURUS (An-kyle-o-sawr-us) was a walking fortress. The name means "curved lizard." He was completely covered with bony armor which protected him from bigger and stronger dinosaurs. He was about 20 feet long and 6 feet wide. His skull was large, with an extra layer of bony plates. The huge bony club at the end of his tail was mighty useful as a weapon. Ankylosaurus was a plant-eater. He lived in Western United States and Canada during the Cretaceous Period.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla29.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={297}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>CORYTHOSAURUS (Kor-ith-o-sawr-us) Although this duck-billed dinosaur averaged 30 feet in length, he was no match for the flesh-eating dinosaurs of his time. He lived in the water, may have eaten water plants, perhaps shellfish, too. Corythosaurus means "helmet lizard" because of the large crest on his skull, which resembled a Corinthian helmet. He lived in North America during the late Cretaceous times. The duckbills were the most abundant of the dinosaurs.</p>
            <p>ORNITHOLESTES (Or-nith-o-les-tes) weighted little more than a turkey. He was lightly built, had many hollow bones. He lived in the last part of the Jurassic Period in Wyoming. From such small, primitive reptiles came the giant, flesh-eating dinosaurs of later times. Alert and fast-moving, he probably fed on lizards and other small ground animals. His skull was comparatively small. Ornitholestes was about 6 feet in length, had a long tail, bird-like feet and sharp claws.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla30.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={291}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>STEGOSAURUS (Steg-o-sawr-us) The double row of bony plates on his back made him one of the oddest-looking of all dinosaurs. Apparently, he fought with his back to his enemies, defending himself with the 4 long spikes on his tail. The front of his jaws formed a sort of beak. He ranged from 18 to 25 feet long, weighed about 4 tons. This slow-moving armored dinosaur fed on soft vegetation, lived in Western United States during the Jurassic Period.</p>
            <p>Dinosaurs, although new extinct, dominated all the continents of the world for more than 150 million years.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla31.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={292}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Sinclair uses the Dinosaur "Brontosaurus" as a symbol to dramatize the age and quality of the crude oils from which Sinclair Petroleum Products are made -- crudes which were mellowing in the earth millions of years ago when Dinosaurs lived. Today, Sinclair uses ultra-modern refining techniques to refine and transform these age-old crudes into top-quality Sinclair Gasolines, Motor Oils and other Petroleum Products for motor cars, the home, the farm and for use in modern industry.</p>
            <p>STOP AT THE SIGN OF THE <em>Sinclair</em> DINOSAUR</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla32.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={292}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>At Sinclair's multimillion-dollar research laboratories in Harvey, Illinois, new petroleum products are being developed and present products are being constantly tested and improved.</p>
            <p>You will find Sinclair quality petroleum products for your car at the friendly Sinclair Dealer in your neighborhood. He is one of 25,000 independent Sinclair Dealers throughout the country.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 530 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla33.jpg"
                alt="Sinclair Dinoland"
                width={530}
                height={291}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Drive with Care and Buy <em>Sinclair</em></p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 268 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla34.jpg"
                alt="Sinclair Dinoland"
                width={268}
                height={363}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 296 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla35.jpg"
                alt="Sinclair Dinoland"
                width={296}
                height={198}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 339 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sinclair09/sincla37.jpg"
                alt="Sinclair Dinoland"
                width={339}
                height={364}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sinclair08"
        explicitPrevious
        overviewHref="/sinclairoverview"
        nextHref="/sinclair10"
      />
    </>
  );
}
