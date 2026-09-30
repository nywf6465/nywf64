"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { StarDivider } from "./StarDivider";
import styles from "./SiteHeader.module.css";

/** Transparent hotspots over exact hamburger-menu.jpg art — do not rebuild as HTML text. */
/**
 * Main list Y bands from art dividers (1024×1602 after EXPOS row insert).
 * Content below Flushing Meadows was shifted down by one menu row (66px).
 */
const MENU_HOTSPOTS = [
  {
    id: "home",
    label: "HOME",
    href: "/",
    left: "6%",
    top: "5.493%",
    width: "88%",
    height: "3.121%",
  },
  {
    id: "pavilions",
    label: "PAVILIONS, ATTRACTIONS & EXHIBITS",
    href: "/pavilions",
    left: "6%",
    top: "8.614%",
    width: "88%",
    height: "3.870%",
  },
  {
    id: "maps",
    label: "INTERACTIVE MAPS & PHOTOS",
    href: "/maps",
    left: "6%",
    top: "12.485%",
    width: "88%",
    height: "3.870%",
  },
  {
    id: "information",
    label: "THE INFORMATION BOOTH",
    href: "/information",
    left: "6%",
    top: "16.354%",
    width: "88%",
    height: "4.120%",
  },
  {
    id: "artifacts",
    label: "ARTIFACTS & LEGACIES",
    href: "/artifacts",
    left: "6%",
    top: "20.474%",
    width: "88%",
    height: "4.058%",
  },
  {
    id: "people",
    label: "PEOPLE OF THE FAIR",
    href: "/people",
    left: "6%",
    top: "24.532%",
    width: "88%",
    height: "4.120%",
  },
  {
    id: "stories",
    label: "STORIES & ESSAYS",
    href: "/stories",
    left: "6%",
    top: "28.652%",
    width: "88%",
    height: "4.182%",
  },
  {
    id: "park",
    label: "FLUSHING MEADOWS PARK",
    href: "/flushing-meadows",
    left: "6%",
    top: "32.834%",
    width: "88%",
    height: "4.120%",
  },
  {
    id: "expos",
    label: "OTHER FAIRS AND EXPOS",
    href: "/expos",
    left: "6%",
    top: "36.954%",
    width: "88%",
    height: "4.120%",
  },
  {
    id: "top-ten",
    label: "The Top Ten Attractions",
    href: "/top-ten",
    left: "53.027%",
    top: "46.192%",
    width: "21.777%",
    height: "6.804%",
  },
  {
    id: "disney",
    label: "The Disney Shows",
    href: "/pavilions/disney-shows",
    left: "25.293%",
    top: "57.491%",
    width: "21.777%",
    height: "7.179%",
  },
  {
    id: "atoz",
    label: "The Attractions from A to Z",
    href: "/atoz",
    left: "25.293%",
    top: "46.192%",
    width: "21.484%",
    height: "6.804%",
  },
  {
    id: "religion",
    label: "Religion at the Fair",
    href: "/pavilions/religions",
    left: "53.027%",
    top: "57.491%",
    width: "21.875%",
    height: "7.241%",
  },
  {
    id: "american-industries",
    label: "Exhibits of American Industry",
    href: "/pavilions/exhibits-of-american-industry",
    left: "27.246%",
    top: "74.906%",
    width: "17.090%",
    height: "6.179%",
  },
  {
    id: "international",
    label: "Exhibits of International Participants",
    href: "/pavilions/exhibits-of-international-participants",
    left: "55.859%",
    top: "75.031%",
    width: "14.648%",
    height: "5.806%",
  },
  {
    id: "federal-states",
    label: "Federal and State Exhibits",
    href: "/pavilions/federal-and-state-exhibits",
    left: "28.125%",
    top: "86.329%",
    width: "16.797%",
    height: "6.679%",
  },
  {
    id: "amusements",
    label: "Entertainment, Amusements and Rides",
    href: "/pavilions/entertainment-amusements-and-rides",
    left: "54.004%",
    top: "86.267%",
    width: "17.480%",
    height: "7.116%",
  },
] as const;

const CLOSE_HOTSPOT = {
  left: "71.094%",
  top: "0.125%",
  width: "7.812%",
  height: "4.369%",
} as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const hotspotRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  // Hover opens and pins — menu stays until a link, X, backdrop, or Escape.
  useEffect(() => {
    const el = hotspotRef.current;
    if (!el) return;
    el.addEventListener("mouseenter", openMenu);
    return () => {
      el.removeEventListener("mouseenter", openMenu);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <header className={styles.header}>
      <div className={styles.bannerWrap}>
        {/* Entire header banner art links home; hamburger hotspot stays a button on top. */}
        <Link href="/" className={styles.bannerLink} aria-label="nywf64.com home">
          <Image
            src="/images/site-header-banner-v4.jpg"
            alt="nywf64.com — New York World’s Fair 1964/1965. The Website of America’s Space Age World’s Fair."
            width={2172}
            height={305}
            priority
            className={styles.banner}
            sizes="(max-width: 910px) 100vw, 910px"
          />
        </Link>

        {/*
          Phone: the full-width banner crop clips the hamburger. Show the same
          art’s hamburger slice on the right so the icon stays visible.
        */}
        <span className={styles.menuGlyph} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/site-header-banner-v4.jpg"
            alt=""
            width={2172}
            height={305}
            draggable={false}
          />
        </span>

        <button
          ref={hotspotRef}
          type="button"
          className={
            open
              ? `${styles.menuHotspot} ${styles.menuHotspotOpen}`
              : styles.menuHotspot
          }
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={openMenu}
        />
      </div>

      {/* Thick burgundy rule (shared with footer) — flush under banner */}
      <StarDivider className={styles.bannerDivider} />

      {open ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={close}
        />
      ) : null}

      <nav
        id={menuId}
        className={styles.drawer}
        data-open={open || undefined}
        aria-label="Site"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={styles.panel}>
          {/*
            Frame is the full art (hotspot % coords). Panel clips to the
            content column + modest side padding — art file unchanged.
          */}
          <div className={styles.frame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hamburger-menu.jpg"
              alt="Site menu"
              width={1024}
              height={1602}
              className={styles.menuArt}
              draggable={false}
            />

            <button
              type="button"
              className={styles.closeHotspot}
              style={CLOSE_HOTSPOT}
              aria-label="Close menu"
              onClick={close}
              tabIndex={open ? 0 : -1}
            />

            {MENU_HOTSPOTS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={styles.navHotspot}
                style={{
                  left: item.left,
                  top: item.top,
                  width: item.width,
                  height: item.height,
                }}
                aria-label={item.label}
                onClick={close}
                tabIndex={open ? 0 : -1}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
