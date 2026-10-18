/**
 * Photo Lab Slide Set — tray 1 order from legacy photolab02.html.
 * Thumbnails link to `/photolab5601` … `/photolab5650`.
 */
export const PHOTOLAB_TRAY1_IDS = Array.from({ length: 50 }, (_, index) =>
  String(5601 + index),
);

/**
 * Photo Lab Slide Set — tray 2 order from legacy photolab03.html.
 * Thumbnails link to `/photolab5471` … `/photolab5540`.
 */
export const PHOTOLAB_TRAY2_IDS = Array.from({ length: 70 }, (_, index) =>
  String(5471 + index),
);

/**
 * Photo Lab Slide Set — tray 3 order from legacy photolab04.html.
 * Thumbnails link to `/photolabS301A` … `/photolabS313D`.
 */
export const PHOTOLAB_TRAY3_IDS = Array.from({ length: 13 }, (_, setIndex) =>
  ["A", "B", "C", "D"].map((letter) => `S${301 + setIndex}${letter}`),
).flat();
