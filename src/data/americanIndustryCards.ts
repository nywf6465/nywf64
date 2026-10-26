import {
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
  AVIS_ANTIQUE_CAR_RIDE,
} from "@/data/aCards";
import { BELL_SYSTEM, BETTER_LIVING_CENTER } from "@/data/bCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Exhibits of American Industry link-card rows — fountains / religions model.
 * 1. All-State Properties & Macy's — Attractions from A to Z (`/A`)
 * 2. American Express — Attractions from A to Z (`/A`)
 * 3. Arlington Hat — Attractions from A to Z (`/A`)
 * 4. Avis Antique Car Ride — Attractions from A to Z (`/A`)
 * 5. Bell System — Attractions from A to Z (`/B`)
 * 6. Better Living Center — Attractions from A to Z (`/B`)
 */
export type AmericanIndustryCard = FountainsCard;

export const AMERICAN_INDUSTRY_CARDS: AmericanIndustryCard[] = [
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
  AVIS_ANTIQUE_CAR_RIDE,
  BELL_SYSTEM,
  BETTER_LIVING_CENTER,
];
