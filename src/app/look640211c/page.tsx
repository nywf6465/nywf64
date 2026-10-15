import type { Metadata } from "next";
import {
  LifeMagazineArticlePage,
  type LifeCollage,
} from "@/components/LifeMagazineArticlePage";

export const metadata: Metadata = {
  title: "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — nywf64.com",
  description:
    "Look Magazine | February 11, 1964 | Vol. 28, No. 3 — For the Fair: Shoes to Pamper your Feet / Home for the Fair — magazine article scans covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

const COLLAGES: LifeCollage[] = [
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/look640211.159.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.158.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.157.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.156.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.155.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.154.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.153.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.152.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.151.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/look640211.168.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.167.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.166.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.165.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.164.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.163.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.162.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.161.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.160.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/look640211.177.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.176.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.175.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.174.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.173.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.172.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.171.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.170.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.169.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/look640211.186.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.185.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.184.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.183.jpg", width: 301, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.182.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.181.jpg", width: 300, height: 371, alt: "" },
      { src: "/images/look640211c/look640211.180.jpg", width: 301, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.179.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.178.jpg", width: 300, height: 370, alt: "" },
    ],
  },
  {
    columns: 3,
    bordered: false,
    tiles: [
      { src: "/images/look640211c/look640211.195.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.194.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.193.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.192.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.191.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.190.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.189.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.188.jpg", width: 300, height: 370, alt: "" },
      { src: "/images/look640211c/look640211.187.jpg", width: 300, height: 370, alt: "" },
    ],
  },
];

/**
 * Look Magazine | February 11, 1964 | Vol. 28, No. 3 — Shoes / Home for the Fair.
 * Body from legacy look640211c.html — tiled magazine scan panels.
 * Linked from the 4th cover on /look01. Nav bar shows Page 2. No NEXT.
 */
export default function Look640211cPage() {
  return (
    <LifeMagazineArticlePage
      title="Look Magazine | February 11, 1964 | Vol. 28, No. 3"
      titleId="look640211c-title"
      previousHref="/look01"
      collages={COLLAGES}
    />
  );
}
