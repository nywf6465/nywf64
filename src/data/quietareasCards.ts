import { GARDEN_OF_MEDITATION } from "@/data/gCards";
import { MAINMALL } from "@/data/mCards";
import { NATMARPAR } from "@/data/nCards";
import { OKLAHOMA } from "@/data/oCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Quiet Spaces & Rest Areas link-card rows — fountains / religions model.
 * 1. Garden of Meditation — Attractions from A to Z (`/G`)
 * 2. Main Mall — Attractions from A to Z (`/M`)
 * 3. National Maritime Union Park — Attractions from A to Z (`/N`)
 * 4. Oklahoma — Attractions from A to Z (`/O`)
 */
export type QuietAreasCard = FountainsCard;

export const QUIETAREAS_CARDS: QuietAreasCard[] = [
  GARDEN_OF_MEDITATION,
  MAINMALL,
  NATMARPAR,
  OKLAHOMA,
];
