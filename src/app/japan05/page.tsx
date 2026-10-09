import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Japan — nywf64.com",
  description:
    "Japan pavilion photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan05.html (Photograph Scrap Book banner omitted). */
export default function Japan05Page() {
  return (
    <PhotographsPage
      heroLabel="Japan"
      titleId="japan05-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      previousHref="/japan04"
      overviewHref="/japanoverview"
      nextHref="/japan06"
      sections={[
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/japan05/japan136.jpg",
                width: 400,
                height: 274,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan133.jpg",
                width: 400,
                height: 202,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan138.jpg",
                width: 400,
                height: 271,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan134.jpg",
                width: 400,
                height: 271,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan137.jpg",
                width: 400,
                height: 263,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan123.jpg",
                width: 400,
                height: 381,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan128.jpg",
                width: 400,
                height: 269,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan129.jpg",
                width: 268,
                height: 400,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan130.jpg",
                width: 400,
                height: 406,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan131.jpg",
                width: 400,
                height: 265,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan132.jpg",
                width: 400,
                height: 270,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan135.jpg",
                width: 400,
                height: 271,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan139.jpg",
                width: 400,
                height: 265,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan126.jpg",
                width: 400,
                height: 278,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/japan127.jpg",
                width: 400,
                height: 270,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/009_-_Japan_-_tea_ceremony.jpg",
                width: 400,
                height: 274,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/019_-_Japan_Pavilion_-_Nikko_Shrine.jpg",
                width: 400,
                height: 275,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
            {
              image: {
                src: "/images/japan05/021_-_Japan_Pavilion_-_Nikko_Shrine.jpg",
                width: 400,
                height: 275,
              },
              source: "SOURCE: Above photos presented courtesy Bill Cotter Collection and are © Copyright 2018 Bill Cotter, All Rights Reserved",
            },
          ],
        },
      ]}
    />
  );
}
