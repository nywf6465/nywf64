import type { Metadata } from "next";
import Link from "next/link";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";
import { HOLLYWOOD_HERO } from "@/components/HollywoodLegacyTopicPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs II — Hollywood — nywf64.com",
  description:
    "Hollywood U.S.A. pavilion photographs — Gallery of Photographs II — 1964/1965 New York World’s Fair on nywf64.com.",
};

const cotterSource = "SOURCE: © Copyright Bill Cotter Collection";

export default function Hollywood05Page() {
  return (
    <PhotographsPage
      heroLabel="Hollywood"
      titleId="hollywood05-title"
      title="Gallery of Photographs II"
      hero={HOLLYWOOD_HERO}
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood04"
      overviewHref="/hollywoodoverview"
      nextHref="/hollywood06"
      intro={
        <p>
          <strong>Bill Cotter</strong>, World&apos;s Fair enthusiast, has been
          collecting images of the 1964/1965 New York World&apos;s Fair for many
          years. He shares with us here some excellent views of{" "}
          <strong>
            <em>Hollywood U.S.A.</em>
          </strong>{" "}
          If you would like to see more photos from Bill&apos;s fabulous
          collection of World&apos;s Fair images, visit his website at{" "}
          <Link href="http://www.worldsfairphotos.com/" target="_blank">
            WorldsFairPhotos.com
          </Link>
          .
        </p>
      }
      sections={[
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/hollywood05/holwod39.jpg",
                width: 300,
                height: 451,
                alt: "Replica of Grauman's Chinese Theater welcomes visitors to Hollywood U.S.A.",
              },
              title:
                "Replica of Hollywood's famed Grauman's Chinese Theater welcomes visitors to Hollywood U.S.A.",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod45.jpg",
                width: 400,
                height: 266,
                alt: "Information booth and ticket stand",
              },
              title:
                "Information booth and ticket stand sports the pavilion's marquee",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod47.jpg",
                width: 300,
                height: 457,
                alt: "Grauman's Chinese Theater replica",
              },
              title:
                "Replica of Hollywood's famed Grauman's Chinese Theater welcomes visitors to Hollywood U.S.A.",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod46.jpg",
                width: 400,
                height: 273,
                alt: "Hollywood U.S.A.",
              },
              title: "Hollywood U.S.A.",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod44.jpg",
                width: 400,
                height: 272,
                alt: "Back side of Hollywood U.S.A.",
              },
              title:
                "A view of the back side of Hollywood U.S.A. as seen from the Transportation Area and Grand Central Parkway.  Behind the large wall is the setting for West Side Story.",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod50.jpg",
                width: 300,
                height: 451,
                alt: "West Side Story balcony set",
              },
              title:
                "Perhaps someone as Maria sang \"Tonight\" from the balcony on the outdoor replica street setting for West Side Story",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod40.jpg",
                width: 400,
                height: 264,
                alt: "Gunsmoke TV series set",
              },
              title:
                "The main street of Dodge City is quiet in this afternoon view of the replica Gunsmoke TV series set.",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod53.jpg",
                width: 400,
                height: 387,
                alt: "Gunsmoke Long Branch Saloon",
              },
              title:
                "Is that Miss Kitty and Newly checking out his six-shooter outside the Long Branch Saloon?",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod42.jpg",
                width: 400,
                height: 264,
                alt: "Long Branch Saloon brawl",
              },
              title:
                "There's trouble brewing at the Long Branch Saloon as some city slicker tourist Fairgoers are about to have a brawl",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod54.jpg",
                width: 400,
                height: 387,
                alt: "Cleopatra's royal barge",
              },
              title: "Cleopatra's royal barge",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod51.jpg",
                width: 400,
                height: 387,
                alt: "Cleopatra stage setting",
              },
              title:
                "Elaborate stage setting for Cleopatra's meeting with Marc Antony",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod52.jpg",
                width: 400,
                height: 389,
                alt: "The King and I set",
              },
              title: "East meets west on the set of The King and I",
              source: cotterSource,
            },
            {
              image: {
                src: "/images/hollywood05/holwod55.jpg",
                width: 400,
                height: 604,
                alt: "The King and I stage setting",
              },
              title:
                "Elaborate stage setting for The King and I at the Hollywood U.S.A. Pavilion",
              source: cotterSource,
            },
          ],
        },
      ]}
    />
  );
}
