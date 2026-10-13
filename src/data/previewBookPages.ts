/** Official Preview Book page tile grids (legacy Image/preview/*). */
import type { PreviewTileGroup } from "@/components/PreviewBookPage";

export type PreviewBookPageData = {
  slug: string;
  titleId: string;
  previousHref: string;
  nextHref: string;
  groups: PreviewTileGroup[];
};

export const PREVIEW_BOOK_PAGES: Record<string, PreviewBookPageData> = {
  "preview": {
    slug: "preview",
    titleId: "preview-title",
    previousHref: "/artifacts",
    nextHref: "/preview01",
    groups: [
      {
        columns: 2,
        tiles: [
          { src: "/images/preview/cover.1.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.2.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.3.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.4.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.5.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.6.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.7.jpg", width: 300, height: 200 },
          { src: "/images/preview/cover.8.jpg", width: 300, height: 200 },
        ],
      },
    ],
  },
  "preview01": {
    slug: "preview01",
    titleId: "preview01-title",
    previousHref: "/preview",
    nextHref: "/preview02",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/1.01.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.02.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.04.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.07.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.09.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.10.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.11.jpg", width: 300, height: 400 },
          { src: "/images/preview/1.12.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview02": {
    slug: "preview02",
    titleId: "preview02-title",
    previousHref: "/preview01",
    nextHref: "/preview03",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/2.01.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.02.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.04.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.07.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/2.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview03": {
    slug: "preview03",
    titleId: "preview03-title",
    previousHref: "/preview02",
    nextHref: "/preview04",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/3.01.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.02.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/3.04.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.05.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/3.07.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.08.jpg", width: 301, height: 400 },
          { src: "/images/preview/3.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview04": {
    slug: "preview04",
    titleId: "preview04-title",
    previousHref: "/preview03",
    nextHref: "/preview05",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/4.01.jpg", width: 301, height: 400 },
          { src: "/images/preview/4.02.jpg", width: 300, height: 400 },
          { src: "/images/preview/4.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/4.04.jpg", width: 301, height: 401 },
          { src: "/images/preview/4.05.jpg", width: 300, height: 401 },
          { src: "/images/preview/4.06.jpg", width: 300, height: 401 },
          { src: "/images/preview/4.07.jpg", width: 301, height: 400 },
          { src: "/images/preview/4.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/4.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview05": {
    slug: "preview05",
    titleId: "preview05-title",
    previousHref: "/preview04",
    nextHref: "/preview06",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/5.01.jpg", width: 300, height: 401 },
          { src: "/images/preview/5.02.jpg", width: 300, height: 401 },
          { src: "/images/preview/5.03.jpg", width: 300, height: 401 },
          { src: "/images/preview/5.04.jpg", width: 300, height: 400 },
          { src: "/images/preview/5.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/5.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/5.07.jpg", width: 300, height: 400 },
          { src: "/images/preview/5.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/5.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview06": {
    slug: "preview06",
    titleId: "preview06-title",
    previousHref: "/preview05",
    nextHref: "/preview07",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/6.01.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.02.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/6.04.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.05.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/6.07.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.08.jpg", width: 301, height: 400 },
          { src: "/images/preview/6.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview07": {
    slug: "preview07",
    titleId: "preview07-title",
    previousHref: "/preview06",
    nextHref: "/preview08",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/7.01.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.02.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.03.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.04.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.05.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.06.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.07.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.08.jpg", width: 300, height: 437 },
          { src: "/images/preview/7.09.jpg", width: 300, height: 437 },
        ],
      },
    ],
  },
  "preview08": {
    slug: "preview08",
    titleId: "preview08-title",
    previousHref: "/preview07",
    nextHref: "/preview09",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/8.01.jpg", width: 301, height: 400 },
          { src: "/images/preview/8.02.jpg", width: 300, height: 400 },
          { src: "/images/preview/8.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/8.04.jpg", width: 301, height: 400 },
          { src: "/images/preview/8.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/8.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/8.07.jpg", width: 301, height: 400 },
          { src: "/images/preview/8.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/8.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview09": {
    slug: "preview09",
    titleId: "preview09-title",
    previousHref: "/preview08",
    nextHref: "/preview10",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/9.01.jpg", width: 300, height: 401 },
          { src: "/images/preview/9.02.jpg", width: 300, height: 401 },
          { src: "/images/preview/9.03.jpg", width: 300, height: 401 },
          { src: "/images/preview/9.04.jpg", width: 300, height: 400 },
          { src: "/images/preview/9.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/9.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/9.07.jpg", width: 300, height: 400 },
          { src: "/images/preview/9.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/9.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview10": {
    slug: "preview10",
    titleId: "preview10-title",
    previousHref: "/preview09",
    nextHref: "/preview11",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/10.01.jpg", width: 301, height: 438 },
          { src: "/images/preview/10.02.jpg", width: 300, height: 438 },
          { src: "/images/preview/10.03.jpg", width: 300, height: 438 },
          { src: "/images/preview/10.04.jpg", width: 301, height: 439 },
          { src: "/images/preview/10.05.jpg", width: 300, height: 439 },
          { src: "/images/preview/10.06.jpg", width: 300, height: 439 },
          { src: "/images/preview/10.07.jpg", width: 301, height: 438 },
          { src: "/images/preview/10.08.jpg", width: 300, height: 438 },
          { src: "/images/preview/10.09.jpg", width: 300, height: 438 },
        ],
      },
    ],
  },
  "preview11": {
    slug: "preview11",
    titleId: "preview11-title",
    previousHref: "/preview10",
    nextHref: "/preview12",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/11.01.jpg", width: 300, height: 450 },
          { src: "/images/preview/11.02.jpg", width: 301, height: 450 },
          { src: "/images/preview/11.03.jpg", width: 300, height: 450 },
          { src: "/images/preview/11.04.jpg", width: 300, height: 451 },
          { src: "/images/preview/11.05.jpg", width: 301, height: 451 },
          { src: "/images/preview/11.06.jpg", width: 300, height: 451 },
          { src: "/images/preview/11.07.jpg", width: 300, height: 450 },
          { src: "/images/preview/11.08.jpg", width: 301, height: 450 },
          { src: "/images/preview/11.09.jpg", width: 300, height: 450 },
        ],
      },
    ],
  },
  "preview12": {
    slug: "preview12",
    titleId: "preview12-title",
    previousHref: "/preview11",
    nextHref: "/preview13",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/12.01.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.02.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.03.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.04.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.05.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.06.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.07.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.08.jpg", width: 300, height: 410 },
          { src: "/images/preview/12.09.jpg", width: 300, height: 410 },
        ],
      },
    ],
  },
  "preview13": {
    slug: "preview13",
    titleId: "preview13-title",
    previousHref: "/preview12",
    nextHref: "/preview14",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/13.01.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.02.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.03.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.04.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.05.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.06.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.07.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.08.jpg", width: 300, height: 430 },
          { src: "/images/preview/13.09.jpg", width: 300, height: 430 },
        ],
      },
    ],
  },
  "preview14": {
    slug: "preview14",
    titleId: "preview14-title",
    previousHref: "/preview13",
    nextHref: "/preview15",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/14.01.jpg", width: 300, height: 401 },
          { src: "/images/preview/14.02.jpg", width: 300, height: 401 },
          { src: "/images/preview/14.03.jpg", width: 300, height: 401 },
          { src: "/images/preview/14.04.jpg", width: 300, height: 400 },
          { src: "/images/preview/14.05.jpg", width: 300, height: 400 },
          { src: "/images/preview/14.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/14.07.jpg", width: 300, height: 400 },
          { src: "/images/preview/14.08.jpg", width: 300, height: 400 },
          { src: "/images/preview/14.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview15": {
    slug: "preview15",
    titleId: "preview15-title",
    previousHref: "/preview14",
    nextHref: "/preview16",
    groups: [
      {
        columns: 3,
        tiles: [
          { src: "/images/preview/15.01.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.02.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.03.jpg", width: 300, height: 400 },
          { src: "/images/preview/15.04.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.05.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.06.jpg", width: 300, height: 400 },
          { src: "/images/preview/15.07.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.08.jpg", width: 301, height: 400 },
          { src: "/images/preview/15.09.jpg", width: 300, height: 400 },
        ],
      },
    ],
  },
  "preview16": {
    slug: "preview16",
    titleId: "preview16-title",
    previousHref: "/preview15",
    nextHref: "/artifacts",
    groups: [
      {
        columns: 2,
        tiles: [
          { src: "/images/preview/16.01.jpg", width: 300, height: 240 },
          { src: "/images/preview/16.02.jpg", width: 300, height: 240 },
          { src: "/images/preview/16.03.jpg", width: 300, height: 240 },
          { src: "/images/preview/16.04.jpg", width: 300, height: 240 },
        ],
      },
      {
        columns: 2,
        tiles: [
          { src: "/images/preview/17.01.jpg", width: 300, height: 240 },
          { src: "/images/preview/17.02.jpg", width: 300, height: 240 },
          { src: "/images/preview/17.03.jpg", width: 300, height: 240 },
          { src: "/images/preview/17.04.jpg", width: 300, height: 240 },
        ],
      },
    ],
  },
};
