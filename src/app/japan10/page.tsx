import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japan10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "List of Exhibitors and Their Exhibits — Japan — nywf64.com",
  description: "List of Exhibitors and Their Exhibits — Japan pavilion — nywf64.com.",
};

export default function Japan10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image src="/images/japanoverview/hero-banner.jpg" alt="Japan pavilion at the 1964/1965 New York World’s Fair" width={1903} height={826} priority sizes="100vw" className={overviewHeroStyles.art} unoptimized />
        </div>
      </section>
      <JapanNavChrome />
      <article className={styles.article} aria-labelledby="japan10-title">
        <header className={styles.titleBar}>
          <h1 id="japan10-title" className={styles.titleBarMain}>List of Exhibitors and Their Exhibits</h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.source}>Source: Brochure insert, <em>Japan Pavilion</em> (Red Pavilion Guide)</p>
          <div className={styles.panel}>
            <p className={styles.ledeCenter}>NEW YORK WORLD&apos;S FAIR 1964-1965</p>
            <p className={styles.titleCenter}>THE LIST OF</p>
            <p className={styles.titleCenter}>EXHIBITORS AND THEIR EXHIBITS</p>
            <p className={styles.ledeRight}>JAPAN PAVILION</p>
            <hr className={styles.rule} />
            <dl className={styles.entry}>
              <dt>HITACHI, LTD.,</dt>
              <dt>Exhibits in Hitachi Booth.</dt>
              <dt>Analog Computer and Space Capcel, Electronic Refrigerator, Analysis Camera, High Speed Motion, Transistor Tapecorder, Transistor Radio, Citizen's Band Transceiver, Taperecorder Transistor Car Radio, Several Kind of Desk Fan, Refrigerator.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>TOKYO SHIBAURA ELECTRIC CO., LTD, will display products ranging from tiny transistors to an electronic color computer that can distinguish between 100 million different shades of color.  Also highlighted will be a Cool-Ray Lamp that will provide illumination without the heat associated with normal lamps, and a demonstration of an electronic storage tube that can store TV images up to ten hours.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>MITSUBISHI ELECTRIC CORPORATION</dt>
              <dt>6 inch Colour Television &amp; Transistor Radio, Tape Recorder, Electronic Alarm, Automatic Electric Juicer, Electric Rice Cooker, various kinds of Rotary Shaver, Knitting Machine, and other Electric Home Appliances.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>NIPPON ELECTRIC COMPANY LIMITED</dt>
              <dt>One Touch Dial, Free Phone, Privacy Phone (Phone Conversation Privacy Device), Type 8367 Telephone Set, Type 600 Telephone Set, Electronic Travel Brain (Matrix Computer), Transistorized Closed Circuit TV Camera, Echo Capsule, Echo Encephalograph, Heart Rate Telemeter, Transistor Radio, Mini-Talkie, Color TV Receiver (On display from July or August).</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>SANYO ELECTRIC CO., LTD.</dt>
              <dt>"Micropack 35" magazine-loaded - pocket-size Tape Recorder, All-transistor Tape Recorder, 4-tube De Luxe Tape Recorder, All-transistor Stereo, "Cadnica" rechargeable 8-transistor MW/SW portable radio, 9" transistor TV, 12" transistor TV, 16" TV, 16" Color TV, 19" wide-square TV, Thermoelectric Refrigerator, Thermoelectric Pillow, Thermoelectric Developing Vat, "SANYO" Thermoelectric Sign Board.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>MATSUSHITA ELECTRIC INDUSTRIAL CO., LTD. Kadoma, Osaka</dt>
              <dt>Tradename: PANASONIC, Exhibits in Matsushita Booth: Portable &amp; Table Radios (Transistor &amp; Tube), 9" Transistor Portable TV, 16" Color TV, Tape Recorders, Stereo. Feature Matsushita Exhibit: NATIONAL PANASONIC Combination "Heian" (Stereo, TV, FM/AM Radio, Stereo Tape Recorder), Public Matsushita Exhibit in JAPAN PAVILION: "PHOLSICON" Solid-State EL-PC Image Converter.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>VICTOR COMPANY OF JAPAN, LTD. was established in 1927 under the motto "Contribution to Culture and Service to Society with the World Famous Mark." Products are Record, Radio, TV, Tape Recorder, Stereo, Video Tape Recorder, Color Eidophor and other electrical-electronic equipments. Its Famous dog and horn mark symbolizes the advanced quality in Japan and JVC-NIVICO mark (export brand name) holds the same prestige and honour in overseas market.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>DATSUN SPL-310: Sports Car Graphic Magazine says in a recent test-"Detail work throughout the entire car is simple but neat. Fit and finish are above average. In total, the DATSUN SPL-310 is well-made and should prove reliable and rugged in service. Most impressive, it is a car without any basic mistakes to hamper its value or potential. We feel the DATSUN SPL-310 at its present rate of development, is destined to carve an impressive slice of the sports car market.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>TOYOTA MOTOR SALES CO., LTD.</dt>
              <dt>The largest car manufacturer in Asia, Toyota Motor exhibits 2 major sedans among the various products. The Toyota Crown Deluxe and Toyota Tiara, both 1900cc 95Hp engined are the exceptionally well-balanced cars with commendable economy in operation, service and investment. And, they respond lightest touch, reducing driving fatigue to an absolute minimum.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>HONDA MOTOR COMPANY LIT., world's largest manufacturer of motorcycles, produces over 1,000,000 units yearly.  Honda has revolutionized the two-wheel vehicle industry by offering a superior product at a reasonable price- the small "Honda 50" is an especially popular machine.  Honda has three factories, and research and development facilities in Japan producing cars, trucks, and farm machinery in addition to motorcycles.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>SEIKO WATCH EXHIBIT-BY K. HATTORI &amp; CO., LTD. Display of quality wristwatches and sports timing devices for the Tokyo Olympic Games made by one of the world's largest jeweled-lever watch manufacturers. Features for visitors include timing of filmed speed events with Seiko stop watches and "fishing" for waterproof watches with magnets in the Fountain of Time. Tik-tok, the Seiko robot, 5'8"tall, moves around the Fair grounds to direct you to the exhibit.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>NIPPON KOGAKU K.K.  NIPPON KOGAKO (USA) INC.</dt>
              <dt>35mm Cameras: Nikon F, Nikon F Photonic, Nikkorex Auto 35, Nikkorex Zoom 35, Nikkorex F, Nikonos all weather, 8mm Cine Cameras: Nikkorex Zoom 8, Nikkorex 8F. Photographic Lenses: Nikkor, Measuring Instrument: Shadowgraph. Surveying Instruments: Transit &amp; Level. Microscopes: Medical Microscope &amp; Inverted Microscope. Radiation Shield Glass.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>THE JAPAN IRON AND STEEL FEDERATION</dt>
              <dt>If you visit our booth and inspect the exhibition, you can understand Japan-U.S. relations promoted through trade in iron and steel. Japan high quality steel manufactured with superior technology and in service around the world as well as the Japan's steel industry ranking among the world leaders.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>ASAHI GLASS COMPANY, LTD. TOKYO, JAPAN.</dt>
              <dt>Figured glass Plate Glass-Heat Absorbing Glass-Profiled Constructional Glass Automobile Windshield Glass TV Picture Tube envelopes-Cuatic Soda-Sodium Bicarbonate - Ammonium Chloride, fertilizer- Soda Ash- X-ray Masking Liquor-Refractores-Glass Tube for Fluorescent Lamp-Iodine-Glass Block-Glass Mosaic-Glass Fiber-Perfume-Ceramic Faced Foam Concrete Block-Foam Concrete Glass reinforced Plastics.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>TOYO RAYON CO., LTD. ("Toray" for short) Established in: January 1926.  Capital:  $83 million.  Net Sales:  $360 million (1962).  Main products:  nylon (Amilan), polyester fiber (Toray TETORON), polypropylene fiber (Toray PYLEN), acrylic fiber (TORAYLON), rayon staple, nylon resin, polyester film, polypropylene film, New York Office:  Room No. 903, 385 5th Avenue, New York 16, N.Y. U.S.A.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>IKENOBO UNIVERSITY FOR ART OF FLOWER ARRANGEMENT</dt>
              <dt>We are very happy to exhibit traditional ikebana compositions with 500 years' history.  The Ikenobo school is the longest and most popular in Japan, representing the traditional art of ikebana.  We have established a university to study classical and modern arrangings.  Addresses:  2-3 Kanda-Suragadai, Chiyoda-ku, Tokyo/Muromachi, Shijo, Shimogyo-Ku, Kyoto.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>NOZAKI ASSOCIATES, INC., 4 Albany Street, New York 6, N.Y.</dt>
              <dt>"Geisha" Brand Canned Goods-Crabmeat, Tuna, Shrimps, Salmon, Oysters, Clams, Sardines, Sauries, Mandarin Oranges, White Peaches, Pineapples, Mushrooms; and Frozen Foods-Oysters, Swordfish Steaks, Rainbow Trout, Halibut Steaks, Crabmeat, Cooked &amp; Peeled Shrimp, Froglegs.</dt>
              <dt>"Geisha" Brand is world famous nearly 3/4 of a century.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>NIPPON IRYO CO., LTD.  (Former Name:  Chubu Iryo Co., Ltd.)</dt>
              <dt>Manufacturer and Exporter of Textile Piece Goods &amp; Made Up Goods</dt>
              <dt>Item:  Suits, Dress, Over Coat, Dress Shirt, Sport Shirt, Rain Coat, Ski Pants, Stretchable Slacks, Blouse and all kind of Piece Goods.</dt>
              <dt>Address:  CPO Box 129, Nagoya, Japan  Cable Address "IRYONIPPON"</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>ALL JAPAN COTTON SPINNERS' ASSOCIATION, Osaka, Japan - is a private organization, comprising 136 spinning companies all over Japan, aimed at promotion of mutual friendship.</dt>
              <dt>The member mills' products are widely sold abroad in a most orderly marketing to meet any kinds of demand throughout the world.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>KOHKOKU CHEMICAL IND. CO., LTD.  New York Representatives Office:  307 fifth Avenue, room 1007, New York 16 N.Y., U.S.A. (MU-6 3135)</dt>
              <dt>PRODUCTS-SHOE PLANT:  canvas shoes, vinyl (shoes, boots, sandal), rubber (shoes, boots).  VINYL PLANT:  P.V.C. (film, sheet, leather) expanded vinyl leather.  RUBBERIZED CLOTH PLANT:  rubberized cloth, air mattress, surf rider, rubber boat, rain wear.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>JAPAN SILK ASSOCIATION, INC.  displays all phases of silk, one of Japanese special products-from material to beautiful finished goods.  Don't miss our wedding costume, exquisite representative of Japanese Kimonos.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>TOKYU SHOPPING CENTER</dt>
              <dt>At the Tokyu Shopping Center which Tokyu, representing the service in Japan, operates, you can have not only  the articles exhibited in Japan Pavilion but the specialties of Japan; transistor radios, cameras, watches, pearls, kimono, dolls, ceramics and traditional Japanese handicraft articles, etc.</dt>
              <dt>You can enjoy your shopping here in the Japanese mood.</dt>
              <hr className={styles.rule} />
            </dl>
            <dl className={styles.entry}>
              <dt>THE JAPAN BEARING INDUSTRIAL ASSOCIATION Bearings exhibited here are the products of Japanese leading manufacturers, i.e. Nippon Seiko K.K., Koyo Seiko Co., Ltd. and Toyo Bearing Mfg. Co., Ltd.  Universally recognized as top quality bearings, they are exported to all corners of the world.  These bearing manufacturers have been expanding their sales networks while endeavoring to meet customer requirements for quality, economy, delivery and special engineering services.</dt>
              <hr className={styles.rule} />
            </dl>
          </div>
        </div>
      </article>
      <Nav2Bar previousHref="/japan09" explicitPrevious overviewHref="/japanoverview" nextHref="/japan11" />
    </>
  );
}
