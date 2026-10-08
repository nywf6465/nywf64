import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Millionaire Fabric Collection — Singer Bowl — nywf64.com",
  description:
    "Singer Millionaire Fabric Collection at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl — Millionaire Fabric Collection.
 * Body from legacy singer09.html.
 */
export default function Singer09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <article className={styles.article} aria-labelledby="singer09-title">
        <header className={styles.titleBar}>
          <h1 id="singer09-title" className={styles.titleBarMain}>
            Millionaire Fabric Collection
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 187 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer09/sinbow17.jpg"
                alt="Millionaire Fabric Collection"
                width={187}
                height={420}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>FROM THE FAR CORNERS of the world, from the weavers and fabric designers who loom cloth for queens, princesses and the wives of world leaders, comes the SINGER* Millionaire Fabric Collection, gathered especially for the New York World's Fair.</p>
            <p>Culled from the treasures of the looms of America, Europe and the Far East, many of the fabrics are so rare, so delicate, and so elaborate that only a single precious yard can be woven in a working day.</p>
            <p>Most of these jewels of the loom -- fabrics for daydreaming -- are priced for the purse of a maharajah's wife. They are gathered under one roof for the first time for all to enjoy.</p>
            <p>Under one roof, a world -- a world representing the most exquisite, delicate and costly of contemporary fabrics -- a world to which we bid you welcome!</p>
            <p>[[What's new for tomorrow</p>
            <p>is at]] SINGER [[today!</p>
            <p>]]</p>
            <p>*A Trademark of THE SINGER COMPANY</p>
            <p>THE Collection features ten mannequins in fabulous fashions from Vogue Pattern's Import Collection by famous Haute Couture designers.</p>
            <p>Gown - Vogue Paris Original 1446, by Lanvin. Tunic of jeweled ivory satin panel.</p>
            <p>$600 per panel.</p>
            <p>Gown - Vogue Paris Original 1405, by Cardin. Lame' gown and sari woven with pure gold.</p>
            <p>Sari, $800.</p>
            <p>Ensemble - Vogue Couturier Design 1315, by Forquet. Sculptured brocade in gold and pink on electric blue ground.</p>
            <p>$30 per yard.</p>
            <p>Gown - Vogue Paris Original 1319, by Patou. Cut velvet flowers on pink satin.</p>
            <p>$70 per yard.</p>
            <p>Pants costume - Vogue Couturier Design 1348, by Pucci. Pants of hand-loomed jeweled wool valued at $5800.</p>
            <p>Gown - Vogue Paris Original 1398, by Dior. Navy ribbon lace over silver-blue brocade.</p>
            <p>The lace, $40 per yard.</p>
            <p>Gown - Vogue Paris Original 1476, by Ricci. Bronzine cut velvet on silk satin.</p>
            <p>$65 per yard.</p>
            <p>Gown - Vogue Paris Original 1324, by Balmain. Lime silk brocade in emerald, ivory and gold..</p>
            <p>$200 per yard.</p>
            <p>Pants costume - Vogue Couturier Design 1350, by Galitzine. Pants and jacket lining of petaled white Swiss organdy, yellow peau de soie jacket.</p>
            <p>Gown - Vogue Paris Original 1346, by Dior. White lace embroidered net over peau de soie gown.</p>
            <p>Lace panels, $200 per pair.</p>
            <h2 className={styles.heading}>[[FABRICS]]</h2>
            <h2 className={styles.heading}>[[GROUP 1:]]</h2>
            <p>a. Jacquard brocade of silver and gold metallic roses on iridescent white ground. $250 per yard.</p>
            <p>b. Delicate white cotton Swiss embroidery "sculptured" in six layers of three-dimensional flowers and petals. $120 per yard.</p>
            <p>c. Caramel colored mohair and wool. Made in England. $46 per yard.</p>
            <p>d. "Dogaressa" brocade of pure gold and silver threads woven on silk. This Italian fabric was copied from a museum piece. $324. per yard.</p>
            <p>e. White jeweled lace with seed pearls, bugle beads and beaded fringe. Created in France. $130 per yard.</p>
            <p>f. "Swazi Clouds" -- an intricate pattern of swirling loops in hand spun, hand woven mohair, inspired by the native arts of the British Protectorate of Swaziland in South Africa. $75 per yard.</p>
            <p>g. Three-dimensional white flower design on white satin ground. Each flower is embellished with a hand appliqued stamen. $115 per yard.</p>
            <p>h. Hand-woven jacquard broche' in a floral pattern created on a white metallic ground by a special weaving process in which the elegant appearance of embroidery derives from the raised broche' threads.</p>
            <h2 className={styles.heading}>[[GROUP 2:]]</h2>
            <p>a. Bisque Cigelline, a unique combination of diaphanous chiffon with luxurious satin, both richly embroidered in gold and shrimp silk. Made in France. $70 per yard.</p>
            <p>b. Pure Vicuna, in its natural caramel color. Known as the "Fabric of Kings," Vicuna was formerly confined to Peruvian royalty. Now small amounts of these precious fabric are imported under strict controls. $80 per yard.</p>
            <p>c. "Swazilace," handwoven of mohair and linen. Inspired by native fabrics of Swaziland. $60 per yard.</p>
            <p>d. "Dogaressa" brocade hand woven of pure gold and silver threads on persimmon silk. One yard is three weeks in the weaving. $240 per yard.</p>
            <p>e. Heavy cotton lace patterned with black-eyed daisies. $60 per yard.</p>
            <p>f. Kashmir Shah tush. The warmest wool in the world, so light and supple a length slips through your wedding ring. Gathered by natives in the mountains of Aksai Chin and Eastern Ladakh. $900 per piece.</p>
            <p>g. "Tigre" velvet of thick heavy silk pile -- a beautiful example of one of the first Eastern-inspired departures from traditional 19th Century flower and scroll design.</p>
            <h2 className={styles.heading}>[[GROUP 3:]]</h2>
            <p>a. Giant abstract paisley brocade in metallic gold, fuchsia and pink silk. $250 per yard.</p>
            <p>b. Imported pink Swiss cut-out of petit point pique and organdy. Each layer of petals and leaves has been hand cut. $360 per yard.</p>
            <p>c. East Indian sari. Pale pink silk gauze with multicolored pattern and gold panels. Made in India. $110 per yard.</p>
            <p>d. Rosy net, exquisite with scattered appliqued roses. $110 per yard.</p>
            <p>e. Pink cotton embroidered panel. made in Switzerland. $20 per yard.</p>
            <p>f. Multicolored mohair tweed. $35 per yard.</p>
            <p>g. A sari created for Queen Sirikit by Nid of Thailand. Miss Nid's mother is couturiere to the Royal Court of Thailand. Her grandmother was couturiere for King Munkut (the King of Siam whose life inspired "The King and I"). The sari, $3500.</p>
            <p>h. Tibetan lamasery altar cloth woven of cerise silk and gold bullion. $112 per yard.</p>
            <p>i. Pink and celadon pure silk brocade. $300 per yard.</p>
            <p>j. Navy blue net flowered with pink embroidery and applique. $76 per yard.</p>
            <h2 className={styles.heading}>[[GROUP 4:]]</h2>
            <p>a. Pure silk organza, appliqued with self flowers and embroidered with $2400 worth of cultured pearls. Would cost $1400 per yard to duplicate.</p>
            <p>b. Hand woven lampas panel of turquoise pure silk and metallic gold, in a Fleur de Lys pattern of the Louis Phillippe period. $900 for the panel.</p>
            <p>c. Turquoise blue pure silk velvet, made in Italy. $36 per yard.</p>
            <p>d. Intricate hand woven jacquard lampas broche' of pure silk, in a colorful pattern on blue ground. $270 per yard.</p>
            <p>e. Pure silk sculptured velvet -- a fabric painstakingly made on wooden hand looms. The French hand-woven jacquard of multi-colors on blue cannetille background is from an 18th Century design. $390 per yard.</p>
            <p>f. Pure silk panel, woven and embroidered by hand in Italy, named "Charles Le Brun" after the famous Director of Design of Gobelins Tapestry. $600 per pair of panels.</p>
            <p>g. "Fleur de Lyon" silk jacquard broche', on green taffeta ground.</p>
            <p>h. Turquoise organza strewn with delicate blossoms of golden yellow and green wool embroidery. $87 per yard.</p>
            <p className={styles.source}>SOURCE: Singer Souvenir Brochure</p>
            <h2 className={styles.heading}>[[GROUP 5:]]</h2>
            <p>a. Sunny golden satin with deep border design of metallic gold. $200 per yard.</p>
            <p>b. Striped velour cisele' in shades of gold on creme satin ground. $150 per yard.</p>
            <p>c. Hand woven scenic lampas broche' on gold ground, reproduces a French Renaissance document. $750 per yard.</p>
            <p>d. "Waterlilies" -- a golden light-struck print of cotton velvet, achieved by modern application of ancient Batik techniques. $30 per yard.</p>
            <p>e. Multicolored velour cisele' on gold satin ground. $390 per yard.</p>
            <p>f. Green satin with allover embroidery of wool and Mylar in shades of green and silver. A French import. $65 per yard.</p>
            <p>g. A cut velvet design of emerald green on burnished gold ground. $140 per yard.</p>
            <p>h. Sculptured velvet of pure silk woven in France. $390 per yard.</p>
            <p>i. Creme and gold lampas moire', woven in France.</p>
            <p>j. Yellow satin panel with hibiscus design hand-beaded in crystal, paillettes and bugle beads. $150 per panel.</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer08"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singer10"
      />
    </>
  );
}
