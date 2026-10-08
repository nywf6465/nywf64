import { type FountainsCard } from "@/data/fountainsCards";

/**
 * Restaurants, Bars & Eateries link cards — fountains-model layout.
 * Card content matches the Aerial Tower Ride card on `/A`.
 */
export const RESTAURANTS_CARDS: FountainsCard[] = [
  {
    id: "aerial-tower-ride",
    href: "/aertowoverview",
    // DESCRIPTION (italic under ICON) — exact from A page, keep &
    title: "Aerial Tower Ride & Waffle Restaurant",
    // TEXT (to the right of ICON) — exact from A page
    body: "An outdoor snack bar sells special waffles, and gondolas give rides to the top of a tower.",
    pavilionSrc: "/images/aertow/aerial-tower-ride-icon.png",
    pavilionWidth: 764,
    pavilionHeight: 329,
    pavilionAlt: "Aerial Tower…",
  },
];
