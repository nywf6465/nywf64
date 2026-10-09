import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: "The Lincoln Photo Exhibit — Illinois — nywf64.com",
  description:
    "The Lincoln Photo Exhibit at the Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const PAIRS: {
  caption: string;
  image: string;
  width: number;
  height: number;
  alt: string;
}[] = [
  {
    caption:
      "#1 This is the oldest known photograph of Lincoln. Sources date it as either 1846 or 1848 during his single term as Whig Party member of the U.S. House of Representatives.",
    image: "ill11.jpg",
    width: 190,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#2-A Matthew Brady portrait of Lincoln taken on February 27, 1860 in New York City.",
    image: "ill12.jpg",
    width: 197,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      '#3 November 25, 1860, three weeks after Lincoln\'s election as President. This is also the first photograph that shows him bearded. After being "scrupulously clean-shaven" all his life, according to one friend, Lincoln had grown the beard in response to a letter from a young girl, Grace Beddell, who had said "you would look a great deal better for your face is so thin."',
    image: "ill13.jpg",
    width: 193,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#4-A February 1861 portrait taken in Springfield, Illinois just prior to Lincoln's departure for Washington for his inauguration. This photo is usually compared with 1865 photos to show the toll the Civil War took on Lincoln.",
    image: "ill14.jpg",
    width: 188,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#5 The President confers with General George McClellan on October 2, 1862 at Antietam, Maryland not long after the infamous battle that represented the first major Union victory in the Civil War. Two years later, McClellan would be the Democratic nominee against Lincoln in the 1864 election.",
    image: "ill15.jpg",
    width: 195,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#6 Taken the same day at Antietam. This is one of the few pictures to show Lincoln wearing the famous stovepipe hat.",
    image: "ill16.jpg",
    width: 193,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption: "#7 An Alexander Gardner portrait, taken on August 9, 1863.",
    image: "ill17.jpg",
    width: 189,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#8 With youngest son Tad, February 9, 1864. Tad is the only one of Lincoln's family that he appears with in a photograph.",
    image: "ill18.jpg",
    width: 207,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#9 Also taken by Matthew Brady, February 9, 1864. This photo served as the basis for the portrait of Lincoln on the penny.",
    image: "ill19.jpg",
    width: 189,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#10 This February 9, 1864 Brady portrait was incorporated on the $5 bill design from 1933 to 1999.",
    image: "ill20.jpg",
    width: 191,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption: "#11 Lincoln delivers his second Inaugural Address, March 4, 1865.",
    image: "ill21.jpg",
    width: 193,
    height: 290,
    alt: "Lincoln Photo",
  },
  {
    caption:
      "#12 April 10, 1865. The last photo taken of Lincoln before his assassination four days later. The glass negative cracked, accounting for the line through the top.",
    image: "ill22.jpg",
    width: 186,
    height: 290,
    alt: "Lincoln Photo",
  },
];

export default function Illinois06Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois06-title"
      title="The Lincoln Photo Exhibit"
      previousHref="/illinois05"
      nextHref="/illinois07"
      wide
    >
      <figure className={styles.figure}>
        <Image
          src="/images/illinois06/ill10.jpg"
          alt="Lincoln photo exhibition"
          width={320}
          height={240}
          className={styles.photoImg}
          unoptimized
        />
        <p className={styles.caption}>
          Visitors view Lincoln Photo Collection inside pavilion.
        </p>
        <p className={styles.source}>
          SOURCE: Film still from &quot;World&apos;s Fair Encounter&quot;
        </p>
      </figure>

      <div className={styles.bodyMaroon}>
        <p>
          Before reaching the pre-show area for &quot;Great Moments&quot;
          visitors were greeted by an impressive display that reproduced every
          photograph of Abraham Lincoln known to exist. The photos came from the
          celebrated collection of Frederick Meserve (1865-1962) who had begun
          collecting historic photographs in 1902. With the help of his friend,
          Carl Sandburg, Meserve assembled more than 100 Lincoln photographs in
          a collection of Civil War era photos that numbered in the tens of
          thousands, forming a history of America&apos;s greatest President from
          1846 to 1865.
        </p>
        <p>
          Meserve&apos;s collection consisted mostly of posed portraits, but he
          also had tracked down all public photographs taken of Lincoln by
          newspaper photographers and other amateurs. The results were first
          published in a 1911 book, <em>Photographs Of Abraham Lincoln</em>,
          which was updated in 1944 to reflect new discoveries.
        </p>
        <p>
          Placing all of the known images of the real Lincoln could only have
          helped enhance the ultimate impact of &quot;Great Moments With Mr.
          Lincoln&quot; on Fair visitors. With the images of the real Lincoln
          burned greatly in their minds before entering the theater, viewers
          could see more clearly how much care had been put into the
          Audio-Animatronic figure to make it as lifelike as possible.
        </p>
        <p>
          Below are a sampling of the historic photographs Fair visitors would
          have seen in the pavilion display.
        </p>
      </div>

      {PAIRS.map((row, index) => (
        <div
          key={row.image}
          className={index % 2 === 0 ? styles.twoCol : styles.twoCol}
        >
          {index % 2 === 0 ? (
            <>
              <p className={styles.caption}>{row.caption}</p>
              <Image
                src={`/images/illinois06/${row.image}`}
                alt={row.alt}
                width={row.width}
                height={row.height}
                className={styles.photoPlain}
                unoptimized
              />
            </>
          ) : (
            <>
              <Image
                src={`/images/illinois06/${row.image}`}
                alt={row.alt}
                width={row.width}
                height={row.height}
                className={styles.photoPlain}
                unoptimized
              />
              <p className={styles.caption}>{row.caption}</p>
            </>
          )}
        </div>
      ))}

      <p className={styles.source}>
        SOURCE: <em>The Photographs Of Abraham Lincoln</em>, compiled by
        Frederick Meserve (1944)
      </p>
    </IllinoisTopicPage>
  );
}
