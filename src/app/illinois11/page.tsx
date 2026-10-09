import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title:
    "Article: Preview of Disney's World's Fair Shows — Illinois — nywf64.com",
  description:
    "Science Digest preview of Walt Disney's 1964/1965 New York World's Fair shows — Illinois Pavilion on nywf64.com.",
};

function ScanGrid({
  images,
}: {
  images: { src: string; width: number; height: number }[];
}) {
  return (
    <div className={styles.scanGrid}>
      {images.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          alt=""
          width={img.width}
          height={img.height}
          unoptimized
        />
      ))}
    </div>
  );
}

export default function Illinois11Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois11-title"
      titleNode={
        <>
          Article: <em>Preview of Disney&apos;s World&apos;s Fair Shows</em>
        </>
      }
      previousHref="/illinois10"
      nextHref="/illinois12"
      wide
    >
      <ScanGrid
        images={[
          { src: "/images/illinois11/ge24.01.jpg", width: 350, height: 357 },
          { src: "/images/illinois11/ge24.02.jpg", width: 350, height: 357 },
          { src: "/images/illinois11/ge24.03.jpg", width: 350, height: 356 },
          { src: "/images/illinois11/ge24.04.jpg", width: 350, height: 356 },
          { src: "/images/illinois11/ge24.05.jpg", width: 350, height: 356 },
          { src: "/images/illinois11/ge24.06.jpg", width: 350, height: 356 },
        ]}
      />
      <ScanGrid
        images={[
          { src: "/images/illinois11/ford105.01.jpg", width: 351, height: 352 },
          { src: "/images/illinois11/ford105.02.jpg", width: 350, height: 352 },
          { src: "/images/illinois11/ford105.03.jpg", width: 351, height: 352 },
          { src: "/images/illinois11/ford105.04.jpg", width: 350, height: 352 },
          { src: "/images/illinois11/ford105.05.jpg", width: 351, height: 352 },
          { src: "/images/illinois11/ford105.06.jpg", width: 350, height: 352 },
        ]}
      />
      <figure className={styles.figure}>
        <ScanGrid
          images={[
            { src: "/images/illinois11/ill55.01.jpg", width: 351, height: 352 },
            { src: "/images/illinois11/ill55.02.jpg", width: 350, height: 352 },
            { src: "/images/illinois11/ill55.03.jpg", width: 351, height: 352 },
            { src: "/images/illinois11/ill55.04.jpg", width: 350, height: 352 },
            { src: "/images/illinois11/ill55.05.jpg", width: 351, height: 352 },
            { src: "/images/illinois11/ill55.06.jpg", width: 350, height: 352 },
          ]}
        />
        <p className={styles.source}>
          SOURCE: <em>Science Digest</em> Vol. 54, No. 6., December 1963
        </p>
      </figure>
    </IllinoisTopicPage>
  );
}
