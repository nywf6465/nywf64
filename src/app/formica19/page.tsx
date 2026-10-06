import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica19.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "History of the Formica Corporation — Formica — nywf64.com",
  description:
    "History of the Formica Corporation at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — History of the Formica Corporation.
 * Body from legacy formica19.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica19Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formica19-title">
        <header className={styles.titleBar}>
          <h1 id="formica19-title" className={styles.titleBarMain}>
            History of the Formica Corporation
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.historyTitle}>
            A Brief History of the<br />Formica Corporation
          </p>
          <Image
            src="/images/formica19/formica01.jpg"
            alt="Formica Logo"
            width={125}
            height={68}
            className={styles.historyLogo}
            unoptimized
          />
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1912, a 31-year old engineer named Dan J. O'Conor was working for Westinghouse in Pittsburgh when he developed a process for making laminated insulators by rolling and pressing resin-coated fabric. O'Conor filed for a patent in February, 1913, and received the one dollar that Westinghouse paid for rights to employees' inventions. Within weeks, O'Conor, who had been head of the process section of the research & engineering department, and Herbert A. Faber, 30, the manager of insulating-material sales, had quit Westinghouse to start their own insulator business."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"The material commonly used in those days for electrical insulation was mica. The new product was a substitute “for mica,” so that's what Faber named their new company. (Seventy five years later, applied to a completely different product, Formica would be one of the world's 10 best-known brand names.)"}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"They began operating on May 2, 1913, filling an order for V-rings for electric motors from Chalmers Motor Company. By September, Formica had 18 employees making parts for Bell Electric Motor, Ideal Electric and Northwest Electric, the predecessor to Delco. That same year, they renamed themselves The Formica Insulation Company."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"But before the end of 1913, Westinghouse was also making plastic laminates. Both companies bought their resin from the Bakelite Company, which soon licensed only Westinghouse. Formica would be limited to tubes and rings. Faber and O'Conor had to find a new resin process. They settled on one using \"Redmanol,\" a resin developed in Chicago by a Canadian chemist named L. V. Redman, with backing from two brothers named Sam and Adolph Karpen."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Free to produce sheet laminate, Formica rented a plant at Spring Grove Avenue and Alabama Street, not far from the Cincinnati stockyard, and installed a new $6,000 press. Redman himself came from Chicago to help them learn to work with his resin. The first Formica-brand sheet laminate came off the press on July 4, 1914, a little more than a year after the company started business. Formica turned a profit for the first time in 1916, then boomed with defense orders in 1917 when the Navy and Signal Corps needed insulators for their new radios. Aircraft makers also needed lightweight pulleys for control cables, and sales went from $75,000 in 1917 to $145,000 in 1918."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"After the war, growth continued, with sales hitting $175,000 in 1919. Strong sales meant another new plant, farther out along Cincinnati's Spring Grove Avenue, in Winton Place. The site included a two-story office building and space for expansion. Formica moved there in 1921, and it would become the headquarters until well after World War II."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Meanwhile, five years of lawsuits began in 1919 over patent infringement and other issues stemming from confusion and disagreement about who had invented and patented what and when. Formica found itself pitted against Westinghouse and General Electric, and the cases also involved leading resin makers Bakelite, Redman/Karpen and Condensite."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In the end, having repeatedly won decisions in court or on appeal, Formica benefited tremendously from an agreement between Bakelite and the Karpens. The resulting merger combined the major resin makers into a new Bakelite Corporation, which would provide material and technical assistance to all, including Formica."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Around 1923, Formica convinced one Chicago parts maker to try automotive timing gears cut from phenolic resin blanks. The new gears were tough and quiet. By 1932, Formica would be producing 6,000 gear blanks a day for such giants as Chevrolet, Studebaker, Buick, Maxwell, Auburn, Pontiac, Willys-Overland and Graham-Paige. It was only a short leap from gears for autos to gears for the fast-growing appliance industry, and another to making parts for textile machines for making the new synthetic fabrics. Sales quadrupled from $360,000 in 1921 to $1.9 million in 1923, then doubled again in a year, to $3 million in 1924."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1927, Formica patented a new and more efficient rotogravure printing process for making decorative, wood-grained or marble-surfaced laminate. Developed during months of trials by Formica's George H. Clark and Jack D. Cochrane, it was the first of many products that have made the name \"Formica\" virtually synonymous in the public mind with the stuff of which restaurant tables and kitchen countertops are made. The next step was to develop continuous designs on rotogravure printing cylinders and phenolic printing inks that could withstand the laminating process."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Steadily, through the late 1920s and into the 1930s, Formica improved the new product, testing different inks and resins, cores and surfaces, processes and methods. A key change was the adoption of the urea resins, permitting laminates that were less expensive to make, more resistant to light, heat and humidity, and capable of being manufactured in a wide range of colors and designs. In 1931, by putting an aluminum-foil layer between the core and surface, Formica engineers even developed a \"cigarette-proof\" surface that was widely used in New York's world famous Radio City Music Hall."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1937, despite the great Ohio River flood that devastated every industry in the low-lying Mill Creek Valley in Cincinnati, sales reached $3.5 million. And in Scotland, the Formica name got a tremendous publicity boost when the designers of the Queen Mary specified Formica laminates for decorative wall surfaces throughout."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"The following year, another new resin appeared: melamine. Developed by American Cyanamid Company, it resisted heat, abrasion and moisture better than phenolic or urea resins and could be used to make laminates in more colors than older resins. It also could be molded. Formica's experts began adapting it to the production of decorative laminates. By year's end, Formica was buying every ounce of melamine that American Cyanamid made, but it would be 10 years before melamine took hold."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"During the World War II era, the company developed a new glass-melamine laminate for electrical insulation, made parts for machine tools, and developed early silicone and epoxy laminates. Formica produced its plastic-impregnated \"Pregwood\" for use in airplane propellers instead of scarce aluminum. The company's biggest single order was for a bomb part called burster tubes. Sales virtually doubled the first year of WWII, from $4.2 million in 1940 to $8.3 million in 1941. At the war-production peak in 1943, sales reached $15.7 million."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"When the war ended in 1945, a huge reservoir of demand existed for decorative laminates for kitchens, bathrooms and furniture, as well as in public buildings, such as the 200,000 classrooms soon to be built across America. In 1948, recognizing this new direction as a manufacturer of a building products for consumers, Formica dropped the word \"Insulation\" from its corporate name and became The Formica Company."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In the late 1940s, work started on a new company factory in Evendale, Ohio. It would be the first built by Formica itself, and the first designed just to produce decorative laminates. When the company moved in early 1951, expansion was already underway."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Meanwhile, melamine finally began having a larger impact on sales. Laminates made with the new resin let furniture and cabinetmakers form and shape the product after manufacture. This led to extensive use of laminates in bathrooms, as well as kitchens. In 1947, the company had entered foreign markets, licensing London's De La Rue Company to make and sell decorative laminates in Europe. By 1951, sales had topped $24 million. The company had announced a 2-for-1 stock split in 1950, when the market price topped $80 a share. In 1957, American Cyanamid bought Formica, making it a wholly owned subsidiary. A new research center was built at Evendale in 1960. The same year, De La Rue and Cyanamid formed the new Formica International Limited. In 1966, the company built a modern laminate-making plant in Sierra, California."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1970, when Formica closed the old industrial laminates operation in Winton Place, Ohio and moved the headquarters offices into the new Formica Building in downtown Cincinnati, conversion from an industrial-products company to a maker of decorative laminates was complete."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Almost immediately, a new era began. Until then, Formica had been a company driven by chemistry and engineering. For 50 years, the technical experts had experimented with processes and materials, inventing new products and brainstorming new uses for old ones. In the 1970s, Formica came to be driven by design and aesthetics."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1974, De La Rue sold American Cyanamid its majority interest in Formica International Limited. American Cyanamid, however, wanted to concentrate on research, new products and growth. Formica laminates represented a mature industry and constituted only 5 percent of American Cyanamid's earnings in 1983. So, in May 1985, American Cyanamid sold Formica Corporation for $207 million to Formica management personnel, backed by Shearson Lehman/American Express."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In 1986, Formica Corporation announced the acquisition of Wildon Industries, Inc., a manufacturer of a diversified line of resin based building products. This provided Formica Corporation with the opportunity to market a new type of countertop material – solid surfacing. The company introduced the new line as Formica brand 2000X™ building products. Unlike laminate, 2000X was a cast, homogenous, structural fill material categorized by durability, heat resistance and satin finish. In 1987, the new owners took their company public, issuing stock to raise capital and pay off debt. Two years later, Formica Corporation merged with FM Acquisition Corp., a group formed by Formica management, Saratoga Partners II, LP and Masco Corporation to acquire the company and take it private. Following the merger, Formica Corporation became a wholly-owned subsidiary of FM Holdings, Inc."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In the 1990s the company introduced Surell® Solid Surfacing, a newly developed and improved replacement for 2000X. In 1993, it launched Formica Ligna® wood surfacing, a product manufactured exclusively for Formica Corporation by Alpi S.p.A., the world's leading manufacturer of multi-laminar wood veneer. In 1996, the company began producing Formica floors, having a diamond-strong finish, and a unique locking system. In 1994, Formica was purchased from FM Holdings by BTR Nylex Ltd. (a subsidiary of BTR plc), one of Australia's largest industrial companies and manufacturer of a variety of industrial, commercial and consumer products. BTR later divested Formica Corporation in 1998, as the result of a strategic decision to focus on technology-driven, engineering-oriented businesses."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"In March 2002, Formica filed for Chapter 11 bankruptcy protection after struggling through years of losses. On September 23, 2003, Formica announced that it had filed its Plan of Reorganization, and in January 2004, the United States Bankruptcy Court for the Southern District of New York confirmed the company's Plan of Reorganization, clearing the way for its emergence from bankruptcy and return to profitability."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Formica Corporation's global headquarters are located in Cincinnati, Ohio."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Author's note... I would like to thank Bill Cotter and Mike Kraus for supplying the Fair-era pictures used in this article, and Eric Paddon and Randy Treadway for contributing research materials. Also Lee & Carol C. Cole for supplying information on the history of an actual World's Fair House in Cincinnati, the headquarters town of The Formica Corporation. Formica has had its ups and downs over the past several years, but they have a long history of supplying a good product that we have all used. I hope they soon return to profitability. You can visit their website at www.formica.com . Bradd Schiffman May 8, 2004"}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Webmaster's note... Once again, thanks are in order to Bradd Schiffman for researching and developing the story of the Formica World's Fair House for nywf 64 .com . Reading Bradd's Feature is like a trip down memory lane for many of us ... with Harvest Gold kitchen appliances and the ever-present influence of Formica in our lives. Thanks, Bradd, for bringing this true 1960s icon of living back to life with the story of Formica's Pavilion at the Fair. And thanks also to those assisted Bradd with photographs and research. Your contributions are always much appreciated! Bill Young May 8, 2004"}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"Once again, thanks are in order to Bradd Schiffman for researching and developing the story of the Formica World's Fair House for nywf 64 .com . Reading Bradd's Feature is like a trip down memory lane for many of us ... with Harvest Gold kitchen appliances and the ever-present influence of Formica in our lives. Thanks, Bradd, for bringing this true 1960s icon of living back to life with the story of Formica's Pavilion at the Fair."}</p>
          <p className={styles.lede} style={{ marginBottom: "0.85rem" }}>{"And thanks also to those assisted Bradd with photographs and research. Your contributions are always much appreciated!"}</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica18"
        overviewHref="/formicaoverview"
        nextHref="/formicaoverview"
      />
    </>
  );
}
