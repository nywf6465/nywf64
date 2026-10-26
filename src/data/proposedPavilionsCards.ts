import {
  AMERICAN_INDIAN_EXPOSITION,
  ARCH_OF_THE_AMERICAS,
} from "@/data/aCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Proposed Pavilions Never Built link-card rows — fountains / religions model.
 * 1. American Indian Exposition — Attractions from A to Z (`/A`)
 * 2. Arch of the Americas — Attractions from A to Z (`/A`)
 */
export type ProposedPavilionsCard = FountainsCard;

export const PROPOSED_PAVILIONS_CARDS: ProposedPavilionsCard[] = [
  AMERICAN_INDIAN_EXPOSITION,
  ARCH_OF_THE_AMERICAS,
];
