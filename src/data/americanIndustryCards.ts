import {
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
} from "@/data/aCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Exhibits of American Industry link-card rows — fountains / religions model.
 * 1. All-State Properties & Macy's — Attractions from A to Z (`/A`)
 * 2. American Express — Attractions from A to Z (`/A`)
 * 3. Arlington Hat — Attractions from A to Z (`/A`)
 */
export type AmericanIndustryCard = FountainsCard;

export const AMERICAN_INDUSTRY_CARDS: AmericanIndustryCard[] = [
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
];
